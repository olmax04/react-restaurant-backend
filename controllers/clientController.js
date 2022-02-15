const TableController = require('./tableController');
const clientModel = require('../models/clientModel');
class ClientController {
	constructor() {
		this.tableController = new TableController();
	}

	async create(num) {
		try {
			let table = await this.tableController.findByNum(num);
			let client = await clientModel.create({
				isWaiting: false,
				reviews: null,
				table: table,
			});
			return client;
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = ClientController;
