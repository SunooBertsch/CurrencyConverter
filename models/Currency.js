const mongoose = require("mongoose");
const { Schema } = mongoose;

const currencySchema = new Schema({
  country: String,
  valueToUsd: Number
});

mongoose.model("currencies", currencySchema);
