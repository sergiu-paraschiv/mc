class CECService {
    constructor() {
        this.onKeyHandler = null;
        this.ws = new WebSocket('ws://localhost:8080/cec', 'echo-protocol');

        this.handleConnect();
    }

    handleConnect() {
        this.ws.onmessage = (event) => {
            if(this.onKeyHandler) {
                this.onKeyHandler(event.data);
            }
        };
    }

    onKey(handler) {
        this.onKeyHandler = handler;
    }
}

export default new CECService();
