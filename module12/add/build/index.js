"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var logger = function logger(message) {
  return console.log(message);
};

logger('hello');

var Human =
/*#__PURE__*/
function () {
  function Human(name) {
    _classCallCheck(this, Human);

    this.name = name;
  }

  _createClass(Human, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);

  return Human;
}();

var human = new Human('Polly');
human.getName();
var x = [1, 2, 3].reduce(function (acc, el) {
  return acc + el;
}, 0);
console.log(x);