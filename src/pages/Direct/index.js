import React from 'react';
import './style.css'

const API_KEY = "";

class Direct extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            api: "API Work"
        };
    }

    getCompanyInfo = async () => {
        //const uri = `${API_KEY}`;
        const token = 'AQAAAAAaoh3hAAWTuMivGMDRGUthmwUKO7Xw0jA';
        const clientLogin = 'ghostpanda1';
        const campaignsURL = 'https://api-sandbox.direct.yandex.com/json/v5/campaigns';

        let h = new Headers();
        h.append("Authorization", `Bearer ${token}`);
        h.append("Client-Login", clientLogin);
        h.append("Accept-Language", "ru");

        let b = {
            "method": "get",
            "params": {
                "SelectionCriteria": {},
                "FieldNames": ["Id", "Name"]
            }
        };

        //let body = b.toJson();

        let req = new Request(campaignsURL, {
            method: 'GET',
            headers: h,
            body: b,
            mode: 'cors'
        });

        const r = await fetch(req);
        //const data = r.json();
        console.log("-----", r);
    };

    componentDidMount() {
        //this.getCompanyInfo();
    };

    render() {
        return (
            <div>
                Hello, this is Direct!
                <br/>
                {this.state.api}
            </div>
        )
    }
}

export default Direct