//setting up backend, see michaels video walkthrough for react forms
//https://generalassembly.zoom.us/rec/play/M5vKYIj7Q1duEq0TeSF6hSThqk_SMOu0capa4TqqxTZxFEArE6tLHW5nOMUPH4E1-tcRG1miyJnUZsYm.1GdsTB_HgHW33sEP?continueMode=true&_x_zm_rtaid=fRTYCOakQ0OIZjGhz1--wg.1666296522580.90a658740f7ff9f16b5fd7efb18cef6d&_x_zm_rhtaid=320
//1:50:50

//Express Boilerplate
const express = require('express')
//require middleware here
//3rd party middleware
const cors = require('cors')
const logger = require('morgan')

//require controllers
//update this once you implement index.js in controllers folder
const foodController = require('./controllers/FoodController')

//require the db - VIP. happens here, (not necessary in controller?)
const db = require('./db')

const PORT = process.env.PORT || 3001
const app = express()

//use middleware here
//see link below for explanation of what cors, logger, json,urlencoded is doing below
//https://github.com/SEI-R-9-19/u2_lesson_express_middleware#:~:text=by%20invoking%20the%20.use()%20method%2C%20we%20are%20telling%20our%20express%20app%20to%20use%20these%20packages.
app.use(cors())
app.use(logger('dev'))
//this middleware comes out of the box with express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  res.json({ msg: 'I am root' })
})
app.get('/foods', foodController.getFood)
app.post('/foods/:owner/:location/:name', foodController.createFood)
app.delete('/foods/:owner/:location/:name', foodController.deleteFood)
app.put('/foods/:owner/:location/:name', foodController.updateFoodLocation)
// //you can build your own middleware by building custom routes
// app.get(
//   '/middleware',
//   (request, response, next) => {
//     console.log('this is middleware')
//     next()
//   },
//   (req, res) => {
//     res.send('response completed')
//   }
// )

// //Our function to handle the request is provided 4 arguments from Express, request, response, error and next. For the time being we will only be using request and response parameters.

// app.get('/', (req, res) => {
//   res.send('Server running from root/server.js')
// })
// //express has built in tools that handle data sent back a string and converts it to correct format.

// //correct format is to send data back as object (common practice when building RESTful API's)

// app.get('/:wtf', (req, res) => {
//   res.send({ msg: `message with name of ${req.params.wtf}` })
// })
// app.post('/towns', (req, res) => {
//   console.log('Welcome to Atlanta...j/k Columbus')
//   res.send({ hometown: 'Columbus, OH' })
// })

// app.put('/profile/update/:username', (req, res) => {
//   console.log('uhhh')
//   res.send({ msg: `User profile with the username of ${req.params.username}` })
// })

// app.delete('/tacos', (req, res) => {
//   res.send({
//     msg: `I deleted the ${req.query.type} taco with an id of ${req.query.tacoID}!`
//   })
// })

//should stay at bottom
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
