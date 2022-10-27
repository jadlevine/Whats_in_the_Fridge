const { Router } = require('express')
const router = Router()

//require controllers
//update this once you implement index.js in controllers folder // const controllers = require('../controllers')
const foodController = require('../controllers/FoodController')
const houseController = require('../controllers/HouseController')

//root
router.get('/', (req, res) => res.send('I am Root'))

//food CRUD
router.get('/foods', foodController.getAllFoods)
router.get('/foods/:id', foodController.getFood)
router.post('/foods', foodController.createFood)
router.delete('/foods/:id', foodController.deleteFood)
router.put('/foods/:id', foodController.updateFood)

//house CRUD
router.get('/houses', houseController.getAllHouses)
router.get('/houses/:houseid', houseController.getHouse)
router.post('/houses', houseController.createHouse)
router.delete('/houses/:id', houseController.deleteHouse)
router.put('/houses/:id', houseController.updateHouse)

module.exports = router
