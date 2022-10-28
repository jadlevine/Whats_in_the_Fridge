const { ObjectId } = require('bson')
const { HouseModel } = require('../models')

const getAllHouses = async (req, res) => {
  const houses = await HouseModel.find({})
  res.send(houses)
}

const getHouse = async (req, res) => {
  const house = await HouseModel.findById({
    _id: req.params.houseid
    // }).populate({ path: 'foods' })
  })
    .populate('fridge')
    .populate('freezer')
    .populate('pantry')
    .populate('otherStorage')
  res.send(house)
}

const deleteHouse = async (req, res) => {
  const deleted = await HouseModel.findOneAndDelete({
    _id: req.params.houseid
    // _id: ObjectId(`${req.params.id}`)
  })
  res.send(deleted)
}

const createHouse = async (req, res) => {
  let newHouse = await HouseModel.create(req.body)
  res.send(newHouse)
}

//update this to look like the others... or the others to look like this?
//10/26/22 - 12:15PM
const updateHouse = async (req, res) => {
  try {
    const house = await HouseModel.findByIdAndUpdate(
      req.params.houseid,
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
  getAllHouses,
  getHouse,
  createHouse,
  deleteHouse,
  updateHouse
}
