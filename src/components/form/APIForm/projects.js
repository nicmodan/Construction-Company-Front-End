import React from "react";
import './style.css'
import Request from "../requestForms";

const Projects =({ styleName, inputType })=>{
    const nameClass = styleName === 'projects'? 'project-form': 'hideClass'
    //console.log(nameClass, styleName)
    
    return(
        <div className={nameClass}>
            <Request formType={styleName}
                    name={['review', 'create', 'replace', 'remove']} 
                    inputType={inputType} />
        </div>
    )
}
export default Projects