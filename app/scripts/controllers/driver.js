'use strict';

/**
 * @ngdoc function
 * @name raceApp.controller:DriverCtrl
 * @description
 * # DriverCtrl
 * Controller of the raceApp
 */
angular.module('raceApp')
  .controller('DriverCtrl', function ($scope, $routeParams, ergastAPIservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.id = $routeParams.id;

    ergastAPIservice.getDriverDetails( $scope.id ).success(function (response) {
    	$scope.details = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    ergastAPIservice.getDriverRaces( $scope.id ).success(function (response) {
    	$scope.races = response.MRData.RaceTable.Races;
    });

  });
