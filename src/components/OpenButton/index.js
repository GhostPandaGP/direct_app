import React from 'react';
import './style.css';

class OpenButton extends React.Component {
    render() {
        return (
            <div>
                <a href="#" className="">
                    <button
                        className="btn btn-success"
                        onClick={() => this.props.onClick()}
                    >
                        <i className="fas fa-bars">burger</i>
                    </button>
                </a>
            </div>
        )
    }
}

export default OpenButton