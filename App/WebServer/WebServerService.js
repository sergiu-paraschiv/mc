import Express from 'express';
import ExpressWS from 'express-ws';
import BodyParser from 'body-parser';
import Config from '../Config';

class WebServerService {
    constructor() {
        this.server = new Express();
        this.server.use(BodyParser.urlencoded({ extended: true }));
        this.server.use(BodyParser.json());
        this.server = new ExpressWS(this.server).app;
    }

    setRouter(router) {
        this.server.use(Config.WebServer.apiUri, router);
    }

    servePublic() {
        this.server.use(Express.static(Config.WebServer.publicPath));
    }

    start() {
        this.server.listen(Config.WebServer.port, Config.WebServer.host);
    }

    get() {
        return this.server;
    }
}

export default new WebServerService();
