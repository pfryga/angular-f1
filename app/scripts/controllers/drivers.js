'use strict';

/**
 * @ngdoc function
 * @name raceApp.controller:DriversCtrl
 * @description
 * # DriversCtrl
 * Controller of the raceApp
 */
angular.module('raceApp')
  .controller('DriversCtrl', function ($scope, ergastAPIservice) {
    // $scope.driversList = [];

    ergastAPIservice.getDrivers().success(function (response) {
    	$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
    $scope.searchFilter = function (driver) {
	    var keyword = new RegExp($scope.nameFilter, 'i');
	    return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};
  });
