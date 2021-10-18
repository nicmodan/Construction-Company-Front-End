import React from "react";
import './style.css'
import Request from "../requestForms";

const Info = ({ styleName, inputType}) =>{
    const nameClass = styleName === 'information'? 'info-form':'hideClass'
    //console.log(nameClass, styleName)
    // {/* style name = profile, input type = review */}

    return (
        <div className={nameClass} >
            <Request formType={styleName}
            // formtype = profile, input type=review
                    name={['review', 'create', 'replace']} 
                    inputType={inputType} />
        </div>
    )
}

export default Info