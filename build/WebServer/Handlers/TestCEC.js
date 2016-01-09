'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CECService = require('../../CEC/CECService');

var _CECService2 = _interopRequireDefault(_CECService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestCEC = function () {
    function TestCEC() {
        _classCallCheck(this, TestCEC);
    }

    _createClass(TestCEC, [{
        key: 'handle',
        value: function handle(ws) {
            _CECService2.default.onKey(function (key) {
                ws.send(key);
            });
        }
    }]);

    return TestCEC;
}();

exports.default = new TestCEC();