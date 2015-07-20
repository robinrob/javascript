'use strict';

var blogApp = angular.module('blogApp', [
    'ngRoute',
    'blogControllers',
    'blogServices',
    'blogBusinessServices',
    'blogDirectives'
])

blogApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'BlogCtrl'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            })
            .when('/logout', {
                templateUrl: 'partials/login.html',
                controller: 'LogoutCtrl'
            })
            .when('/blogPost/:id', {
                templateUrl: 'partials/blogPost.html',
                controller: 'BlogViewCtrl'
            })

        $locationProvider.html5Mode(false).hashPrefix('!');
}])