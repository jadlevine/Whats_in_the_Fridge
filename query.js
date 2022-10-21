const db = require('./db')
const { Food, House } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const findFood = async () => {
  const food = await Food.findOne({ name: 'mustard' })
  console.log(food)
}

const findHouse = async () => {
  const house = await House.findOne()
  console.log(house)
}

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

  //save the variables
  let foodId = food._id
  let houseId = house.id
  let storageLocation = food.storageLocation

  console.log(food)
  console.log(house)

  //update the house
  const updated = await House.updateOne(
    { owner: 'josh' },
    { $push: { 'storages.0.foods': food._id } }
  )
  console.log(updated)
}

// const updateHouse = async (foodId, storageId) => {
//   let house = await House.findOne({ id: storageId })
//   // console.log(house.storages[0].foods)
//   console.log(foodId)
//   const updated = await House.updateOne(
//     { owner: 'josh' },
//     { $push: { 'storages.0.foods': { testFoodId: foodId } } }
//   )
//   console.log(updated)
// }

//this worked in mongosh
// foodDatabase> db.houses.updateOne({owner:'josh'},{$push: {"storages.0.foods":{"testKey":1234234}}})
////==>
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }

// {owner:'josh'},
//

const main = async () => {
  try {
    // await findFood()
    // await findHouse()
    await createFood()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}

main()
