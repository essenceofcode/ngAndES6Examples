'use strict';

function ExampleController() {

    this.model = {
        name: "",
        power: ""
    };

    this.heros= [];

    this.reset = function() {

        this.heros = [];
    };

    this.writeToConsole = function () {

        this.heros.forEach(function(hero) { console.log(hero.name + ' is a super hero with the power of ' + hero.power); })
    };

    this.add = function(hero) {

        this.heros.push(hero);
        this.model = {
            name: "",
            power: ""
        }
    };

    this.delete = function(index) {

        this.heros.splice(index, 1);
    }
}

angular.module('nges.ExampleController', [])
    .controller('ExampleController', ExampleController);