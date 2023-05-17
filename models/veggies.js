// const veggies = [
//     {
//         name:'kale',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'rutabaga',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'purple yam',
//         color: 'purple',
//         readyToEat: true
//     },
//     {
//         name:'bell pepper',
//         color: 'red',
//         readyToEat: false
//     },
//     {
//         name:'spinach',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'winter melon',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'bitter gourd',
//         color: 'green',
//         readyToEat: false
//     }
// ]

// module.exports = veggies

const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
})

const Veggie = mongoose.model('Veggie', veggieSchema)

module.exports = Veggie