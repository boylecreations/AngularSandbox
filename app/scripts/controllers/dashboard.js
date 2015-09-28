'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('DashboardCtrl', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {
   	
   	var combinedStrings;
	$scope.combineStrings = function(widgetTitle1, widgetTitle2) {
		return combinedStrings
	} 
    
  }]);
