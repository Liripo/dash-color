/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashColor } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashColor
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
