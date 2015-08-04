'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:RequestCtrl
 * @description
 * # MainCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('RequestCtrl', ['$scope', '$filter', function ($scope, $filter) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.handle = '';
    $scope.lowercasehandle = function() {
    	return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function(newValue, oldValue) {

        console.info('Changed');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);

    });

    // Don't code outside the Angular Context
    setTimeout(function() {
        //Applys function to the digest loop
        $scope.$apply(function() {
        $scope.handle = 'newtwitterhandle';
        console.log('Scope Changed!');
        })
    }, 3000);

    
  }]);
