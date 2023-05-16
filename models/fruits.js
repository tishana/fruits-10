// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: false
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: true
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     },
//     {
//         name:'pineapple',
//         color: 'golden',
//         readyToEat: false
//     },
//     {
//         name:'lychee',
//         color: 'fuschia',
//         readyToEat: true
//     },
//     {
//         name:'grape',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'kumquat',
//         color: 'green',
//         readyToEat: false
//     }
// ]
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit