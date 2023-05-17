const express = require('express')
const router = express.Router()
const Veggies = require('../models/veggies')

// Index : Show all the things!
router.get('/', (req, res)=>{
    Veggies.find({}, (error, allVeggies)=>{
        res.render('vegetables/Index', {
            veg: allVeggies
        })
    })
})


// New : An empty form for a new thing  
// GET /veggies/new
router.get('/new', (req, res) => {
    res.render('../views/vegetables/New')
})


// Delete/Destroy : Get rid of this particular thing!  
// DELETE /vegetables/:id
router.delete('/:id', (req, res)=>{
    Veggies.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/veggies') //redirect back to veg index
    })
})

// Update : Update this specific thing with this updated form 
// PUT /vegetables/:id
router.put('/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    Veggies.findByIdAndUpdate(req.params.id, req.body, (err, updatedVeggie)=>{
       console.log(updatedVeggie)
        res.redirect(`/veggies/${req.params.id}`)
    })
})


// Create : Make a new thing with this filled out form 
//POST /vegetables
router.post('/', async (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false //do some data correction
    }
   
    await Veggies.create(req.body, (error, createdVeggie)=>{
        res.redirect('/veggies'); //send the user back to /vegetables
    });
    })


// Edit : A prefilled form to update a specific thing 
// GET /vegetables/:id/edit
router.get('/:id/edit', (req, res)=>{
    Veggies.findById(req.params.id, (err, foundVeggie)=>{ //find the veggie
      if(!err){
        res.render(
    		  'vegetables/Edit',
    		{
    			veggie: foundVeggie //pass in the found veg so we can prefill the form
    		}
    	)
    } else {
      res.send({ msg: err.message })
    }
    })
})


// Show : Show me this one thing by ID
// GET /vegetables/:id
router.get('/:id', (req, res)=>{
    Veggies.findById(req.params.id, (err, foundVeggie)=>{
        res.render('vegetables/Show', {
            veggie:foundVeggie
        })
    })
})

module.exports = router