const mongoose = require("mongoose");

const WaiterModel = mongoose.model(
  "Waiter",
  new mongoose.Schema({
    name: String,
    age: Number,
  })
);

module.exports = WaiterModel;
