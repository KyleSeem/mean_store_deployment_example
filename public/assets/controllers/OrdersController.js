// OrdersController

myApp.controller('OrdersController', ['$scope', 'orderFactory', 'customerFactory', 'productFactory', '$location', '$routeParams', '$filter', function($scope, orderFactory, customerFactory, productFactory, $location, $routeParams, $filter){
    $scope.customers = [];
    $scope.products = [];
    $scope.product = {};
    $scope.orders = [];
    $scope.newOrder = {};
    $scope.alerts = [];
    $scope.availQty = [];



    // gather all customers and products from database so order form is functional
    customerFactory.index(function(customers){
        $scope.customers = customers;
    });

    productFactory.index(function(products){
        $scope.products = products;
    });


    // get all orders
    $scope.getOrders = function(){
        orderFactory.index(function(orders){
            $scope.orders = orders;
        });
    }
    $scope.getOrders();

    // create new order
    $scope.create = function(){
        $scope.alerts = [];

        if (!$scope.newOrder.customer | !$scope.newOrder.product){
            $scope.alerts.push('All fields required for new order');
        }
        else{
            var n = this.newOrder;

            // condense object for creation (I do this so I can include the ids from the selected customer and product as their own key/value pair - this also lets the form maintain its selections in case of errors without using sessions)
            newOrder = { customer: n.customer.name, product: n.product.name, qty: n.qty, _customer: n.customer._id, _product: n.product._id };

            orderFactory.create(newOrder, function(response){ // again, no $scope so form maintains selections
                if (response.alerts){
                    $scope.alerts = alerts;
                }
                else{
                    $scope.availQty = [];
                    $scope.newOrder = {};
                    $scope.getOrders();
                }
            })
        }
    }

    // creates array for quantity select dropdown - shows amt based on what is available in database
    $scope.getQty = function(data){
        if (data.product){
            productFactory.find(data.product._id, function(qty){
                var arr = [];
                if (typeof(qty) === 'number'){
                    for (var i = 1; i <= qty; i++){
                        arr.push(i);
                    }
                    $scope.availQty = arr;
                }
            });
        }
    }

    // delete specified order - does not return inventory
    $scope.delete = function($routeParams){
        // console.log($routeParams);
        orderFactory.delete($routeParams, function(){
            $scope.getOrders();
        });
    }

}]); // close OrdersController
