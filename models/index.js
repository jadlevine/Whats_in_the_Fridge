const mongoose = require('mongoose')
const FoodSchema = require('./FoodSchema')
const HouseSchema = require('./HouseSchema')
const BasicHouseSchema = require('./BasicHouseSchema')
const BasicFoodSchema = require('./BasicFoodSchema')

const FoodModel = mongoose.model('Food', FoodSchema)
const HouseModel = mongoose.model('House', HouseSchema)
const BasicHouseModel = mongoose.model('BasicHouse', BasicHouseSchema)
const BasicFoodModel = mongoose.model('BasicFood', BasicFoodSchema)

module.exports = {
  FoodModel,
  HouseModel,
  BasicHouseModel,
  BasicFoodModel
}

//need to change foodcontroller to basic food models, and then test it out with create, get... populate
