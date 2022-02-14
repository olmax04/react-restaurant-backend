const ClientController = require("../controllers/clientController");

class ClientService {
  constructor() {
    this.clientController = new ClientController();
  }

  async create(req, res) {
    let num = req.query.table;
    let client = await this.clientController.create(num);
    return res.json(client);
  }
}

module.exports = ClientService;
