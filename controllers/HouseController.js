const { ObjectId } = require('bson')
const { HouseModel, BasicHouseModel } = require('../models')

const getAllHouses = async (req, res) => {
  // const houses = await HouseModel.find({})
  const houses = await BasicHouseModel.find({})
  res.send(houses)
}

const getHouse = async (req, res) => {
  // const house = await HouseModel.findById({

  // const house = await BasicHouseModel.findById({
  //   _id: req.params.houseid
  // })

  const house = await BasicHouseModel.findById({
    _id: req.params.houseid
  }).populate({ path: 'foods' })

  res.send(house)
}

const deleteHouse = async (req, res) => {
  // const deleted = await HouseModel.findOneAndDelete({
  const deleted = await BasicHouseModel.findOneAndDelete({
    _id: ObjectId(`${req.params.id}`)
  })
  res.send(deleted)
}

const createHouse = async (req, res) => {
  //do something
  console.log(req.body)
  // let newHouse = await HouseModel.create(req.body)
  let newHouse = await BasicHouseModel.create(req.body)
  res.send(newHouse)
}

//update this to look like the others... or the others to look like this?
//10/26/22 - 12:15PM
const updateHouse = async (req, res) => {
  try {
    // const house = await HouseModel.findByIdAndUpdate(req.params.id, req.body, {
    const house = await BasicHouseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(house)
  } catch (error) {
    return res.status(500).send(error.message)
  }

  //do something with req.params.id
  // console.log(req)
  // res.send('trying to update a house')
}

module.exports = {
  getAllHouses,
  getHouse,
  createHouse,
  deleteHouse,
  updateHouse
}
