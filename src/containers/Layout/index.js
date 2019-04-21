import React from 'react';
import './style.css';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import PerfectScrollbar from 'react-perfect-scrollbar'

class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            console: "Hello World!"
        }
    }

    componentDidMount() {
        console.log("---", this.state.console);
    }

    render() {
        return (
            <>

                <Sidebar/>
                <div className="wrapper">
                    <Header/>
                    <main>
                        {this.props.children}
                    </main>
                    <Footer/>
                </div>
            </>
        )
    }
}

export default Layout