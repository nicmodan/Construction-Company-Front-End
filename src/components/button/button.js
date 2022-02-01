import React, {useState} from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Button = (props) =>{
   
    // {type, handleClick, name, styles}
    return (
        <button className="button-48"
                type={props.type} 
                onClick={props.handleClick}
                style={props.styles}>
                { !props.name ? props.children:
                 <span className="text">
                     {props.checkClick && <FontAwesomeIcon icon={faCircleNotch} spin={true} />}
                     {`     ${props.name}`}
                </span>}

        </button>
    )
}

export default Button