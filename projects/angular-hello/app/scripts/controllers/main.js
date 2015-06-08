'use strict';

/**
 * @ngdoc function
 * @name angularHelloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHelloApp
 */
angular.module('angularHelloApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
