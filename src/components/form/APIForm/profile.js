import React from "react";
import './style.css'
import Request from "../requestForms";

const Profile = ({ styleName, inputType }) =>{
    const nameClass = styleName === 'profile'? 'profile-form':'hideClass'
    //console.log(nameClass, styleName)

    return (
        <div className={nameClass} >
            <Request formType={styleName}
                    name={['review', 'create', 'replace']} 
                    inputType={inputType} />
        </div>
    )
}

export default Profile