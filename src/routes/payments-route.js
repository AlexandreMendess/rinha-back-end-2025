const express = require('express');
const routes = express.Router();

const { paymentsController } = require('../controllers/paymentsController');

routes.post('/payments', paymentsController);

module.exports = routes;