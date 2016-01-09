'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TestCEC = require('./Handlers/TestCEC');

var _TestCEC2 = _interopRequireDefault(_TestCEC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sockets = function () {
    function Sockets() {
        _classCallCheck(this, Sockets);
    }

    _createClass(Sockets, [{
        key: 'addTo',
        value: function addTo(server) {
            server.ws('/cec', _TestCEC2.default.handle);
        }
    }]);

    return Sockets;
}();

exports.default = new Sockets();