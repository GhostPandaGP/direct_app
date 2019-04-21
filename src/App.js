import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages
import Layout from './containers/Layout';
import Direct from './pages/Direct';
import Metric from './pages/Metric';
import Profile from './pages/Profile';
import SetAnalytics from './pages/SetAnalytics';
import Wordstat from './pages/Wordstat';
import AnalyticTwo from './pages/AnalyticTwo';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <Router>
                    <div className={"app_wrapper"}>
                        <Layout>
                            <Route exact path="/profile" component={Profile} />
                            <Route path="/wordstat" component={Wordstat} />
                            <Route path="/direct" component={Direct} />
                            <Route path="/metric" component={Metric} />
                            <Route path="/setAnalytics" component={SetAnalytics} />
                            <Route path="/analytic_two" component={AnalyticTwo} />
                        </Layout>

                    </div>
                </Router>
            </>
        )
    }
}





export default App
// import React from 'react';
// import OpenButton from './components/OpenButton';
// import './app.css';
// import Nav from './components/Nav';
// import Profile from './components/Profile';
// import Direct from './components/Direct';
// import Metric from './components/Metric';
// import Wordstat from './components/Wordstat';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nav_open: true,
//             ul_open: true,
//         };
//         //this.changeStateNav = changeStateNav.bind(this);
//     };
//
//     changeStateNav = () => {
//         this.setState({nav_open: !this.state.nav_open});
//         console.log("---", this.state.nav_open);
//     };
//
//     changeStateUl = () => {
//         this.setState({ul_open: !this.state.ul_open});
//     };
//
//     getJson = async () => {
//         const api_key = 'd35450dea349ef9099a409df5e5a5e97';
//         const uri = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`;
//         //const uri = "./total4.json";
//         let h = new Headers();
//         h.append('Accept', 'app');
//
//         let req = new Request(uri, {
//             method: 'GET',
//             headers: h,
//             mode: 'cors'
//         });
//         const r = await fetch(req)
//             .then((response) => {
//                 if (response.ok) {
//                     console.log("---", response.json());
//                     return response.json();
//                 } else {
//                     throw new Error('BAD HTTP stuff');
//                 }
//         })
//             .then( (jsonData) => {
//             })
//             .catch( (err) => {
//                 console.log('Error', err.message);
//             });
//         //const data = await r.json();
//         console.log("data:", r);
//     };
//
//     render() {
//         const open_nav = this.state.nav_open? 'is_nav': 'is_not_nav';
//         const open_ul = this.state.ul_open? 'is_ul': 'is_not_ul';
//
//         return (
//             <Router>
//                 <div>
//                     <OpenButton onClick={() => this.changeStateNav()}/>
//                     <button onClick={() => {this.getJson()}}>Button</button>
//                     {/*<button onClick={this.changeStateNav}>X</button>*/}
//                     <Nav navClass={open_nav}>something text </Nav>
//
//                     <nav id={open_nav} className={" col-md-2 d-none d-md-block bg-light sidebar"}>
//                         <div className="sidebar-content">
//                             <ul>
//                                 {}
//                                 <li>
//                                     <Link to="/profile">Profile</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/wordstat">Wordstat</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/direct">Direct</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/metric">Metric</Link>
//                                 </li>
//                                 <li>
//                                     <a href="#" onClick={() => this.changeStateUl()}>Dashboards</a>
//                                     <ul className={open_ul}>
//                                         <li>
//                                             Dashboard1
//                                         </li>
//                                         <li>
//                                             Dashboard2
//                                         </li>
//                                         <li>
//                                             Dashboard3
//                                         </li>
//                                         <li>
//                                             Dashboard4
//                                         </li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                     </nav>
//                     <main>
//                         <Route exact path="/profile" component={Profile} />
//                         <Route path="/wordstat" component={Wordstat} />
//                         <Route path="/direct" component={Direct} />
//                         <Route path="/metric" component={Metric} />
//                     </main>
//                 </div>
//             </Router>
//         )
//     }
// }
//
// export default App