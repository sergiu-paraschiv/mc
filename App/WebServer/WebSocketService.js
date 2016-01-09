import Sockets from './Sockets';

class WebSocketService {
    initialize(server) {
        Sockets.addTo(server);
    }
}

export default new WebSocketService();
