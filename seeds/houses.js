const db = require('../db')
const { House } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const houses = [
    {
      owner: 'josh',
      storages: [
        {
          storageType: 'fridge',
          location: 'kitchen',
          foods: ['pickles', 'lettuce']
        },
        {
          storageType: 'freezer',
          location: 'kitchen',
          foods: ['popsickles', 'ice']
        },
        {
          storageType: 'pantry',
          location: 'kitchen',
          foods: ['syrup', 'oatmeal']
        }
      ] //end of josh's storages array
    }, //end of josh's house
    {
      owner: 'michael',
      storages: [
        {
          storageType: 'fridge',
          location: 'kitchen',
          foods: ['turkey', 'ham']
        },
        {
          storageType: 'freezer',
          location: 'kitchen',
          foods: ['peas', 'corn']
        },
        {
          storageType: 'pantry',
          location: 'kitchen',
          foods: ['flour', 'tortillas']
        }
      ] //end of michael's storages array
    } //end of michael's house
  ] //end of houses seed array
  await House.insertMany(houses)
  console.log('houses created from seed')
}
const run = async () => {
  await main()
  db.close()
}
run()
