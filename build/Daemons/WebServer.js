'use strict';

var _WebServerService = require('../WebServer/WebServerService');

var _WebServerService2 = _interopRequireDefault(_WebServerService);

var _RouterService = require('../WebServer/RouterService');

var _RouterService2 = _interopRequireDefault(_RouterService);

var _WebSocketService = require('../WebServer/WebSocketService');

var _WebSocketService2 = _interopRequireDefault(_WebSocketService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_WebServerService2.default.setRouter(_RouterService2.default.initialize());
_WebSocketService2.default.initialize(_WebServerService2.default.get());
_WebServerService2.default.servePublic();
_WebServerService2.default.start();