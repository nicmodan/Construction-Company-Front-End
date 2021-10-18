import React from "react";
import './input.css'

const TextArea = ({name, rows, cols, valuse, handelChange, placeholder}) =>{
    return (
            <div className='textarea-body'>
                <textarea className='textarea' cols={cols || 45} rows={rows || 5} name={name}
                    placeholder={placeholder || 'say hello'}
                    value={valuse} onChange={handelChange}>
                        
                </textarea>
            </div>
        )
}
export default TextArea