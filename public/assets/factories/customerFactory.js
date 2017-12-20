// customerFactory

myApp.factory('customerFactory', ['$http', function($http){
    const factory = {};
    customers = [];
    customer = {};
    alerts = [];

    // get all customers
    factory.index = function(callback){
        $http.get('/customers')
        .then(function(response){
            // console.log('finding all customers', response.data);
            callback(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // create a new customer
    factory.create = function(customer, callback){
        alerts = [];

        $http.post('/customers/new', customer)
        .then(function(response){
            if (response.data.errors){
                var err = response.data.errors;
                for (var msg in err){
                    var alert = (err[msg].message);
                    alerts.push(alert);
                }
                callback({ alerts: alerts });
            }
            else if (response.data.code === 11000){
                alerts.push('Customer already exists in the database');
                callback({ alerts: alerts });
            }
            else{
                // console.log('new customer:', response.data);
                callback(response.data);
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    // delete existing customer
    factory.delete = function(id, callback){
        // console.log(id);
        $http.delete('/customers/' + id)
        .then(function(response){
            callback(response.data);
        })
    }



    return factory;
}]); // close factory
