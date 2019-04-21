import React from 'react';
import './style.css';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            api: "API Work"
        };
    }

    render() {
        return (
            <div>
                Hello, this is Profile!
                <br/>
                {this.state.api}
            </div>
        )
    }
}

export default Profile