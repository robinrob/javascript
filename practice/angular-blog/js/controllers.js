'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', [])

helloWorldControllers.controller('MainCtrl', ['$scope', function MainCtrl($scope) {
    $scope.message = "Hello World"
}])

helloWorldControllers.controller('ShowCtrl', ['$scope', function MainCtrl($scope) {
    $scope.message = "Show The World"
}])

helloWorldControllers.controller('CustomerCtrl', ['$scope', function CustomerCtrl($scope) {
    $scope.customerName = "Robin Smith Software"
    $scope.customerNumber = "12345"

    $scope.changeCustomer = function() {
        $scope.customerName = $scope.cName
        $scope.customerNumber = $scope.cNumber
    }
}])

helloWorldControllers.controller('NewCustomerCtrl', ['$scope', '$location', function NewCustomerCtrl($scope, $location) {
    $scope.submit = function() {
        $location.path('/addedCustomer/' + $scope.name + '/' + $scope.city)
    }
}])

helloWorldControllers.controller('AddedCustomerCtrl', ['$scope', '$routeParams', function AddedCustomerCtrl($scope, $routeParams) {
    $scope.customerName = $routeParams.customer
    $scope.customerCity = $routeParams.city
}])


var addonsControllers = angular.module('addonsControllers', [])

addonsControllers.controller('AddonsCtrl', ['$scope', 'checkCreds', '$location', 'AddonsList', '$http', 'getToken', function AddonsCtrl($scope, checkCreds, $location, AddonsList, $http, getToken) {
    if (checkCreds() !== true) {
        $location.path('/loginForm')
    }

    $http.defaults.headers.common['Authorization'] = 'Basic ' + getToken()

    AddonsList.getList({},
        function success(response) {
            console.log("Success: " + JSON.stringify(response))
            $scope.addonsList = response
        },

        function error(response) {
            console.log("Error" + JSON.stringify(response))
            $scope.addonsList = response
        }
    )

    $scope.addonsActiveClass = "active"
}])