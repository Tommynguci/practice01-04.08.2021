const express = require('express');
const route = express.Router();

const registerController = require('../app/controllers/RegisterController');

// registerController.index
route.use('/', registerController.index);

module.exports = route;