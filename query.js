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

//CRUD - Read a house
const findHouse = async () => {
  const house = await House.findOne({ owner: 'josh' })
  console.log(house)
}

//CRUD - Create a House
const createHouse = async () => {
  const house = await House.create({
    owner: 'josh',
    storages: [
      {
        storageType: 'fridge',
        location: 'kitchen',
        foods: []
      },
      {
        storageType: 'freezer',
        location: 'kitchen',
        foods: []
      },
      {
        storageType: 'pantry',
        location: 'kitchen',
        foods: []
      }
    ]
  })
}

//CRUD - update a house (add a storage(utility fridge)
const updateHouse = async () => {
  const house = await House.updateOne(
    { owner: 'josh' },
    {
      $push: {
        storages: {
          storageType: 'fridge',
          location: 'utility room',
          foods: []
        }
      }
    }
  )
}

//CRUD - delete a house
const deleteHouse = async () => {
  let deleted = await House.deleteOne({ owner: 'josh' })
  console.log(deleted)
}

const main = async () => {
  try {
    await createHouse()
    await createFood()
    // await findHouse()
    // await findFood()
    // await updateHouse()
    // await updateFood()
    // await deleteHouse()
    // await deleteFood()

    ////////////YOU ARE HERE//////////////////////
    //next step is to make this dynamic, rather than hardcoded
    ///or maybe, just move on to express and the rest of the backend
    //////////////////////////////////////////////
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()
