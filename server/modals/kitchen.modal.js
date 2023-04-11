const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KitchenSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Kitchen = mongoose.model("Kitchen",KitchenSchema)
module.exports = Kitchen
