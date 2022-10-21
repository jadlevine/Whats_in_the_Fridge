const { Schema } = require('mongoose') ///destructuring allows us to "pluck out the thing we want from the mongoose object"
//same as doing
//const mongoose = require('mongoose')
//mongoose.Schema
////might see either or both

//Schemas are a lot like classes
//Food is being generated from the Schema class that we have access to from mongoose
const Food = new Schema()
//two arguments passed in here
///1. all the fields we want for our record/document
///2. timestamps, true/false
//54.12 on tuesday
