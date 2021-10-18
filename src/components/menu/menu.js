import React, {useState} from "react";
import './menu.css';
import Button from "../button/button";

const Menu = ({names, handelChange}) =>{

    const [style, setStyle] = useState(names[0])
    const showStyle = {background: '#b0b0b0'}
    const hideStyle = {backgroung: ''}

    const handelClick=(name)=>{
        handelChange(name.toLowerCase())
        setStyle(name)
        //console.log(name.toLowerCase())
    }

    const buttonList = names.map( (name, i)=> 
            <div key={`list_${i}`} className='menu-get menu'> 
                <Button name={name} 
                        type='submit' 
                        handleClick={()=>handelClick(name)} 
                        styles={style===name?showStyle:hideStyle} /> 
            </div>)

    return(
        <div className='menu-body'>
            {buttonList}
        </div>
    )
}

export default Menu