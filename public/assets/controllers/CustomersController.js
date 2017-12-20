// CustomersController

myApp.controller('CustomersController', ['$scope', 'customerFactory', '$location', '$routeParams', function($scope, customerFactory, $location, $routeParams){
    $scope.customers = [];
    $scope.customer = {};
    $scope.alerts = [];


    // gather all customers in database - immediately called
    $scope.getCustomers = function(){
        customerFactory.index(function(customers){
            $scope.customers = customers;
            // console.log($scope.customers);
        });
    }
    $scope.getCustomers();

    // create new customer
    $scope.create = function(){
        $scope.alerts = [];
        // console.log('create form data', $scope.customer);
        customerFactory.create($scope.customer, function(response){
            if (response.alerts){
                $scope.alerts = alerts;
            }
            else{
                $scope.customer = response;
                $scope.getCustomers();
            }
            $scope.customer = {};
        });
    }

    // delete specified user
    $scope.delete = function($routeParams){
        // console.log('deleting user:', $routeParams);
        customerFactory.delete($routeParams, function(){
            $scope.getCustomers();
        });
    }







}]); // close controller
