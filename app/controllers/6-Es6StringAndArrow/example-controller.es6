'use strict';

class ExampleController {

    constructor() {

        this.model = {
            name: "",
            power: ""
        };

        this.heros= [];
    }

    reset() {

        this.heros = [];
    };

    writeToConsole() {

        this.heros.forEach((hero) => { console.log(`${hero.name} is a super hero with the power of ${hero.power}`); })
    };

    add(hero) {

        this.heros.push(hero);
        this.model = {
            name: "",
            power: ""
        }
    };

    removeHero(index) {

        this.heros.splice(index, 1);
    }
}

angular.module('nges.ExampleController', [])
    .controller('ExampleController', ExampleController);