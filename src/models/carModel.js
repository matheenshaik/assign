const mongoose = require('mongoose')


const CarSchema = new mongoose.Schema({
    Brand: String,
    Model:String,
    since:Number
})

module.exports = mongoose.model('Car',CarSchema)