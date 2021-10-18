import React from "react";
import './style.css'

const Button = (props) =>{
    // {type, handleClick, name, styles}
    return (
        <button className="button-48"
                type={props.type} 
                onClick={props.handleClick}
                style={props.styles}>
                    
                { !props.name ? props.children:
                 <span className="text">{props.name}</span>}

        </button>
    )
}

export default Button