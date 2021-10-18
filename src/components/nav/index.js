import React, {useState} from "react";
import Button from '../button/button' 

import './index.css';


const Nav = ({ list, handleClick }) =>{

    const [nameStyle, setNameStyle] = useState('') 
    const styleButton = {background: '#b0b0b0'}
    const noStyleButton = {background: ''}

    const handelClick = (items) =>{

        setNameStyle(items)
        console.log(items.toLowerCase())
        

        handleClick(items.toLowerCase())
    }
    
   

    const navList = list.map( (items, i)=>{
            return (
                    <li className={`${items.toLowerCase()} nav-list`} key={'list_'+i}>
                        
                        <Button type='submit' 
                                handleClick={()=>handelClick(items)} 
                                name={items} 
                                styles={nameStyle === items ? styleButton: noStyleButton} />
                        {/* <a href='#'>
                            {items}
                        </a> */}
                    </li>
                    )
        } )


    return(
        <nav>
            <ul id='nav-ul'>
                {navList}
            </ul>
        </nav>
    )
}

export default Nav