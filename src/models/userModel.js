const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    FirstName : String,
    LastName :String,
    mobile: Number,
    emailId : String,
    password : String,
    gender: {
        type : String,
        enum: ["male","female","other"]
    },
    isDeleted: {
        type: Boolean,
        default: false 
    }

}, {timestamps:true})

module.exports = mongoose.model("U-User", userSchema)//users