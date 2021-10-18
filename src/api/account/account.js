import React, { useState } from 'react'
import './account.css'
import Button from '../../components/button/button'
import { Redirect, useHistory} from 'react-router-dom'
import Nav from '../../components/nav'
import Hello from '../../components/hello/hello'
import Logo from '../../components/logo'
import Menu from '../../components/menu/menu'
import Profile from '../../components/form/APIForm/profile'
import Info from '../../components/form/APIForm/info'
import Projects from '../../components/form/APIForm/projects'
// import Toggle from '../../components/toggle'

const Account = React.memo(() =>{
    const history = useHistory()

    const [styleName, setStyleName] = useState('projects')
    const [tyeInput, setTypeInput] = useState('create')
    
    ///////set style by it dev itms information

    const valuse = window.localStorage.getItem('userInfoAndToken')
    const data = JSON.parse(valuse) //'offline work' 

    const handleClick =()=>{
        window.localStorage.clear('userInfoAndToken')
        history.push('/login')
    }
    
    if(!valuse){
        return <Redirect to='/login' />
    }


    
    return(
        <div className='account'>
            <div className='account-body'>
                <div className='account-header'>

                    <div className='account-head'>
                        <div className='account-logo'>
                            <Logo />
                        </div>
                        <div className='account-greatings'>
                            <Hello />
                        </div>
                    </div>
                    <div className='account-nav'>
                        <Nav list={['Information', 'Profile', 'projects']} 
                            handleClick={(name)=>setStyleName(name)} />
                    </div>

                </div>
                <div className='account-section'>

                     <div className='account-feature'>
                         {/* the menu is constant except for the nav operations */}
                        <Menu 
                            names={['REVIEW', 'CREATE', 'REPLACE', 'REMOVE']} 
                            handelChange={(name)=> setTypeInput(name)} />
                     </div>

                    <div className='account-Componets'>
                        {/* style name = profile, input type = review */}
                        <Profile styleName={styleName} inputType={tyeInput}/>
                        <Info styleName={styleName} inputType={tyeInput} />
                        <Projects styleName={styleName} inputType={tyeInput}/>
                    </div>
                    
                </div>
            </div>
            <div className='button-container'>
                 <p> this is the token {`${data.token}`.substring(0,7)} </p>
                 <Button type='submit' handleClick={handleClick} name='LOGOUT'/>
            </div>
            
        </div>
    )
})

export default Account  