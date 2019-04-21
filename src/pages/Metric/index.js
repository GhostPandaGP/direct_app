import React from 'react';
import './style.css';

class Metric extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            api: "API Work"
        };
    }

    render() {
        return (
            <div>
                Hello, this is Metric!
                <br/>
                {this.state.api}
            </div>
        )
    }
}

export default Metric