import CEC from 'nodecec';

class CECService {
    constructor() {
        this.onKeyHandler = null;
        this.cec = new CEC();
        this.cec.start();
        this.cec.on('key', (data) => {
            if(this.onKeyHandler) {
                this.onKeyHandler(data.name);
            }
        });
    }

    onKey(handler) {
        this.onKeyHandler = handler;
    }
}

export default new CECService();
