'use strict';

/**
 * @ngdoc function
 * @name raceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raceApp
 */
angular.module('raceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
