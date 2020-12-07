const { Schema, model } = require("mongoose");

//My currency schema
const currencySchema = new Schema({
  base: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  updated: {
    type: String,
  },
  rates: [
    {
      target: {
        type: Schema.Types.ObjectId,
        ref: "Currency",
      },
      rate: {
        type: Number,
      },
    },
  ],
});

module.exports = model("Currency", currencySchema);
