import {client} from 'websocket';

class CECService {
    constructor() {
        this.onKeyHandler = null;
        this.ws = new client();
        this.ws.connect('ws://localhost:8080/cec', 'echo-protocol');

        this.ws.on('connect', this.handleConnect.bind(this));
    }

    handleConnect(connection) {
        connection.on('message', (message) => {
            console.log('m', message);

            if(this.onKeyHandler) {
                this.onKeyHandler(message.utf8Data);
            }
        });
    }

    onKey(handler) {
        this.onKeyHandler = handler;
    }
}

export default new CECService();
