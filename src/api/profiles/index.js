import React, {useState, useEffect} from "react"
import './style.css'
import { Redirect } from "react-router"
import ProjectsReview from "../../components/form/requestForms/apiRequest/projects/review"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsersCog, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter, faWhatsapp, faGithub} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import profile from "../../services/profile"

import contact from '../../preserve/contact.jpg'



const Profile = () =>{
    const [social, setSocials] = useState({otherSocials: 'please file your social links'})

    const socialIcons = {
        faceBook: [faFacebook, {color: '#4267B2'}],
        whatsApp: [faWhatsapp, {color: '#25D366'}],
        twitter: [faTwitter,{color: '#1DA1F2'}],
        otherSocials: [faGithub, {color: '#4078c0'}]
    }
    
    const valuse = window.localStorage.getItem('userInfoAndToken')
    
    useEffect(()=>{
        const fatchData = async ()=>{
            const data = await profile.review(valuse.id)
            const social = data.contactInformation.socialLinks
            setSocials(social === undefined? {}: social)
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
                    <div className='profiles-img'>
                        <img src={contact} alt='profiles Images'/>
                    </div>
                    <div className='profiles-names'>
                        <h4>Comapny names </h4>
                    </div>
                </div>
                <div className='profiles-names-naves'>
                    <div className='profiles-naves'>
                        <div className='profiles-naves-contains'>
                            <span>
                                <a>
                                    <h3>
                                        <FontAwesomeIcon icon={faUser} />
                                        {'   UserName'}
                                    </h3>
                                </a>
                            </span>
                            <div className='profiles-hidden-nav'>
                                <ul>
                                    <li>
                                        <a>
                                            <FontAwesomeIcon icon={faUsersCog} />
                                            {'    Settings'}
                                        </a>
                                    </li>
                                    <hr />
                                    <li>
                                        <div className='logout'>
                                            <a> 
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
                        <div className='profiles-contacts-types'>
                            <ul>
                                <li>
                                    <h3>Email</h3>
                                    <p>michaelAwofekok@gmail.com</p>
                                </li>
                                <li>
                                    <h3>PhoneNumber</h3>
                                    <p>08188174983</p>
                                </li>
                                <li>
                                    <h3>Location</h3>
                                    <p>lagos, nigeria a place to love </p>
                                </li>
                            </ul>
                        </div>
                        <div className='profiles-contacts-services'>
                        <h3> <u>Services</u> </h3>
                        <ul>
                                <li>
                                    <h4>Services one</h4>
                                </li>
                                <li>
                                    <h4>Services two</h4>
                                </li>
                                <li>
                                    <h4>Services three</h4>
                                </li>
                                <li>
                                    <h4>Services four</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='profiles-info'>
                        <div className='profiles-discription'>
                            <h3> <u> Self Information :</u> </h3>
                            
                            <p>
                            Good morning, my name is Nirag Vashi, and I am a secondary education student at Western Michigan University with a focus in science. I grew up in a family of teachers and know that being a high school science teacher is my calling. My passion for helping others has been evident in my involvement in Kalamazoo Public Schools and as a camp counselor for the last three years
                            </p>
                        </div>
                        <div className='profiles-vision'>
                            <h3> <u> Vision :</u> </h3>
                            <p>
                            our vision is to be a first class construction company, by offering a high value services to all our clientele
                            </p>
                        </div>
                        <div className='profiles-overviews'>
                            <h3> <u> Overviews :</u> </h3>
                            <p>
                              Bricks integral Construction Company ltd. is an Indigenous Company with International standards providing construction and maintenance services to it's clients using cutting edge technology 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='profiles-contact-projects'>
                    <ProjectsReview />
                </div>
                <div className='profiles-contact-socials'>
                    {socialMapper}
                </div>
            </div>
            

        </div>
    )
}
export default Profile

