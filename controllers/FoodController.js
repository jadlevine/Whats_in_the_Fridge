const { ObjectId } = require('bson')
const { FoodModel } = require('../models')

const getAllFoods = async (req, res) => {
  const foods = await FoodModel.find({})
  res.send(foods)
}

const getFood = async (req, res) => {
  const food = await FoodModel.find({ _id: req.params.foodid })
  res.send(food)
}

//check that this still works
const deleteFood = async (req, res) => {
  let deleted = await FoodModel.findOneAndDelete({
    // _id: ObjectId(`${req.params.foodid}`)
    _id: req.params.foodid
  })
  res.send(`removed one food document: ${deleted}`)
}

//needs work on req.body
const createFood = async (req, res) => {
  let newFood = await FoodModel.create(req.body)
  res.send(newFood)
}

//see updateHouse in house controller for notes
const updateFood = async (req, res) => {
  try {
    const food = await FoodModel.findByIdAndUpdate(
      req.params.foodid,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(house)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllFoods,
  getFood,
  createFood,
  deleteFood,
  updateFood
}
