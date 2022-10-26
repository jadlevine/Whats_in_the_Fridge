const mongoose = require('mongoose')
const FoodSchema = require('./FoodSchema')
const HouseSchema = require('./HouseSchema')

const FoodModel = mongoose.model('Food', FoodSchema)
const HouseModel = mongoose.model('House', HouseSchema)

module.exports = {
  FoodModel,
  HouseModel
}
