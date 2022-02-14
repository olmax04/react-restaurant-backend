const WaiterService = require("../services/waiterService");

class WaiterRoutes extends WaiterService {
  constructor(app) {
    super();
    this.app = app;
  }
  create() {
    return this.app.post("/create-waiter", (req, res) => {
      super.create(req, res);
    });
  }
  callWaiter() {
    return this.app.post("/call-waiter", (req, res) => {
      super.callWaiter(req, res);
    });
  }
  callWaiterDone() {
    return this.app.post("/call-waiter/done", (req, res) => {
      super.callWaiterDone(req, res);
    });
  }
  // callWaiterDone() {
  //   return this.app.get("/call-waiter/done", function (req, res) {
  //     let table = req.query.table || "Стол не найден";
  //     res.send(`[Request params]: ${table}`);
  //   });
  // }
}

module.exports = WaiterRoutes;
