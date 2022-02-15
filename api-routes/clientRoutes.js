const ClientService = require("../services/clientService");

class ClientRoutes extends ClientService {
  constructor(app) {
    super();
    this.app = app;
  }

  main() {
    this.app.post("/clients", (req, res) => super.create(req, res));
  }
}

module.exports = ClientRoutes;
