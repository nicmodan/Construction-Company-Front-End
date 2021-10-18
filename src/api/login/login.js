import React, {useState} from 'react';
import Button from '../../components/button/button';
import Signin from '../../components/form/signin';
import Signup from '../../components/form/signup';

import './login.css';

const Login =()=>{
    const [booleanStyle, setBooleanStyle] = useState(false)

    const signinStyle =  { display: booleanStyle ? ' ': 'none'}
    const signupStyle = { display: booleanStyle ? 'none': ' ' }

    const signinbuttonStyle =  { background: booleanStyle ? '#b0b0b0': ''}
    const signupbuttonStyle =  { background: booleanStyle ? '': '#b0b0b0'}
    
    return(
        <div className='Logsection'>
            
            <div className='logBody'>
                <div className='logHeader'>
                    <div className='signin'>
                        {/* <h2>SIGN IN</h2> */}
                        <Button type='submit' 
                                name='SIGN IN'
                                handleClick ={ ()=> setBooleanStyle(!booleanStyle) }
                                styles={signinbuttonStyle} />
                    </div>
                    <div className='signup'>
                        {/* <h2>SIGN UP</h2> */}
                        <Button type='submit'
                                name='SIGN UP' 
                                handleClick={ ()=> setBooleanStyle(!booleanStyle)}
                                styles={signupbuttonStyle} />
                    </div>
                </div>
                <div className='logForm'>
                    <div className='signinForm' style={signinStyle}>
                        <Signin />
                    </div>
                    <div className='signupForm' style={signupStyle}>
                        <Signup />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login