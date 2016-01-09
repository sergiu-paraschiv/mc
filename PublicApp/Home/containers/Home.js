import React, {Component} from 'react';
import CECService from '../../CEC/CECService';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keys: ''
        };
    }

    componentDidMount() {
        CECService.onKey((key) => {
            this.setState({
                keys: this.state.keys + "\n" + key
            });
        });
    }

    render() {
        return (
            <div className="home">
                <label>Keys:</label>
                <textarea value={this.state.keys} />
            </div>
        );
    }
}

export default Home;
