// back-end urls -- receives request from public factory and routes to server-side controller for selected method

// console.log('Connection to back-end routes successful');
const path = require('path');
// identify location of back-end controller methods
const customers = require('../controllers/customers.js');
const products = require('../controllers/products.js');
const orders = require('../controllers/orders.js');

module.exports = function(app){
    app.get('/customers', customers.index);
    app.post('/customers/new', customers.create);
    app.delete('/customers/:id', customers.delete);

    app.get('/products', products.index);
    app.get('/products/:id', products.find);
    app.post('/products/new', products.create);
    app.delete('/products/:id', products.delete);

    app.get('/orders', orders.index);
    app.post('/orders/new', orders.create);
    app.delete('/orders/:id', orders.delete);

    app.all("*", (request, response, next) =>{
        response.sendFile(path.resolve("./public/index.html"))
    })
}; // close export
