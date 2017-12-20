// orderFactory

myApp.factory('orderFactory', ['$http', function($http){
    const factory = {};
    customers = [];
    customer = {};
    products = [];
    product = {};
    alerts = [];

    // get all existing orders
    factory.index = function(callback){
        $http.get('/orders')
        .then(function(response){
            // console.log('finding all existing orders', response.data);
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // create new order (this is a new association)
    factory.create = function(order, callback){
        alerts = [];

        $http.post('/orders/new', order)
        .then(function(response){
            if (response.data.errors){
                var err = response.data.errors;
                for (var msg in err){
                    var alert = (err[msg].message);
                    alerts.push(alert);
                }
                callback({ alerts: alerts });
            }
            else{
                // console.log('new order created:', response.data);
                callback(response.data);
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }


    // delete order from database - does not return inventory from order
    factory.delete = function(id, callback){
        $http.delete('/orders/' + id)
        .then(function(response){
            callback(response.data);
        })
    }

    return factory;
}]); // close orderFactory
