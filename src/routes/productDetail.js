const express = require('express');
const route = express.Router();

const productDetailController = require('../app/controllers/ProductDetailController');

// productDetailController.index
route.use('/', productDetailController.index);

module.exports = route;