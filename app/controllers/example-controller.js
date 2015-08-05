'use strict';

var module = angular.module('nges.ExampleController', []);

module.controller('ExampleController', function($scope) {

    $scope.model = {
        firstName: "blah",
        lastName: "",
        superPower: "",
        superPowers: []
    };

    $scope.reset = function() {

        $scope.model = {
            firstName: "",
            lastName: "",
            superPower: "",
            superPowers: []
        };
    };

    $scope.writeSuperPowersToConsole = function () {

        $scope.model.superPowers.forEach(function(power) { console.log(s); })
    };

    $scope.add = function(power) {

      $scope.model.superPowers = $scope.model.superPowers || [];
      $scope.model.superPowers.push(power);
    };
});