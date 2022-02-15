// Imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

try {
	// Importing Services
	const MongooseService = require('./services/mongooseService');

	const WaiterRoutes = require('./api-routes/waiterRoutes');
	const ReviewRoutes = require('./api-routes/reviewRoutes');
	const ClientRoutes = require('./api-routes/clientRoutes');

	// Config
	const port = process.env.PORT || 3000;
	const DB_CONN = process.env.DB_CONN || null;

	// Express Requests
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.options('*', cors());
	const mongooseService = new MongooseService(mongoose, DB_CONN);
	const waiterRoutes = new WaiterRoutes(app);
	const reviewRoutes = new ReviewRoutes(app);
	const clientRoutes = new ClientRoutes(app);

	//Mongoose
	mongooseService.main();

	clientRoutes.main();
	waiterRoutes.create();
	waiterRoutes.callWaiter();
	waiterRoutes.callWaiterDone();
	reviewRoutes.reviewNegative();

	app.listen(port);
	console.log(`App started at ${port}`);
} catch (e) {
	console.log(e);
}
