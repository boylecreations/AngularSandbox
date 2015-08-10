'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('MainCtrl', ['$scope', '$location', '$log', '$routeParams', 'nameService', function ($scope, $location, $log, $routeParams, nameService) {
   

    //$log.info($location.path());

    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
      nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());



    $scope.alertClick = function() {

    	alert("clicked!");

    };

    window.addEventListener('hashchange', function() {

      if ( window.location.hash === '#/bookmark/1') {
          console.log('Hash Changed!: ' + window.location.hash);
      }

      if ( window.location.hash === '#/bookmark/2') {
        console.log('Hash Changed!: ' + window.location.hash);
      }

      if ( window.location.hash === '#/bookmark/3') {
        console.log('Hash Changed!: ' + window.location.hash);
      }

      console.log('Hash Changed!: ' + window.location.hash);

    });

    //proof of singleton


    //$scope.num = $routeParams.num || 1;
    //alert($scope.num);
    
  }]);
