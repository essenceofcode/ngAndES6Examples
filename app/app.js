'use strict';

angular.module('nges', ['ngRoute', 'nges.ExampleController'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'controllers/example.tpl.html',
                controller: 'ExampleController'
            });
    });