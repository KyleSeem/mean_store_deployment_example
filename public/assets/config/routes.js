// declare front-end urls for angular partials, declare controller used at each url

myApp.config(function($routeProvider){
    $routeProvider
    .when('/dashboard', {
        templateUrl: '../partials/index.html',
        controller: 'DashController',
    })
    .when('/products', {
        templateUrl: '../partials/products.html',
        controller: 'ProductsController',
    })
    .when('/orders', {
        templateUrl: '../partials/orders.html',
        controller: 'OrdersController',
    })
    .when('/customers', {
        templateUrl: '../partials/customers.html',
        controller: 'CustomersController',
    })
    .when('/settings', {
        templateUrl: '../partials/settings.html',
        // controller: '',
    })
    .otherwise({
        redirectTo: '/dashboard',
    })
});
