const WaiterController = require("../controllers/waiterController");

class WaiterService {
  constructor() {
    this.waiterController = new WaiterController();
  }

  async create(req, res) {
    let result = await this.waiterController.create();
    return res.json(result);
  }

  async callWaiter(req, res) {
    let result = await this.waiterController.callWaiter(
      req.query.clientId,
      req.query.table
    );
    return res.json(result);
  }

  async callWaiterDone(req, res) {
    let result = await this.waiterController.callWaiterDone(
      req.query.clientId,
      req.query.table
    );
    return res.json(result);
  }
}

module.exports = WaiterService;
