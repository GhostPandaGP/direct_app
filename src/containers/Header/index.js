import React from 'react';
import './style.css';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            wind: undefined
        }
    }

    gettingWeather = async () => {
        //e.preventDefault();

        const api_key = 'd35450dea349ef9099a409df5e5a5e97';
        const city = "Saint Petersburg";
        const country = "RU";
        const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${api_key}&units=metric`;

        const r = await fetch(uri);
        const data = await r.json();

        // let date = new Date();
        // date.setTime(data.sys.sunset);
        // let sunset = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        // date.setTime(data.sys.sunrise);
        // let sunrise = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            wind: data.wind.speed
        });
        console.log("---", data);
        return 0;
    };

    componentDidMount() {
        this.gettingWeather();
    }

    render() {
        return (
            <header >
                <div className="header">
                    <div className="info">
                        T: <span>{this.state.temperature}	&#176;C, </span>
                        City: <span>{this.state.city}, </span>
                        Country: <span>{this.state.country}, </span>
                        Pressure: <span>{this.state.pressure}, </span>
                        Wind Speed: <span>{this.state.wind}m/s</span>
                    </div>
                    <div className="profile">
                        <i className="fas fa-cog"> </i>
                        <span>Logout <i className="fas fa-sign-out-alt"></i></span>
                        {/*<i className="fas fa-sign-in-alt"> </i>*/}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
