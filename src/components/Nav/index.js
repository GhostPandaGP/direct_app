import React from 'react';
import {Link} from "react-router-dom";

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            navClass: this.props.navClass,
            ul_open: true,
        };
        //this.changeStateNav = changeStateNav.bind(this);
    };

    changeStateUl = () => {
        this.setState({ul_open: !this.state.ul_open});
    };

    render() {
        const open_ul = this.state.ul_open? 'is_ul': 'is_not_ul';

        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/wordstat">Wordstat</Link>
                    </li>
                    <li>
                        <Link to="/direct">Direct</Link>
                    </li>
                    <li>
                        <Link to="/metric">Metric</Link>
                    </li>
                    <li>
                        <a href="#" onClick={() => this.changeStateUl()}>Dashboards</a>
                        <ul className={open_ul}>
                            <li>
                                Dashboard1
                            </li>
                            <li>
                                Dashboard2
                            </li>
                            <li>
                                Dashboard3
                            </li>
                            <li>
                                Dashboard4
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav