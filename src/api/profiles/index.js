import React, {useState, useEffect} from "react"
import './style.css'
import { Redirect, useHistory, Link } from "react-router-dom"
import ProjectsReview from "../../components/form/requestForms/apiRequest/projects/review"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsersCog, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";

import profile from "../../services/profile"
import info from "../../services/info"

import contact from '../../preserve/contact.jpg'



const Profile = () =>{
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const handleClick = ()=>{
        window.localStorage.clear('userInfoAndToken')
        history.push('/login')
    }

    const [services, setServices] = useState([])
    const [overview, setoverview] = useState('')
    const [vision, setVision] = useState('')
    const [name, setName] = useState('')
    const [companyName, setCompanyName] = useState('')
    // const [logo, setLogo] = useState('')
    const [selfIntruction, setSelfintroduction] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [social, setSocials] = useState({otherSocials: 'please file your social links'})
    const [location, setLocation] = useState('')
    const [url, setUrls] = useState([])
    // const [social, setSocials] = useState({otherSocials: 'please file your social links'})

    const socialIcons = {
        faceBook: [faFacebook, {color: '#4267B2'}],
        whatsApp: [faWhatsapp, {color: '#25D366'}],
        twitter: [faTwitter,{color: '#1DA1F2'}],
        otherSocials: [faGithub, {color: '#4078c0'}]
    }
    
    const valuse = JSON.parse( window.localStorage.getItem('userInfoAndToken') )
    
    useEffect(()=>{
        const fatchData = async ()=>{
            const infoData = await info.getId(valuse.id)
            const data = await profile.review(valuse.id)
            setLoading(true)

            const social = data.contactInformation.socialLinks
            const profileImg = data.image
            
            const storeUrl = []
            
            const arrayBufferToBase64 = (buffer)=> {
                var binary = '';
                var bytes = [].slice.call(new Uint8Array(buffer));
                bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
            }
    
            for(let i=0; i<profileImg.length; i++){

                const contentType = `data:${profileImg[i].contentType};base64,`
                const bufferImagebase64 = arrayBufferToBase64(profileImg[i].data.data)
                // const url = profileImg[i].path
                
                // storeUrl.push(url)
                // console.log(url)
                storeUrl.push(contentType+bufferImagebase64)
            }

            ///// Personal Information
            setName(data.names)
            setSelfintroduction(data.SelfIntorduction)
            setPhoneNumber(data.contactInformation.phoneNumber)
            setEmail(data.contactInformation.email)
            setSocials(data.contactInformation.socialLinks)
            setLocation(data.contactInformation.location)
            setUrls(storeUrl)
            setSocials(!social? {}: social)

            ////// Company Information
            setServices(infoData.company_services)
            setoverview(infoData.company_overview)
            setVision(infoData.company_vision)
            setCompanyName(infoData.company_name)

        }
        fatchData()
    }, [])

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

    if(!valuse){
        return <Redirect to='./login' />
    }
    return(
        <div className='profiles-conitain'>

            <div className='profiles-header'>

                <div className='profiles-img-names'>
                    <div className={loading?'profiles-img':'profiles-img loading'}>
                        <img src={url[0]} alt='profiles Images'/>
                    </div>
                    <div className={loading?'profiles-names': 'profiles-names loading'}>
                        <h4>{companyName}</h4>
                    </div>
                </div>
                <div className='profiles-names-naves'>
                    <div className={loading?'profiles-naves': 'profiles-naves loading'}>
                        <div className='profiles-naves-contains'>
                            <span>
                                <a>
                                    <h3>
                                        <FontAwesomeIcon icon={faUser} />
                                        {`   ${name}`}
                                    </h3>
                                </a>
                            </span>
                            <div className='profiles-hidden-nav'>
                                <ul>
                                    <li>
                                        <Link to='/account'>
                                            <FontAwesomeIcon icon={faUsersCog} />
                                            {'    Settings'}
                                        </Link>
                                    </li>
                                    <hr />
                                    <li>
                                        <div className='logout'>
                                            <a onClick={handleClick}> 
                                                <FontAwesomeIcon icon={faSignOutAlt} />
                                                {'   Logout'}
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className='profiles-body'>
                <div className='profiles-contact-info'>
                    <div className='profiles-contacts'>
                        <div 
                        className={loading?'profiles-contacts-types':'profiles-contacts-types loading'}>
                            <ul>
                                <li>
                                    <h3>Email</h3>
                                    <p>{email}</p>
                                </li>
                                <li>
                                    <h3>PhoneNumber</h3>
                                    <p>{phoneNumber}</p>
                                </li>
                                <li>
                                    <h3>Location</h3>
                                    <p>{location}</p>
                                </li>
                            </ul>
                        </div>
                        <div 
                        className={loading?'profiles-contacts-services':'profiles-contacts-services loading'}>

                        <h3> <u>Services</u> </h3>
                        <ul>
                               {/* { 
                                <li>
                                    <h4>Services two</h4>
                                </li>
                                <li>
                                    <h4>Services three</h4>
                                </li>
                                <li>
                                    <h4>Services four</h4>
                                </li>} */
                                services.map((serve, i)=>{
                                    return (
                                        <li key={`list_${i}`}>
                                            <h4>{serve}</h4>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <div
                     className='profiles-info' style={loading?{}:{background:'white'}}>
                        <div 
                        className={loading?'profiles-discription':'profiles-discription loading'}>
                            <h3> <u> Self Information :</u> </h3>
                            
                            <p>
                            {selfIntruction}
                            </p>
                        </div>
                        <div 
                        className={loading?'profiles-vision': 'profiles-vision loading'}>
                            <h3> <u> Vision :</u> </h3>
                            <p>
                            {vision}
                            </p>
                        </div>
                        <div 
                        className={loading? 'profiles-overviews':'profiles-overviews loading'}>
                            <h3> <u> Overviews :</u> </h3>
                            <p>
                              {overview} 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='profiles-contact-projects'>
                    <ProjectsReview />
                </div>
                <div className={loading? 'profiles-contact-socials': 'profiles-contact-socials loading'}>
                    {socialMapper}
                </div>
            </div>
            

        </div>
    )
}
export default Profile

