const { Food } = require('../models')

const getFood = async (req, res) => {
  const foods = await Food.find({})
  res.json(foods)
  // res.send({
  //   message: 'Getting Food'
  // })
}

const createFood = async (req, res) => {
  let newFood = await Food.create({
    // name: 'relish',
    name: req.params.name,
    // house_id: house._id,
    owner: req.params.owner,
    // house_id: //?????
    // storageLocation: 'fridge'
    location: req.params.location
  })
  res.json(`new food created: ${newFood}`)
}

const updateFoodLocation = async (req, res) => {
  const food = await Food.updateOne(
    { name: req.params.name, owner: req.params.owner },
    { location: req.params.location }
  )
  res.json(`${req.params.name} moved to ${req.params.location}`)
}

const deleteFood = async (req, res) => {
  let deleted = await Food.deleteOne(
    {
      name: req.params.name,
      owner: req.params.owner,
      location: req.params.location
    }
    ////BUG - a delete request on a non existant document still
    // (error) => {
    //   if (error) {
    //     res.json(
    //       `${req.params.owner} doesn't have any ${req.params.name} in his ${req.params.location} to remove`
    //     )
    //   } else {
    //     res.json(
    //       `${req.params.owner}'s ${req.params.name} removed from ${req.params.location}`
    //     )
    //   }
    // }
  )
  if (deleted.deletedCount === 0) {
    res.json(
      `${req.params.owner} doesn't have any ${req.params.name} in his ${req.params.location} to remove`
    )
  } else {
    res.json(
      `${req.params.owner}'s ${req.params.name} removed from ${req.params.location}`
    )
  }
}

//you are here in controllers lesson
//https://github.com/SEI-R-9-19/u2_lesson_express_controllers#:~:text=You've%20just%20successfully,first%20controller%20function!

module.exports = {
  getFood,
  createFood,
  deleteFood,
  updateFoodLocation
}
