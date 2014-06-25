'use strict';

/**
 * @ngdoc function
 * @name raceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raceApp
 */
angular.module('raceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
