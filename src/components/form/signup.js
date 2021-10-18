import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Button from "../button/button";
import Input from "../input/input";
import Notifiation from "../notification/notification";
import createAccount from "../../services/account";


/// creating account should have its own tokenkey 

const Signup =()=>{
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] =useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] =useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] =useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    const [user, setUser] = useState(null)

    const history = useHistory()

    const handelSubmit = async(event)=>{
        event.preventDefault()
        
        try{
                const accountResult = await createAccount({
                                                        firstName,
                                                        lastName,
                                                        username, 
                                                        password,
                                                        email,
                                                        phoneNumber })
                window.localStorage.setItem('userInfoAndToken', JSON.stringify(accountResult.data))     
                
                //// the is no use for use ans setUser
                const userInfo = window.localStorage.getItem('userInfoAndToken') 

                setUser(JSON.parse(userInfo))  

                if(userInfo){
                        ////// empty states  
                        setPassword('')
                        setPhoneNumber('') 
                        setFirstName('')    
                        setLastName('')  
                        setEmail('')
                        setUsername('')                                  
                        
                        // console.log(JSON.parse(userInfo))
                        history.push('/account')
                }
                

        }catch(exception){
                setErrorMessage('User Input Not  Filed')
                setTimeout(()=>{
                        setErrorMessage(null)
                },5000)
        }
    }

    return (
        <div className='signupInputBody'>
            <form onSubmit={handelSubmit}>
                <Input type='text' 
                        placeholder='First Name'
                        name='firstName'
                        value={firstName}
                        handelChange={({ target })=>setFirstName(target.value)} />

                <Input type='text' 
                        placeholder='Last Name'
                        name='lastName'
                        value={lastName}
                        handelChange={({ target })=>setLastName(target.value)} />

                <Input type='text' 
                        placeholder='Username'
                        name='username'
                        value={username}
                        handelChange={({ target })=>setUsername(target.value)} />

                        {/* conramation of password input required */}
                <Input type='password' 
                        placeholder='Password'
                        name='password'
                        value={password}
                        handelChange={({ target })=>setPassword(target.value)} />

                <Input type='email' 
                        placeholder='Email'
                        name='email'
                        value={email}
                        handelChange={({ target })=>setEmail(target.value)} />

                <Input type='text' 
                        placeholder='Phone Number'
                        name='phoneNumber'
                        value={phoneNumber}
                        handelChange={({ target })=>setPhoneNumber(target.value)} />

                <Notifiation message={errorMessage}/>
                <br />
                <Button type='submit'
                        name="SIGN UP"/>
            </form>
        </div>
    )
}

export default Signup