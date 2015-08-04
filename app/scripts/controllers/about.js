'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
