const path = require('path');
const express = require('express');
const router =express.Router();
const rootDir= require('../util/path');
const productsController = require('../controllers/products');

router.get('/add-product',productsController.getAddProduct);

//we can filter middleware by get and post
router.post('/add-product', productsController.postAddProduct);


module.exports = router;