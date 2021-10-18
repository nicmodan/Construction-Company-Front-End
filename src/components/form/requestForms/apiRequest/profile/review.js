import React, {useState, useEffect} from "react";
import './style.css'
import profile from "../../../../../services/profile";
// import img from './01.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
const path = require('path')


export const ProfileReview = () =>{
    
    // let counts = 0
    // console.log(counts += 1)
    const [name, setName] = useState('')
    const [selfIntruction, setSelfintroduction] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [social, setSocials] = useState({otherSocials: 'please file your social links'})
    const [location, setLocation] = useState('')
    const [url, setUrls] = useState([])
    const user = JSON.parse(window.localStorage.getItem('userInfoAndToken'))
    
    const socialIcons = {
        faceBook: [faFacebook, {color: '#4267B2'}],
        whatsApp: [faWhatsapp, {color: '#25D366'}],
        twitter: [faTwitter,{color: '#1DA1F2'}],
        otherSocials: [faGithub, {color: '#4078c0'}]
    }
    
    const socialMapper = Object.keys( social ).map((key, i)=>{
            //console.log(key)
            return(
                <div key={`item_${i}`} className='profile-socials-contain'>
                    <div className='profile-socials-icon' style={socialIcons[key][1]}>
                        <FontAwesomeIcon icon={socialIcons[key][0]} />
                    </div>
                    <div className='profile-socials-usernames'>
                        <a href='#'>{social[key]}</a>
                    </div>
                </div>
            )
        }
    )


    useEffect(()=>{
        // setName('IKHIDE OGOLO')
        // setSelfintroduction('My name is IKHIDE OGOLO, is a professional Civil engineer with over 10 years of experience, His vast Knowledge of construction industry spans supervision multiple project types from infancy to completion, and  extension project management . He has Impacted the construction Industry with over 60 projects from design to completion. Ikhide is the principal partner / CEO of brick Integral Construction Company . He is also a member of the Nigerian Society of engineers and the Nigerian Institution of Civil Engineers')
        // setPhoneNumber('+2348188174983')
        // setEmail('michaelawofeko@yahoo.com')
        // setSocials({
        //     facebook: '@facebook',
        //     whatsApp: '@facebook',
        //     twitter: '@facebook',
        //     github: '@facebook'
        // })
        // setLocation('3B Fadeyi Aladura Street Off Oritshe Street, Off Awolowo way By Balogun Bus Stop P.O.Box 1015 Ikeja, Lagos, Nigeria')
        // setUrls(img)

        const fetchData = async ()=>{
            const data = await profile.review(user.id)
            // const resulte = await axios.get(`api/profile/:${user.id}`)
            // const data = resulte.data
            // console.log(data)
    
            // const profileImg = data.image
            const profileImg = data.image
            const storeUrl = []
            // console.log(storeUrl)
            
            const arrayBufferToBase64 = (buffer)=> {
                var binary = '';
                var bytes = [].slice.call(new Uint8Array(buffer));
                bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
            }
    
            for(let i=0; i<profileImg.length; i++){
                // const contentType = `data:${profileImg[i].contentType};base64,`
                // const bufferImagebase64 = arrayBufferToBase64(profileImg[i].data.data)
                const url = profileImg[i].path
                
                storeUrl.push(url)
                console.log(url)
                // storeUrl.push(contentType+bufferImagebase64)
            }
            
        
            setName(data.names)
            setSelfintroduction(data.SelfIntorduction)
            setPhoneNumber(data.contactInformation.phoneNumber)
            setEmail(data.contactInformation.email)
            setSocials(data.contactInformation.socialLinks)
            setLocation(data.contactInformation.location)
            //plasecheck this
            setUrls(storeUrl)
            console.log(data.contactInformation.socialLinks)
        }

        fetchData()

    }, [])

    return(
        <div className='profile-review'>
            <div className='profile-img-name'>
                <div className='profile-img'>
                    <img src={ url[0] } className='pro-img' alt='profile image'/>
                </div>
                <div className='profile-name'>
                    <h2 className='profile-name-info'>{name}</h2>
                </div>
            </div>
            <div className='profile-details-intro'>
                <div className='profile-details'>
                    <ul id='profile-ul'>
                        <li className='profile-li'>
                            <h4 className='profile-li-h4'>Email</h4>
                            <p className='profile-li-p'>{email}</p>
                        </li>
                        <li className='profile-li'>
                            <h4 className='profile-li-h4'>phoneNumber</h4>
                            <p className='profile-li-p'>{phoneNumber}</p>
                        </li>
                        <li className='profile-li'>
                            <h4 className='profile-li-h4'>Location</h4>
                            <p className='profile-li-p'>{location}</p>
                        </li>
                    </ul>
                </div>
                <div className='profile-intro'>
                    <div className='pro-intro'>
                        <h4 className='profile-intro-h4'>Self Discription</h4>
                        <p className='profile-intro-p'>{selfIntruction}</p>
                    </div>
                </div>
            </div>
            <div className='profile-social-handels'>
                <div className='profile-social'>

                    {
                        // console.log(social)
                      socialMapper 
                    }

                </div>
            </div>
        </div>
    )
}