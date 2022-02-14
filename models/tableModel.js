const mongoose = require("mongoose");

const TableModel = mongoose.model(
  "Table",
  new mongoose.Schema({
    tableNum: Number,
    isOrdered: Boolean,
    waiter: mongoose.ObjectId,
    client: mongoose.ObjectId,
  })
);

module.exports = TableModel;
