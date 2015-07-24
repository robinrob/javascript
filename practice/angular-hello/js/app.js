'use strict';

var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',
    'helloWorldControllers'
])

helloWorldApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        })
        .when('/show', {
            templateUrl: 'partials/show.html',
            controller: 'ShowCtrl'
        })
        .when('/customer', {
            templateUrl: 'partials/customer.html',
            controller: 'CustomerCtrl'
        })
        .when('/newCustomer', {
            templateUrl: 'partials/newCustomer.html',
            controller: 'NewCustomerCtrl'
        })
        .when('/addedCustomer/:customer/:city', {
            templateUrl: 'partials/addedCustomer.html',
            controller: 'AddedCustomerCtrl'
        })
    //$locationProvider.html5Mode(true)
    $locationProvider.html5Mode(false).hashPrefix("!")
}])
