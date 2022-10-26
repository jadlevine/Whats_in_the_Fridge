const { Schema } = require('mongoose')

const BasicFoodSchema = new Schema(
  {
    name: { type: String, required: true },
    house: { type: Schema.Types.ObjectId, ref: 'HouseModel' }
  },
  { timestamps: true }
)

module.exports = BasicFoodSchema
