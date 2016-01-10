import React, {Component} from 'react';
import CECService from '../../CEC/CECService';
import OMXService from '../../OMX/OMXService';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: ''
        };
    }

    // OMXService should run on server dummy...
    componentDidMount() {
        CECService.onKey((key) => {
            switch(key) {
                case 'down':
                    OMXService.start('/home/pi/videos/t1.mkv');
                    break;
                case 'up':
                    OMXService.stop();
                    break;
                default:
                    // noop
            }

        });
    }

    render() {
        return (
            <div className="home">
                <label>Keys:</label>
                <textarea value={this.state.keys} style={{height: '500px'}} />
            </div>
        );
    }
}

export default Home;
