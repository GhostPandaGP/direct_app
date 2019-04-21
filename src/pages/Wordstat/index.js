import React from 'react';
import './style.css';

class Wordstat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            api: "API Work"
        };
    }

    render() {
        return (
            <div>
                Hello, this is Wordstat!
                <br/>
                {this.state.api}
            </div>
        )
    }
}

export default Wordstat