import React, {useState, useEffect} from 'react'
import './hello.css'
import logo from '../../logo.png'

const Hello =()=>{
    const data = JSON.parse(window.localStorage.getItem('userInfoAndToken')) //'offline work'

    // useEffect(()=>{
    //     data = 
    // }, [])
    
    ////// we target the token from here to reive the profile image

    return(
        <div className='hello'>
            <img alt='profile Image' src={logo} />
            <h4>Hello {data.username} (¬‿¬)</h4>
        </div>
    )
}

export default Hello