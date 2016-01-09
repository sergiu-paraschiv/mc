import WebServerService from '../WebServer/WebServerService';
import RouterService from '../WebServer/RouterService';
import WebSocketService from '../WebServer/WebSocketService';

WebServerService.setRouter(RouterService.initialize());
WebSocketService.initialize(WebServerService.get());
WebServerService.servePublic();
WebServerService.start();
