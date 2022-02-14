const mongoose = require("mongoose");

const ClientModel = mongoose.model(
  "Client",
  new mongoose.Schema({
    name: String,
    isWaiting: Boolean,
    reviews: Array(mongoose.ObjectId),
    table: mongoose.ObjectId,
  })
);

module.exports = ClientModel;
