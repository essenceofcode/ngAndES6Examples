"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExampleController = (function () {
    function ExampleController() {
        _classCallCheck(this, ExampleController);

        this.model = {
            name: "",
            power: ""
        };

        this.heros = [];
    }

    _createClass(ExampleController, [{
        key: "reset",
        value: function reset() {

            this.heros = [];
        }
    }, {
        key: "writeToConsole",
        value: function writeToConsole() {

            this.heros.forEach(function (hero) {
                console.log(hero.name + " is a super hero with the power of " + hero.power);
            });
        }
    }, {
        key: "add",
        value: function add(hero) {

            this.heros.push(hero);
            this.model = {
                name: "",
                power: ""
            };
        }
    }, {
        key: "removeHero",
        value: function removeHero(index) {

            this.heros.splice(index, 1);
        }
    }]);

    return ExampleController;
})();

angular.module("nges.ExampleController", []).controller("ExampleController", ExampleController);

//# sourceMappingURL=example-controller.js.map