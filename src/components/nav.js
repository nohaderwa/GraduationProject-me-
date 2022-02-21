import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import './nav.css';

//font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//logo image
import logo from '../pictures/pic2.png';
import img from '../pictures/pic1.png';

const Nav = (props) => {

    const Compo = props.compo;

    const navigate = useNavigate();

    return (
        <div className="main">
            <div className="logo">
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className='fa'
                    onClick={() => { navigate(-1) }}
                />
                <img
                    className="circle"
                    src={logo}
                    alt="circle"
                    onClick={() => { navigate('/') }}
                />
                <div className="variable">
                    <Compo />
                </div>
            </div>
            <div>
                <div className="picDiv">
                    <img className="pic" src={img} alt="pic" />
                </div>
            </div>
        </div>
    )
}

export default Nav;