import React, {useState} from "react";
import './style.css'
import Create from "./request/create";
import Replace from "./request/replace";
import Review from "./request/review";
import Remove from "./request/remove";

const Request = ({formType, name, inputType}) =>{
    // formtype = profile, input type=review
    ///// each one of this function can have its own componentes
    const [styelClass, setStyleClass] = useState()

    const continFormComponets = {

        review: <Review formType={formType} inputType={inputType} />,
        create: <Create formType={formType} inputType={inputType} />,
        replace: <Replace formType={formType} inputType={inputType} />,
        remove: <Remove formType={formType} inputType={inputType} />
    }

    const list = name.map((item, i)=>{
        return <div key={`item_${i}`} 
                    className={item===inputType?item:'hideClass'}>
        
                    {continFormComponets[item]}
                </div>
    })
    return(
        <div className='form-body'>
            {list}
        </div>
    )
}

export default Request