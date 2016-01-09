'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Sockets = require('./Sockets');

var _Sockets2 = _interopRequireDefault(_Sockets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebSocketService = function () {
    function WebSocketService() {
        _classCallCheck(this, WebSocketService);
    }

    _createClass(WebSocketService, [{
        key: 'initialize',
        value: function initialize(server) {
            _Sockets2.default.addTo(server);
        }
    }]);

    return WebSocketService;
}();

exports.default = new WebSocketService();