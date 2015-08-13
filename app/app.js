'use strict';

angular.module('nges', ['ngRoute', 'nges.ExampleController'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/controllers/6-Es6StringAndArrow/example.tpl.html',
                controller: 'ExampleController as ctrl'
            });
    });