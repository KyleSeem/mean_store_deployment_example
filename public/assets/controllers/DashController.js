
myApp.controller('DashController', ['$scope', 'customerFactory', 'productFactory', 'orderFactory', function($scope, customerFactory, productFactory, orderFactory){
    $scope.customers = [];
    $scope.products = [];
    $scope.orders = [];
    $scope.searchAll = [];
    var today = Date.parse(Date());


    // function to get # of days between two dates
    $scope.convert = function(date1, date2){
        var one_day = 1000*60*60*24;

        var diff = Math.round((date2-date1)/one_day);
        if (diff === null){
            return('error');
        } else if (diff < 1){
            return ('today');
        } else if (diff == 1){
            return (diff + ' day ago');
        } else{
            return (diff + ' days ago');
        }
    };

    // callback so all models can use
    $scope.getDates = function(data){
        var _date;
        for (var i = 0; i < data.length; i++){
            _date = Date.parse(data[i].created_at);
            data[i].daysAgo = $scope.convert(_date, today);
        }
    };


    // collect all customers 'join date' info
    customerFactory.index(function(customers){
        $scope.getDates(customers);
        $scope.customers = customers;
    });

    productFactory.index(function(products){
        $scope.products = products;
    });

    orderFactory.index(function(orders){
        $scope.getDates(orders);
        $scope.orders = orders;
    });

}]);




// for(var i = 0; i < orders.length; i++){
//     var orderDate = Date.parse(orders[i].created_at);
//
//     var diff = Math.round((today - orderDate)/one_day);
//     if (diff < 1){
//         daysAgo = 'today';
//     }
//     else{
//         if (diff == 1){
//             daysAgo = diff + ' day ago';
//         }
//         else{
//         daysAgo = diff + ' days ago';
//         }
//     }
//     orders[i].daysAgo = daysAgo;
// }
