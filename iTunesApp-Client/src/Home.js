import React, { Component } from 'react'
import "./App.css";
import axios from "axios";
import SearchItunes from "./components/SearchItunes";
import ItunesCards from "./components/ItunesCards";
import Header from './components/layout/Header'


export default class Home extends Component {

  state = {
    itunes: [],
    topItunes: [],
    flagTopItunes: (Boolean = false)
  };

  getItunes = (search, event) => {
    
    event.preventDefault();
    axios
      .post("http://localhost:3000/ItunesList", { search: search })
      .then(res => {
        this.props.onUpdateItunes(res.data.results);
        this.setState({ itunes: res.data.results });

      
      });
      axios.post("http://localhost:3000/searchItunes",{ search: search })
      .then(res=>{
      })

  };

  getTopItunes = event => {
    event.preventDefault();
    axios.get("http://localhost:3000/getlimitedlist").then(res => {
      this.setState({ topItunes: res.data, flagTopItunes: true });
    });
  };

 


  render() {
    
    return (
        <div>
          <Header/>

            <SearchItunes
              getTopItunes={this.getTopItunes}
              flagTopItunes={this.state.flagTopItunes}
              getItunes={this.getItunes}
              topItunes={this.state.topItunes}
            />

            <ItunesCards itunes={this.state.itunes} />
     
        </div>)
  }
}


