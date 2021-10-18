import React from "react";
import './input.css'

const Input =({name, type, placeholder, value, label, handelChange})=>{

    const style = {
        bottom: '85px'
    }

    return(
        <div className='inputBody'>
            {/* <label id='label' for={name}>{name}</label> */}
            {label && <label>{name}</label>}
            <input className={'input'} type={type}
                    placeholder={placeholder} 
                    name={name} 
                    value={value} 
                    onChange={handelChange} multiple />
        </div>
    )
}

export default Input