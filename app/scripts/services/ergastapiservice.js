'use strict';

/**
 * @ngdoc service
 * @name raceApp.ergastAPIservice
 * @description
 * # ergastAPIservice
 * Factory in the raceApp.
 */
angular.module('raceApp')
  .factory('ergastAPIservice', function ($http) {
    var ergastAPI = {};

    ergastAPI.getDrivers = function () {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    };

    return ergastAPI;
  });
