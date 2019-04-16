import React from 'react';
import OpenButton from './components/OpenButton';
import './app.css';
import Profile from './components/Profile';
import Direct from './components/Direct';
import Metric from './components/Metric';
import Wordstat from './components/Wordstat';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_open: true,
            ul_open: true,
        };
        //this.changeStateNav = changeStateNav.bind(this);
    };

    changeStateNav = () => {
        this.setState({nav_open: !this.state.nav_open});
        console.log("---", this.state.nav_open);
    };

    changeStateUl = () => {
        this.setState({ul_open: !this.state.ul_open});
    };

    render() {
        const open_nav = this.state.nav_open? 'is_nav': 'is_not_nav';
        const open_ul = this.state.ul_open? 'is_ul': 'is_not_ul';

        return (
            <Router>
                <div>
                    <OpenButton onClick={() => this.changeStateNav()}/>
                    {/*<button onClick={this.changeStateNav}>X</button>*/}
                    <nav className={open_nav}>
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
                    <main>
                        <Route exact path="/profile" component={Profile} />
                        <Route path="/wordstat" component={Wordstat} />
                        <Route path="/direct" component={Direct} />
                        <Route path="/metric" component={Metric} />
                    </main>
                </div>
            </Router>
        )
    }
}

export default App