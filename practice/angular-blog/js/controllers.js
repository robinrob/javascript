'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', [])

helloWorldControllers.controller('MainCtrl', ['$scope', function MainCtrl($scope) {
    $scope.message = "Hello World"
}])

helloWorldControllers.controller('ShowCtrl', ['$scope', function MainCtrl($scope) {
    $scope.message = "Show The World"
}])
