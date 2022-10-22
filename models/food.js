const { Schema } = require('mongoose') ///destructuring allows us to "pluck out the thing we want from the mongoose object"
//same as doing
//const mongoose = require('mongoose')
//mongoose.Schema
////might see either or both

//Schemas are a lot like classes
//Food is being generated from the Schema class that we have access to from mongoose
const Food = new Schema(
  //two arguments passed in here - 54.12 on tuesday
  ///1. all the fields we want for our record/document
  {
    name: { type: String, required: true },
    owner: { type: String, required: true },
    location: { type: String, required: true }

    // house_id: { type: Schema.Types.ObjectId, ref: 'house_id', required: true },
    // storageLocation: { type: String, required: true }
    // expirationDate: { type: Date, required: true },
    // storageLocation_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'storageLocation_id'
    // }
    // addedDate: { type: Date, default: Date.now, required: true },
    // storageLocation: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'house_id',
    //   required: true
    // } //this reference might need work!
  },
  ///2. timestamps, true/false
  { timestamps: true }
)

module.exports = Food
