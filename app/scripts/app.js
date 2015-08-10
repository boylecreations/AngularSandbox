'use strict';

/**
 * @ngdoc overview
 * @name SandboxApp
 * @description
 * # SandboxApp
 *
 * Main module of the application.
 */
var SandboxApp = angular
  .module('SandboxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/request', {
        templateUrl: 'views/request.html',
        controller: 'RequestCtrl'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'ArchiveCtrl'
      })

      //variable

      .when('/:num', {
        templateUrl: 'views/request.html',
        controller:  'MainCtrl' 
      })

      //otherwise

      .otherwise({
        redirectTo: '/'
      });


      


  });


    // @ is an operator for text for the scope outside of isolation
    SandboxApp.directive('searchResult', function() {
        return {
          templateUrl: '../directives/searchresult.html',
          replace: true,
          restrict: 'E',
          scope: {
            // Two way binding in the isolated scope
              personObject: "=",
            // Function 
              formattedAddressFunction: "&"
          },
          // change compile to link to only post link
          compile: function(elem, attrs) {

              return {
                //bad form, avoid if possible
                //pre: function(scope, element, attrs) {

                //},
                post: function(scope, element, attrs) {
                  // runs once per item after being posted
                }
              }
          },
          transclude: true
          //,link:
        }
    });


    SandboxApp.service('nameService', function () {

      var self = this;
      this.name = "John Doe"
      this.namelength = function() {
      return self.name.length;
    
    }

});