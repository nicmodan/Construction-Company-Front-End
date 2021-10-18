import React from "react";
import './notification.css'

const Notifiation = ({message, style})=>{ 
    if (message === null) {
        return null
    }
    return(
        <div className='message' style={style}>
            {message}
        </div>
    )
}

export default Notifiation