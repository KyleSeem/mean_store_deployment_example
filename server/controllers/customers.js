// back-end controller specific to Customers model
// console.log('Connection to back-end CUSTOMERS controller successful');

const mongoose = require('mongoose');
const Customers = mongoose.model('Customers');
const Products = mongoose.model('Products');
const Orders = mongoose.model('Orders');

module.exports = {

    // find all Customers
    index: (request, response) =>{
        Customers.find({})
        .then(function(customers){
            response.json(customers);
        })
        .catch(function(error){
            console.log(error);
        })
    },

    // create a new customer
    create: (request, response) =>{
        Customers.create(request.body)
        .then(function(customer){
            response.json(customer);
        })
        .catch(function(error){
            response.send(error);
        })
    },

    // delete a specific customer
    delete: (request, response) =>{
        console.log('server delete:', request.params.id);
        Customers.findByIdAndRemove(request.params.id)
        .then(function(customers){
            response.json(customers);
        })
        .catch(function(error){
            console.log(error);
        })
    }










}; // close export
