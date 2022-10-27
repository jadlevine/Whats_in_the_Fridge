const { Schema } = require('mongoose')

const BasicHouseSchema = new Schema(
  {
    owner: { type: String, required: true },
    foods: [{ type: Schema.Types.ObjectId, ref: 'BasicFoodModel' }]
  },
  { timestamps: true }
)

module.exports = BasicHouseSchema
