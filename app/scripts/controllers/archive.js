'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:ArchiveCtrl
 * @description
 * # ArchiveCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('ArchiveCtrl', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
   	
   	$scope.name = nameService.name;
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());

    
  }]);
