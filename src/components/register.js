import React, { Component } from "react";
import './register.css';
import { NavLink } from 'react-router-dom';


import admin from '../pictures/pic4.png';
import client from '../pictures/pic3.png';


const Register = () => {

    return (
        <div className="registerDiv">
            <div className="text">
                <h2>Register as</h2>
                <h4>Choose your account type</h4>
            </div>
            <div className="squareDiv">
                <NavLink to='/signupadmin'>
                    <div className="square">
                        <figure >
                            <img src={admin} alt="admin" />
                            <figcaption>Admin</figcaption>
                        </figure>
                    </div>
                </NavLink>
                <NavLink to='/signupclient'>
                    <div className="square">
                        <figure>
                            <img src={client} alt="client" />
                            <figcaption>Client</figcaption>
                        </figure>
                    </div>
                </NavLink>




            </div>
            <div className="login">
                <p>Already have an account?<a href="url">login</a></p>
            </div>

        </div>
    )

}





export default Register;