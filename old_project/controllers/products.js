const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
};

exports.postAddProduct =(req,res,next)=>{
    console.log(req.body.title);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts =(req, res, next)=>{
    //path join will build path for both linux and windows
    //__dirname is direct path to the source folder
    Product.fetchAll((products)=>{
        res.render('shop',{
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        })
    });

};