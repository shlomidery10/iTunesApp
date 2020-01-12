import React, { Component } from 'react'
import axios from "axios";
import User from "./User"
export default class UserTable extends Component {

    state = {
        users:[]
      };


    componentDidMount() {
        
        axios.get("http://localhost:3000/getUsersList").then(res=>{
         this.setState({users:res.data})
        })
      }
    
    render() {
        return (
            <div style={{textAlign:"center"}}>
    {this.state.users.map((user, _id) => (
        <User user={user} key={_id}></User>
        ))}
            </div>
        )
    }
}
