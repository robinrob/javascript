'use strict';

/**
 * @ngdoc function
 * @name angularHelloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularHelloApp
 */
angular.module('angularHelloApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
