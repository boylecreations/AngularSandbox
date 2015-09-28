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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
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
    
    // Hello World Directive. No Template URL
    (function() {

      SandboxApp.directive('helloWorld', function() {
        return {
          template: 'Hello World'
        };
      });

    }());

    // String Conversion Widget Directive
    (function() {

      SandboxApp.directive('widget', function() {
        return {
          templateUrl: '../directives/widget.html',
          replace: true,
          restrict: 'E',
          scope: {
            widgetTitle1: "@",
            widgetTitle2: "@",
            combineStrings: "&"
          },
          compile: function(elem, attrs) {
            return {
              post: function(scope, element, attrs) {
                console.log("Compile Fired");
              }
            }
          }
        }
      });

    }());

    // Udemy Search Result Directive.
    (function() {

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

    }());
    


   

    SandboxApp.service('contactFormService', function () {


    
      
    });


    SandboxApp.service('nameService', function () {

      var self = this;
      this.name = "John Doe"
      this.namelength = function() {
      return self.name.length;
    
    }

    

});