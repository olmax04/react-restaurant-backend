const TableController = require("./tableController");
const waiterModel = require("../models/waiterModel");
const tableModel = require("../models/tableModel");
const clientModel = require("../models/clientModel");
class WaiterController {
  constructor() {
    this.tableController = new TableController();
  }

  async create() {
    let waiter = await waiterModel.create({
      name: "Alex",
      age: 19,
    });
    return waiter;
  }

  async callWaiter(clientId, num) {
    try {
      let table_id = await tableModel.findOne({ tableNum: num });
      let client = await clientModel.findByIdAndUpdate(clientId, {
        table: table_id._id,
        isWaiting: true,
      });
      let table = await tableModel.findOneAndUpdate(
        { tableNum: num },
        { client: client, isOrdered: true }
      );
      return [table, client];
    } catch (err) {
      console.log(err);
    }
  }
  async callWaiterDone(clientId, num) {
    try {
      let waiter = await waiterModel.findOne();
      let client = await clientModel.findByIdAndUpdate(clientId, {
        isWaiting: false,
      });
      let table = await tableModel.findOneAndUpdate(
        { tableNum: num },
        { waiter: waiter._id }
      );
      return [table, client, waiter];
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = WaiterController;
