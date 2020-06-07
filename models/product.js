const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), "data", "products.json");

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    })

}


module.exports = class Product {
    constructor(title) {
        this.title = title;
    };

    save() {
        //this refer to object created by the class
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });
    };

    //important static allows u to call directly from class not from object
    static fetchAll(cb) {
        getProductsFromFile(cb)
    };
}