'use strict';

/**
 * @ngdoc overview
 * @name raceApp
 * @description
 * # raceApp
 *
 * Main module of the application.
 */
angular
  .module('raceApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('/drivers', {
        templateUrl: 'views/drivers.html',
        controller: 'DriversCtrl'
      })
      .when('/drivers/:id', {
        templateUrl: 'views/driver.html',
        controller: 'DriverCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
