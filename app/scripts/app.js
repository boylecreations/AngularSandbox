'use strict';

/**
 * @ngdoc overview
 * @name SandboxApp
 * @description
 * # SandboxApp
 *
 * Main module of the application.
 */
angular
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
      .otherwise({
        redirectTo: '/'
      });
  });
