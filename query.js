const db = require('./db')
const { Food, House } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//CRUD - Read a food
const findFood = async () => {
  const food = await Food.findOne({ name: 'relish' })
  console.log(food)
}

//CRUD - delete a food
const deleteFood = async () => {
  let deleted = await Food.deleteOne({ name: 'relish' })
  console.log(deleted)
}

//CRUD - Create a food
const createFood = async () => {
  //what house are we putting it?
  const house = await House.findOne({ owner: 'josh' })
  // console.log(house.storages[0]._id)

  //create the food
  let food = await Food.create({
    name: 'relish',
    house_id: house._id,
    storageLocation: 'fridge'
    // storageLocation_id: house.storages[0]._id
  })

  //update the house
  const updated = await House.updateOne(
    { owner: 'josh' },
    { $push: { 'storages.0.foods': food._id } }
  )
  // console.log(updated)
}

//CRUD - update a food (move its location)
const updateFood = async () => {
  const food = await Food.updateOne(
    { name: 'relish' },
    { storageLocation: 'pantry' }
  )
}

const findHouse = async () => {
  const house = await House.findOne()
  console.log(house)
}

const main = async () => {
  try {
    // await createFood()
    // await findFood()
    // await updateFood()
    // await deleteFood()
    // await findHouse()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()