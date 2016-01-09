import TestCEC from './Handlers/TestCEC';

class Sockets {
    addTo(server) {
        server.ws('/cec', TestCEC.handle);
    }
}

export default new Sockets();
