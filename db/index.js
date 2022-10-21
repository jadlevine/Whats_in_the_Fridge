const mongoose = require('mongoose') //setting up a mongoose database

mongoose
  .connect('mongodb://127.0.0.1:27017/booksDatabase') //connecting to a db that we don't have yet... that will create it for us
  //need to drop a db? in mongosh, within that db: booksDatabase> db.dropDatabase()=> {ok: 1, dropped: 'bookDatabase'}
  .then(() => {
    ///.then just creates a hierarchy to the order of when these lines fire
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true) //super useful for debugging our queries, it will show the raw query mongo executes right in the terminal
//you might get to a point where you want to turn this off ('debug', false), but for now it's good to know/use
//verbose output of the commands that are being run
const db = mongoose.connection

module.exports = db
