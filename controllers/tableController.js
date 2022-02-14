const tableModel = require("../models/tableModel");
class TableController {
  constructor() {}

  async create() {
    await tableModel.create({
      tableNum: 1,
      isOrdered: false,
      waiter: null,
      client: null,
    });
  }
  async findByNum(num) {
    let table = await tableModel.findOne({ tableNum: num });
    if (table) {
      return table._id;
    }
    return null;
  }
}

module.exports = TableController;
