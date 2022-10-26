const { ObjectId } = require('bson')
const { HouseModel } = require('../models')

const getAllHouses = async (req, res) => {
  const houses = await HouseModel.find({})
  res.send(houses)
}

const getHouse = async (req, res) => {
  const house = await HouseModel.find({ _id: req.params.id })
  res.send(house)
}

const deleteHouse = async (req, res) => {
  const deleted = await HouseModel.findOneAndDelete({
    _id: ObjectId(`${req.params.id}`)
  })
  res.send(deleted)
}

const createHouse = async (req, res) => {
  //do something
  console.log(req.body)
  let newHouse = await HouseModel.create(req.body)
  res.send(newHouse)
}

const updateHouse = async (req, res) => {
  //do something with req.params.id
  console.log(req)
  res.send('trying to update a house')
}

module.exports = {
  getAllHouses,
  getHouse,
  createHouse,
  deleteHouse,
  updateHouse
}
