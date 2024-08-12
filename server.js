// Add dotenv
require('dotenv').config()
// Load express...
const express = require('express')
// Method Override
const methodOverride = require('method-override')
// Instantiate express...
const app = express()
// Other variables...
const PORT = process.env.PORT || 3001;


const fruitsController = require('./controllers/fruits')
const veggiesController = require('./controllers/veggies')

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
app.get('/fruits/seed', async (req, res)=>{
    await Fruit.deleteMany({}) // deletes all
    await Fruit.insertMany(seedFruit) // adds new ones from array
    res.send('done!')
})

app.get('/veggies/seed', async (req, res)=>{
    await Veggies.deleteMany({}) // deletes all
    await Veggies.insertMany(seedVeggies) // adds new ones from array
    res.send('done!')
})

app.use('/fruits', fruitsController)
app.use('/veggies', veggiesController)


    
    const seedFruit =[
        {
            name:'lychee',
            color: 'fuschia',
            readyToEat: true
        },
        {
            name:'kumquat',
            color: 'orange',
            readyToEat: true
        },
        {
            name:'orange',
            color: 'green',
            readyToEat: false
        },
        {
            name:'raspberry',
            color: 'magenta',
            readyToEat: true
        }
    ]

    const seedVeggies =[
        {
            name:'red pepper',
            color: 'red',
            readyToEat: true
        },
        {
            name:'broccoli',
            color: 'green',
            readyToEat: true
        },
        {
            name:'bitter gourd',
            color: 'green',
            readyToEat: false
        },
        {
            name:'yam',
            color: 'brown',
            readyToEat: true
        }
    ]



// Listen...
app.listen(PORT, () => {
    console.log(`Jigglypuuuuf, Jigglyyyyypuuuuuuuf on ${PORT}`)
})
