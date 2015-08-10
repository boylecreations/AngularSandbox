'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('AboutCtrl', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
   	
   	$scope.name = nameService.name;
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());

    
  }]);
