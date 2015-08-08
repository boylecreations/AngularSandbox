'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.alertClick = function() {

    	alert("clicked!");

    };
    
  });
