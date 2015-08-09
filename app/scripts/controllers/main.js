'use strict';

/**
 * @ngdoc function
 * @name SandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the SandboxApp
 */
angular.module('SandboxApp')
  .controller('MainCtrl', ['$scope', '$location', '$log', function ($scope, $location, $log) {
   

    //$log.info($location.path());
    

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
    
  }]);
