import React, { Component } from 'react'
import axios from "axios";




export default class User extends Component {
   

    deleteUser=()=> {

            axios.delete(`http://localhost:3000/deleteUser?id=${this.props.user._id}`).then(res=>{
       
               })
               window.location.reload();

        }

    
    render(id) {
        
        return (
            <div className="container">
                <div className="row">
                <div class="col-sm">

                    <b>{this.props.user.email}</b>
                    </div>
                    <div class="col-sm">

                <button onClick={this.deleteUser}>Delete User</button></div>
                </div>
            </div>
        )
    }
}
