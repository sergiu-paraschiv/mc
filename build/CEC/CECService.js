'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodecec = require('nodecec');

var _nodecec2 = _interopRequireDefault(_nodecec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CECService = function () {
    function CECService() {
        var _this = this;

        _classCallCheck(this, CECService);

        this.onKeyHandler = null;
        this.cec = new _nodecec2.default();
        this.cec.start();
        this.cec.on('key', function (data) {
            if (_this.onKeyHandler) {
                _this.onKeyHandler(data.name);
            }
        });
    }

    _createClass(CECService, [{
        key: 'onKey',
        value: function onKey(handler) {
            this.onKeyHandler = handler;
        }
    }]);

    return CECService;
}();

exports.default = new CECService();