// back-end controller specific to Products model
// console.log('Connection to back-end PRODUCTS controller successful');

const mongoose = require('mongoose');
const Products = mongoose.model('Products');
const Customers = mongoose.model('Customers');
const Orders = mongoose.model('Orders');

module.exports = {

    // find all Products
    index: (request, response) =>{
        Products.find({})
        .then(function(products){
            response.json(products);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    create: (request, response) =>{
        Products.create(request.body)
        .then(function(product){
            response.json(product);
        })
        .catch(function(error){
            response.send(error);
        })
    },


    find: (request, response) =>{
        Products.findById(request.params.id)
        .then(function(product){
            response.json(product.qty);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    delete: (request, response) =>{
        Products.findByIdAndRemove(request.params.id)
        .then(function(products){
            response.json(products);
        })
        .catch(function(error){
            response.send(error);
        })
    },







}; // close export
