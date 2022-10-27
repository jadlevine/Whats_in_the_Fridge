const mongoose = require('mongoose')

const HouseSchema = require('./HouseSchema')
const FoodSchema = require('./FoodSchema')

const HouseModel = mongoose.model('HouseModel', HouseSchema)
const FoodModel = mongoose.model('FoodModel', FoodSchema)

module.exports = {
  HouseModel,
  FoodModel
}
