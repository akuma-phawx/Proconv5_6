const { Schema, model } = require("mongoose");

//My currencly model
const rateSchema = new Schema({
  startingCurrency: {
    type: Schema.Types.ObjectId,
    ref: "Currency",
  },
  targetCurrency: {
    type: Schema.Types.ObjectId,
    ref: "Currency",
  },
  rate: {
    type: Number,
    required: true,
  },
});

module.exports = model("Rate", rateSchema);
