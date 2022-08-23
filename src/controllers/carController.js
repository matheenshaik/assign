const carModel = require("../models/carModel")
const carDetailModel = require("../models/CarDetailModel")

const Cars = async function(req,res){
    let CarsIs =req.body
    let result = await carModel.create(CarsIs)
    res.send({data: result})
} 

const CarDetails = async function(req,res){
    let details = req.body
    let data =  await carDetailModel.create(details)
    res.send({result: data})
}

const getCarData = async function(req,res){
    let carData = await carDetailModel.findOne().populate('car') 
    res.send({result:carData})
}

module.exports.Cars= Cars
module.exports.CarDetails=CarDetails 
module.exports.getCarData= getCarData 