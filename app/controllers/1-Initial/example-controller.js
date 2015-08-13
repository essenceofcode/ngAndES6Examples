'use strict';

var module = angular.module('nges.ExampleController', []);

module.controller('ExampleController', function($scope) {

    $scope.model = {
        name: "",
        power: ""
    };

    $scope.justforthedot = {
        heros: []
    };

    $scope.reset = function() {

        $scope.justforthedot.heros = [];
    };

    $scope.writeHerosToConsole = function () {

        $scope.model.heros.forEach(function(hero) { console.log(hero.name + ' is a super hero with the power of ' + hero.power); })
    };

    $scope.add = function(hero) {

      $scope.justforthedot.heros.push(hero);
      $scope.model = {
          name: "",
          power: ""
      }
    };

    $scope.delete = function(index) {

        $scope.justforthedot.heros.splice(index, 1);
    }
});