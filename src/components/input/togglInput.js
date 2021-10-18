import React, {useState} from "react";
import './input.css'
import Toggle from "../toggle";
import Input from "./input";

const ToggleInputs = ({name, type, placeholde, services, condition, preRef}) =>{

//  THIS COMPONENTSE IS NOTE REQUIRED BUT STILL IN USE 
    return (
        <div className='toggle-input'>
             
            <Toggle name={name} 
                    type={type} 
                    placeholde={placeholde}
                    services={services}
                    condition={condition}
                    ref={preRef}
                    />
            
        </div>
    )
}

export default ToggleInputs
// npm i --save @fortawesome/fontawesome-svg-core
//   npm install --save @fortawesome/free-solid-svg-icons
//   npm install --save @fortawesome/react-fontawesome

// npm install --save @fortawesome/free-brands-svg-icons
//   npm install --save @fortawesome/free-regular-svg-icons