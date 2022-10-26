const { ObjectId } = require('bson')
const { FoodModel } = require('../models')

const getAllFoods = async (req, res) => {
  const foods = await FoodModel.find({})
  res.send(foods)
}

const getFood = async (req, res) => {
  const food = await FoodModel.find({ _id: req.params.id })
  res.send(food)
}

//check that this still works
const deleteFood = async (req, res) => {
  let deleted = await FoodModel.findOneAndDelete({
    _id: ObjectId(`${req.params.id}`)
  })
  res.send(`removed one food document: ${deleted}`)
  //this was from when i was using deleteOne, which did NOT return the deleted document/record
  // if (deleted.deletedCount === 0) {
  //   res.send(`item not found`)
  // } else {
  //   res.send(`id: ${req.params.id} deleted`)
  // }
}

//needs work on req.body
const createFood = async (req, res) => {
  let newFood = await FoodModel.create(
    req.body
    //   {
    //   // name: 'relish',
    //   name: req.params.name,
    //   // house_id: house._id,
    //   owner: req.params.owner,
    //   // house_id: //?????
    //   // storageLocation: 'fridge'
    //   location: req.params.location
    // }
  )
  res.send(newFood)
}

//needs work...on everything
const updateFood = async (req, res) => {
  const food = await FoodModel.updateOne(
    { _id: req.params.id },
    { location: 'pantry' }
  )
  res.json(`${req.params.id} moved to pantry`)
}

module.exports = {
  getAllFoods,
  getFood,
  createFood,
  deleteFood,
  updateFood
}
