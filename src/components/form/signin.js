import React, {useState, useEffect} from 'react'
import { useHistory, Redirect} from 'react-router-dom'

import './style.css'
import Input from '../input/input'
import Button from '../button/button'
import Notifiation from '../notification/notification'
import loginUser from '../../services/user'

const Signin = () =>{
    const [loading, setLoading] = useState(false)

    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    // const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const history = useHistory()

    const  handelSubmit = async (event)=>{
        event.preventDefault()
        
        try{
            
            const loginResulte = await loginUser({username, password})
            // console.log(loginResulte.data.token)

            window.localStorage.setItem('userInfoAndToken', JSON.stringify(loginResulte.data))
            const data = window.localStorage.getItem('userInfoAndToken') 
            //// the is no use for use ans setUser
            // console.log(data)   
            if (loginResulte) {
                
                setUsername('')
                setPassword('')
                history.push('/account')
                // console.log({password, username})
            }
            
            
        }catch(exception){
            setErrorMessage('wronge username or password')
            setLoading(false)
            setTimeout(()=>{
                setErrorMessage(null)
            }, 5000)
        }
    }
    
    return (
        <div className='signinInputBody'>
            <form onSubmit={handelSubmit}>
                <Input name='username'
                       type='text'
                       placeholder='Username' 
                       value={username}
                       handelChange={(event)=>setUsername(event.target.value)}/>

                <Input name='password'
                       type='password'
                       placeholder='Password' 
                       value={password}
                       handelChange={({ target })=> setPassword(target.value)}/>
                       <Notifiation message={errorMessage} />
                       <br />
                <Button checkClick={loading}
                        handleClick={()=>setLoading(true)}
                        type='submit'
                        name='LOGIN'
                />         
            </form>
        </div>
    )
}

export default Signin