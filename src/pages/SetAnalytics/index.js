import React from 'react';
import './style.css';

class SetAnalytics extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            api: "API Work"
        };
    }

    render() {
        return (
            <div>
                Hello, this is Set Analytics!
                <br/>
                {this.state.api}
            </div>
        )
    }
}

export default SetAnalytics