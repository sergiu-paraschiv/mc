import CECService from '../../CEC/CECService';

class TestCEC {
    handle(ws) {
        CECService.onKey((key) => {
            ws.send(key);
        });
    }
}

export default new TestCEC();
