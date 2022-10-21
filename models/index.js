const mongoose = require('mongoose')
const FoodSchema = require('./food')
const HouseSchema = require('./house')

const Food = mongoose.model('Food', FoodSchema)
const House = mongoose.model('House', HouseSchema)

module.exports = {
  Food,
  House
}
