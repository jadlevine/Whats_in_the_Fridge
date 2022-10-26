from server.js

//setting up backend, see michaels video walkthrough for react forms
//https://generalassembly.zoom.us/rec/play/M5vKYIj7Q1duEq0TeSF6hSThqk_SMOu0capa4TqqxTZxFEArE6tLHW5nOMUPH4E1-tcRG1miyJnUZsYm.1GdsTB_HgHW33sEP?continueMode=true&_x_zm_rtaid=fRTYCOakQ0OIZjGhz1--wg.1666296522580.90a658740f7ff9f16b5fd7efb18cef6d&_x_zm_rhtaid=320
//1:50:50

//see link below for explanation of what cors, logger, json,urlencoded is doing below
//https://github.com/SEI-R-9-19/u2_lesson_express_middleware#:~:text=by%20invoking%20the%20.use()%20method%2C%20we%20are%20telling%20our%20express%20app%20to%20use%20these%20packages.

// //you can build your own middleware by building custom routes
// app.get(
// '/middleware',
// (request, response, next) => {
// console.log('this is middleware')
// next()
// },
// (req, res) => {
// res.send('response completed')
// }
// )

// //Our function to handle the request is provided 4 arguments from Express, request, response, error and next. For the time being we will only be using request and response parameters.

// app.get('/', (req, res) => {
// res.send('Server running from root/server.js')
// })
// //express has built in tools that handle data sent back a string and converts it to correct format.

// //correct format is to send data back as object (common practice when building RESTful API's)

// app.get('/:wtf', (req, res) => {
// res.send({ msg: `message with name of ${req.params.wtf}` })
// })
// app.post('/towns', (req, res) => {
// console.log('Welcome to Atlanta...j/k Columbus')
// res.send({ hometown: 'Columbus, OH' })
// })

// app.put('/profile/update/:username', (req, res) => {
// console.log('uhhh')
// res.send({ msg: `User profile with the username of ${req.params.username}` })
// })

// app.delete('/tacos', (req, res) => {
// res.send({
// msg: `I deleted the ${req.query.type} taco with an id of ${req.query.tacoID}!`
// })
// })

from controllers
//what are controllers?
//https://github.com/SEI-R-9-19/u2_lesson_express_controllers#:~:text=controllers%20are%20methods%20that%20we%20create%20to%20handle%20how%20our%20server%20behaves%20during%20a%20request

at bottom of HouseControllers.js
//you are here in controllers lesson
//https://github.com/SEI-R-9-19/u2_lesson_express_controllers#:~:text=You've%20just%20successfully,first%20controller%20function!
