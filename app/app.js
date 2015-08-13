'use strict';

angular.module('nges', ['ngRoute', 'nges.ExampleController'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/controllers/1-Initial/example.tpl.html',
                controller: 'ExampleController as ctrl'
            });
    });