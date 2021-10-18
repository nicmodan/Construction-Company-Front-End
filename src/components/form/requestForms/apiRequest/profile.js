import React, {useState, useRef} from "react";
import './style.css'
import ImageFile from "../../../input/imagefile";
import Input from "../../../input/input";
import TextArea from "../../../input/textarea";
import { Social } from "../../../input/socials";
import Button from '../../../button/button'
import { ProfileReview } from "./profile/review";
import profile from "../../../../services/profile";
import Notifiation from "../../../notification/notification";

const ProfileForm = ({inputtype}) =>{
    const [name, setName] = useState('')
    const [selfIntro, setSelfIntro] = useState('')
    const [location, setLocation] = useState('')
    
    const [message, setMessage] = useState('')
    const [styleMessage, setStyleMessage] = useState(null)

    const toggleSocialRef = useRef()
    const toggleprofileLogo = useRef()
     
    const explaleSelfIntro = 'My name is Jordan Lin, and I’m a recent computer science graduate from Stanford University.'

    const social = {}
    const profileObjLogo = {}

    const showImg =  <ImageFile imagesResulte={(obj)=> Object.assign(profileObjLogo, obj) } 
                                alt='please set multiple image for your profile'  
                                ref={toggleprofileLogo}/>
    
    const showSocials =  <Social finalValues={(valuse)=>Object.assign(social, valuse)} ref={toggleSocialRef} />

    const handelSubmit= async(event)=>{
        event.preventDefault()
        // console.log(social, profileObjLogo)
        const user = JSON.parse(window.localStorage.getItem('userInfoAndToken'))
        profile.setToken(user.token)

        const formdata = new FormData()
        const request = {
            name,
            SelfIntorduction: selfIntro,
            location,
            faceBook: social['facebook'],
            twitter: social['twitter'],
            whatsApp: social['whatsapp'],
            otherSocials: social['gitHub']

        }
        
        for(const key of Object.keys(profileObjLogo)){
            formdata.append('image', profileObjLogo[key])
        }

        // console.log(formdata)

        try{
            const profileData = await profile.create(request)
            const profilAndImg = await profile.createProfileImg(formdata)


            setName('')
            setLocation('')
            setSelfIntro('')

            toggleprofileLogo.current.changeState()
            toggleSocialRef.current.changeState()

            setMessage('congrtulation on posting your profile')
            setStyleMessage({color: 'green'})
            setInterval(()=>{
                setMessage(null)
                setStyleMessage({color: 'brown'})
            }, 5000)

            // console.log(profileData, profilAndImg)

        }catch(exception){
            setMessage('please file the reqired profile Information')
            setInterval(()=>{
                setMessage(null)
            }, 5000)

        }
    }

    const review = ()=>{
        return(
            <div className='review-body'>
                <ProfileReview />
                {/* <div>lets review profile</div> */}
            </div>
        )
    }
    const create = ()=>{
        return(
            <div className='create-body'>
                <form onSubmit={handelSubmit}>
                    <div className='api-form'>
                        <div className='img-contain'>
                            <div className='contain-imgFile'>
                                {showImg}
                                   
                            </div> 
                            <div className='contain-input-name'>
                                
                                <Input name='Profile Name' label={true} type='text' placeholder='please profile name' 
                                        value={name} handelChange={({ target })=>setName(target.value) }  />
                            </div>
                        </div>
                        <hr />
                        <div className='discription-location'>
                            <p 
                                style={{margin: '0 0 0 10px'}}>
                                    <strong>{'Self Introdunction & Location'}</strong> 
                            </p>
                            <div className='discription'>
                                <div className='textare-overview'>
                                    <TextArea rows='4' cols='58' name='selfIntro' placeholder={explaleSelfIntro}
                                        valuse={selfIntro} handelChange={({ target })=>setSelfIntro(target.value)} />
                                </div> 
                            </div>
                            <div className='location'>
                                <Input name={'location'} type='text'
                                       placeholder='Location'
                                       value={location}
                                       handelChange={({target})=>setLocation(target.value)} 
                                       label={false} />
                            </div>
                        </div>
                        <hr />
                        <div className='social'>
                            {showSocials}
                            
                        </div>
                        <div className='notification-resulte'>
                            <Notifiation message={message} style={styleMessage} />
                        </div>
                        <div className='button-station'>
                            <Button type='submit'
                                    // handleClick={(e)=>e.preventDefault} 
                                    name='submit' />
                         </div> 
                    </div>
                </form>
            </div>
        )
    }
    const replace = ()=>{
        return(
            <div className='replace-body'>
                <div>
                    lets replace profile
                </div>
            </div>
        )
    }
    const remove = ()=>{
        return<></>
    }

    const objectRender = {
        review: review(),
        create: create(),
        replace: replace(),
        remove: remove()
    }

    return objectRender[inputtype]
}

export default ProfileForm