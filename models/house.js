const { Schema } = require('mongoose')

const House = new Schema(
  //two args {fields for doc},{timestamps:true}
  //arg1=fields for document{},arg2=
  {
    owner: { type: String, required: true },
    storages: [
      {
        // storageType: { type: String, required: true, default: 'fridge' },
        storageType: { type: String, required: true },
        location: { type: String, required: true },
        // foods: [{ type: Schema.Types.ObjectId, ref: 'food_id' }]
        foods: { type: Array, required: true }
      }
    ] //end of storage array
  }, //end of House fields
  { timestamps: true }
)

module.exports = House
