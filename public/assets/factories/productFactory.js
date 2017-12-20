// products factory

myApp.factory('productFactory', ['$http', function($http){
    const factory = {};
    alerts = [];

    // get all products
    factory.index = function(callback){
        $http.get('/products')
        .then(function(response){
            // console.log('finding all products', response.data);
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // create a new product
    factory.create = function(product, callback){
        alerts = [];

        // console.log('received package:', product);
        $http.post('/products/new', product)
        .then(function(response){
            console.log(response);
            if (response.data.errors){
                var err = response.data.errors;
                for (var msg in err){
                    var alert = (err[msg].message);
                    alerts.push(alert);
                }
                callback({ alerts: alerts });
            }
            else{
                // console.log('new product created', response.data);
                callback(response.data);
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    factory.find = function(id, callback){
        $http.get('/products/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // delete product from database
    factory.delete = function(id, callback){
        // console.log('delete this product:', id);
        $http.delete('/products/' + id)
        .then(function(response){
            callback(response.data);
        })
    }

    return factory;
}]); // close productFactory
