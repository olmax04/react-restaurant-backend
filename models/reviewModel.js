const mongoose = require("mongoose");

const ReviewModel = mongoose.model(
  "Review",
  new mongoose.Schema({
    name: String,
    phone: String,
    content: String,
    tableNum: Number,
    clientId: mongoose.ObjectId,
  })
);

module.exports = ReviewModel;
