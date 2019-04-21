import React from 'react';
import './style.css';

class AnalyticTwo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            api: "API Work"
        };
    }

    render() {
        return (
            <div>
                Hello, this is Analytic Two!
                <br/>
                {this.state.api}
            </div>
        )
    }
}

export default AnalyticTwo