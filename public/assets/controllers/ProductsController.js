// ProductsController

myApp.controller('ProductsController', ['$scope', 'productFactory', '$location', '$routeParams', function($scope, productFactory, $location, $routeParams){
    $scope.products = [];
    $scope.product = {};
    $scope.prods = [];
    $scope.alerts = [];


    // gather all products
    $scope.getProducts = function(){
        productFactory.index(function(products){
            $scope.products = products;
        });
    }
    $scope.getProducts();


    // create new product
    $scope.create = function(){
        $scope.alerts = [];
        productFactory.create($scope.product, function(response){
            console.log(response);
            if (response.alerts){
                $scope.alerts = alerts;
            }
            else{
                $scope.product = response;
                $scope.getProducts();
                $scope.product = {};
            }
        });
    }


    // delete all isntances of product from database
    $scope.delete = function($routeParams){
        // console.log($routeParams);
        productFactory.delete($routeParams, function(){
            $scope.getProducts();
        });
    }


}]); // close ProductsController
