const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const carDetailSchema = new mongoose.Schema({
    car:{
        type: ObjectId,
        ref:"Car"
    },
    color : String,
    category : {
        type: String,
        enum:["sports", "SUV"]
    },
    fuel: String,
    power: String,
    transmission: String,
    airBages: {type:String, default:true},
})
module.exports = mongoose.model('CarDetail',carDetailSchema)