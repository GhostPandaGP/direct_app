import React from 'react';
import {Link} from "react-router-dom";
import './style.css';

class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nav_open: true,
            ul_open: true
        }
    }

    changeStateUl = () => {
        this.setState({ul_open: !this.state.ul_open});
    };

    render() {
        const open_ul = this.state.ul_open? 'is_ul': 'is_not_ul';

        return (
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className={"nav-link"} to="/profile"><i className="fas fa-user"></i> Profile</Link>
                        </li>
                        <li  className="nav-item">
                            <Link className={"nav-link"} to="/wordstat"><i className="fas fa-sort-amount-down"></i> Wordstat</Link>
                        </li>
                        <li  className="nav-item">
                            <Link className={"nav-link"} to="/direct"><i className="fas fa-funnel-dollar"></i> Direct</Link>
                        </li>
                        <li  className="nav-item">
                            <Link className={"nav-link"} to="/metric"><i className="fas fa-table"></i> Metric</Link>
                        </li>
                        <li  className="nav-item">
                            <a href="#" onClick={() => this.changeStateUl()}><i className="fas fa-columns"></i> Dashboards</a>
                            <ul className={open_ul}>
                                <li className="nav-item">
                                    <Link className={"nav-link"} to="/setAnalytics">
                                        <i className="fas fa-chart-line"></i> SetAnalytics
                                    </Link>
                                </li>
                                <li   className="nav-item">
                                    <Link className={"nav-link"} to="/analytic_two">
                                        <i className="fas fa-chart-bar"></i> Analytic Two
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Sidebar