const { Schema } = require('mongoose')

const HouseSchema = new Schema(
  {
    owner: { type: String, required: true },
    fridge: [{ type: Schema.Types.ObjectId, ref: 'FoodModel' }],
    freezer: [{ type: Schema.Types.ObjectId, ref: 'FoodModel' }],
    pantry: [{ type: Schema.Types.ObjectId, ref: 'FoodModel' }],
    otherStorage: [{ type: Schema.Types.ObjectId, ref: 'FoodModel' }]
  },
  { timestamps: true }
)

module.exports = HouseSchema

//old
// const { Schema } = require('mongoose')

// const HouseSchema = new Schema(
//   //two args {fields for doc},{timestamps:true} /// 54.12 on tuesday
//   {
//     owner: { type: String, required: true },
//     storages: [
//       {
//         storageType: { type: String, required: true },
//         storageLocation: { type: String, required: true },
//         // foods: [{ type: Schema.Types.ObjectId, ref: 'foodId' }]
//         // foods: [{ type: Schema.Types.ObjectId, ref: 'foodid' }]
//         foods: [{ type: Schema.Types.ObjectId, ref: 'FoodModel' }]
//       }
//     ] //end of storage array
//   }, //end of House fields
//   { timestamps: true }
// )

// module.exports = HouseSchema
