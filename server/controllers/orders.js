// back-end controller specific to orders model
// console.log('Connection to back-end ORDERS controller successful');

const mongoose = require('mongoose');
const Orders = mongoose.model('Orders');
const Customers = mongoose.model('Customers');
const Products = mongoose.model('Products');

module.exports = {

    // find all Orders
    index: (request, response) =>{
        Orders.find({})
        .then(function(orders){
            response.json(orders);
        })
        .catch(function(error){
            console.log(error);
        })
    },

    create: (request, response) =>{
        var prodID = request.body._product;
        console.log('$$$$$$$$$prodID', prodID);
        let order = new Orders(request.body);

        // save the new order
        order.save(function(error){
            if (error){
                response.send(error);
            }
            else{
                // find the product document and update the available quantity
                Products.findById(prodID, function(error, product){
                    if (error){ response.send(error); }
                    else{
                        // update the inventory, then save and return order
                        product.qty -= order.qty;
                        product.save(function(error){
                            if (error){ response.send(error); }
                            else{
                                response.send(order);
                            }
                        })
                    }
                })
            }
        })
    },

    // this is the method I created when I was pushing the order id to customer and product documents -- decided not to do for final project, but left as reference for myself
    // create: (request, response) =>{
    //     var cust = request.body.customer;
    //     var prod = request.body.product;
    //
    //     let order = new Orders({ customer: cust.name, product: prod.name, qty: request.body.qty, _customer: cust._id, _product: prod._id });
    //
    //     order.save(function(error){
    //         if (error){
    //             console.log(error);
    //         }
    //         else{
    //             Customers.findById(cust._id, function(error, customer){
    //                 if (error){ console.log(error); }
    //                 else{
    //                     customer.save(function(error){
    //                         customer._orders.push(order._id);
    //                     });
    //
    //                     Products.findById(prod._id, function(error, product){
    //                         if (error){ console.log(error); }
    //                         else{
    //                             product.save(function(error){
    //                                 product._orders.push(order._id);
    //                                 product.qty -= order.qty;
    //                                 response.send(order);
    //                             })
    //                         }
    //                     })
    //                 }
    //             })
    //         }
    //     })
    // },
    //

    // this is just to delete, not to cancel order - inventory is not returned
    delete: (request, response) =>{
        Orders.findByIdAndRemove(request.params.id)
        .then(function(orders){
            response.json(orders);
        })
        .catch(function(error){
            response.send(error);
        })
    },

}; // close export
