import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class RegisterUsers extends Component {
 

    render() {
        return (
            <div style={{textAlign:"center",marginBottom:"40px"}}>
 <Link className="btn btn-primary" to={{ pathname: '/signup' }}>register</Link></div>
        )
    }
}
