import React, { Component } from 'react';
import axios from "axios";

export default class PopItunes extends Component {
    state = {
       topItunes: []
      };
    
    componentDidMount() {
        axios.get("http://localhost:3000/getlimitedlist").then(res => {
            this.setState({topItunes:res.data})
        });
    }

    render() {
        return (
            <div>
                 <h1 style={{ textAlign: "center" }}>Top 10</h1>
                    <div className="container" style={{ textAlign: "center" }}>
                      {this.state.topItunes.map(item => (
                        <div className="row" key={item._id}>
                          {" "}
                          <div className="col-sm">{item.value}</div>
                          <div className="col-sm"> {item.searchSum}</div>
                        </div>
                      ))}
                    </div>
            </div>
        )
    }
}
