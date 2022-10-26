const { Schema } = require('mongoose')
//above destructuring is same as doing
/////const mongoose = require('mongoose')
/////mongoose.Schema

const FoodSchema = new Schema(
  //two args {fields for doc},{timestamps:true} /// 54.12 on tuesday
  {
    name: { type: String, required: true },
    house: { type: Schema.Types.ObjectId, ref: 'houseId', required: true },

    //come back once you set a hosue up... does each storagelocation have a unique id?
    location: { type: String, required: true },
    opened: { type: Boolean, default: false, required: true },
    notes: { type: Array, required: false },
    dietary: { type: Array, required: false },
    expirationDate: { type: Date, required: false },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = FoodSchema
