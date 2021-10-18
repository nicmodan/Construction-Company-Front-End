import React from "react";
import './style.css'
import logo from '../../logo.png'


const Logo = () =>{
    return (
        <div className='logo'>
            <img alt='comany logo' src={logo} />
            <h3>company name</h3>
        </div>
    )
}

export default Logo