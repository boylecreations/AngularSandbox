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
    
   	$scope.people = [
   		{
   			name: "John",
   			address: "69 butt street",
   			city: "New York",
   			state: "NY",
   			zip: "1111"
   		},
   		{
   			name: "Jane",
   			address: "69 butt street",
   			city: "New York",
   			state: "NY",
   			zip: "1111"
   		},
   		{
   			name: "Jingle",
   			address: "69 butt street",
   			city: "New York",
   			state: "NY",
   			zip: "1111"
   		},
   		{
   			name: "Heimer",
   			address: "69 butt street",
   			city: "New York",
   			state: "NY",
   			zip: "1111"
   		},
   		{
   			name: "Schmidt",
   			address: "69 butt street",
   			city: "New York",
   			state: "NY",
   			zip: "1111"
   		}
   		
   	];

   	$scope.formattedAddress = function(person) {

   		return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;

   	};

    $scope.$watch('name', function() {
      nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());

    
  }]);
