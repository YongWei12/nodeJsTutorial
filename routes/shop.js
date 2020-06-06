const path = require('path');
const rootDir = require('../util/path')

const express = require('express');
const router = express.Router();

const adminData = require('./admin');


router.get('/',(req, res, next)=>{
    //path join will build path for both linux and windows
    //__dirname is direct path to the source folder
    const products = adminData.products;
    res.render('shop',{
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
});


module.exports = router;