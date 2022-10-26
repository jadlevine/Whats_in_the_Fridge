const db = require('../db')
const { HouseModel, FoodModel } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const joshsHouse = await HouseModel.find({ owner: 'josh' })
  // const michaelsHouse = await House.find({owner:'michael'})
  console.log(joshsHouse[0].storages[0]._id)
}
//   const foods = [
//     {
//       name: 'cucumbers',
//       storageLocation_id: joshsHouse[0].storages[0]._id
//     },
//     {
//       name: 'ketchup',
//       storageLocation_id: joshsHouse[0].storages[0]._id
//     }
//   ]
//   await Food.insertMany(foods)
//   console.log('created foods from seed')
// }

// const run = async () => {
//   await main()
//   db.close()
// }

// run()
