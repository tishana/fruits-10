// Add dotenv
require('dotenv').config()
// Load express...
const express = require('express')
// Method Override
const methodOverride = require('method-override')
// Instantiate express...
const app = express()
// Other variables...
const port = 3000
// Add dotenv
require('dotenv').config()

const fruitsController = require('./controllers/fruits')
// const veggiesController = require('./controllers/veggies')

// Mongoose info
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
// Middleware...
app.use(methodOverride('_method'))
app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Data...
const Fruit = require('./models/fruits')
const Veggies = require('./models/veggies')


// Routes... // localhost5656/fruits/378264872366778788734e
app.use('/fruits', fruitsController)
// app.use('/veggies', veggiesController)

// // Index : Show all the things!
// app.get('/fruits', (req, res)=>{
//     Fruit.find({}, (error, allFruits)=>{
//         res.render('fruits/Index', {
//             fruits: allFruits
//         })
//     })
// })

// app.get('/vegetables/', (req,res) => {
//     res.render('../views/vegetables/Index', { veg: veggies })
// })
// app.get('/fruits/seed', (req, res)=>{
//     Fruit.create([
//         {
//             name:'strawberry',
//             color:'green',
//             readyToEat: false
//         },
//         {
//             name:'grape',
//             color:'purple',
//             readyToEat: false
//         },
//         {
//             name:'avocado',
//             color:'green',
//             readyToEat: false
//         },
//         {
//             name:'banana',
//             color: 'yellow',
//             readyToEat: false
//         },
//         {
//             name:'lychee',
//             color: 'fuschia',
//             readyToEat: true
//         },
//         {
//             name:'bell pepper',
//             color: 'red',
//             readyToEat: false
//         },
//         {
//             name:'kumquat',
//             color: 'orange',
//             readyToEat: true
//         },
//         {
//             name:'orange',
//             color: 'green',
//             readyToEat: false
//         },
//         {
//             name:'raspberry',
//             color: 'magenta',
//             readyToEat: true
//         },
//         {
//             name:'blackberry',
//             color: 'purple',
//             readyToEat: true
//         },
//         {
//             name:'blueberry',
//             color: 'blue',
//             readyToEat: true
//         }
//     ], (err, data)=>{
//         res.redirect('/fruits');
//     })
// });

// // New : An empty form for a new thing  
// // GET /fruits/new
// app.get('/fruits/new', (req, res) => {
//     res.render('../views/fruits/New')
// })
// app.get('/vegetables/new', (req, res) => {
//     res.render('../views/vegetables/New')
// });

// // Delete/Destroy : Get rid of this particular thing!  
// // DELETE /fruits/:id
// app.delete('/fruits/:id', (req, res)=>{
//     Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
//         res.redirect('/fruits') //redirect back to fruits index
//     })
// })

// // Update : Update this specific thing with this updated form 
// // PUT /fruits/:id
// app.put('/fruits/:id', (req, res)=>{
//     if(req.body.readyToEat === 'on'){
//         req.body.readyToEat = true
//     } else {
//         req.body.readyToEat = false
//     }
//     Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit)=>{
//        console.log(updatedFruit)
//         res.redirect(`/fruits/${req.params.id}`)
//     })
// })


// // Create : Make a new thing with this filled out form 
// //POST /fruits
// app.post('/fruits', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true //do some data correction
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false //do some data correction
//     }
//     // fruits.push(req.body) // pushing new fruit into fruits array
//     Fruit.create(req.body, (error, createdFruit)=>{
//         res.send(createdFruit)
//     });
    
//     res.redirect('/fruits'); //send the user back to /fruits
// })
// app.post('/vegetables', (req, res)=>{
//     if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
//         req.body.readyToEat = true //do some data correction
//     } else { //if not checked, req.body.readyToEat is undefined
//         req.body.readyToEat = false //do some data correction
//     }
//     veggies.push(req.body) // pushing new vegetable into vegetables array
//     console.log(veggies) // so we can see vegetables, including new vegetable
//     res.redirect('/vegetables') //send the user back to /vegetables
// })

// // Edit : A prefilled form to update a specific thing 
// // GET /fruits/:id/edit
// app.get('/fruits/:id/edit', (req, res)=>{
//     Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
//       if(!err){
//         res.render(
//     		  'fruits/Edit',
//     		{
//     			fruit: foundFruit //pass in the found fruit so we can prefill the form
//     		}
//     	)
//     } else {
//       res.send({ msg: err.message })
//     }
//     })
// })


// // Show : Show me this one thing by ID
// // GET /fruits/:id
// app.get('/fruits/:id', (req, res)=>{
//     Fruit.findById(req.params.id, (err, foundFruit)=>{
//         res.render('fruits/Show', {
//             fruit:foundFruit
//         })
//     })
// })

// app.get('/vegetables/:indexOfVegArray', (req,res) => {
//     res.render('../views/vegetables/Show', { // second param must be an object
//         veg: veggies[req.params.indexOfVegArray]
//     })
// })

// Listen...
app.listen(port, () => {
    console.log(`Jigglypuuuuf, Jigglyyyyypuuuuuuuf on ${port}`)
})
