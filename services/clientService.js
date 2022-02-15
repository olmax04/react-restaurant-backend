const ClientController = require('../controllers/clientController');

class ClientService {
	constructor() {
		this.clientController = new ClientController();
	}

	async create(req, res) {
		let num = req.body.tableNum;
		let client = await this.clientController.create(num);
		return res.json({ id: client._id });
	}
}

module.exports = ClientService;
