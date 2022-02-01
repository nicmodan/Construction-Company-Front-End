import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './style.css'
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectsReview from '../../components/form/requestForms/apiRequest/projects/review'
import CustomerReview from "../../components/customerReview";


//// imported imagse for the home paege 
import healthAndSafty from '../../preserve/health_safety_environment_policies.jpg'
import inquriry from '../../preserve/Inquiry.jpg'
import projectsImg from '../../preserve/projects.jpg'
import servicesImg from '../../preserve/services.jpg'
import others from '../../preserve/yance.jpg'

import logo from '../../preserve/logo.png'

const Home = () =>{
    const [displayStyle, setDisplayStyle] = useState(false)
    const [subscribe, setSubscribe] = useState('')
    const storeImages = [
                        {
                            img: others,
                            type: 'About',
                            oprations: ['service one', 'service two', 'service three', 'service four']
                        }, 
                        {
                            img: servicesImg,
                            type: 'Contacts',
                            oprations: ['emails', 'PhoneNumber', 'FaceBook', 'Twitter'],
                            operatInfo: ['emails@example.com', '+234157822', '@faceBook', '@twitter']
                        }, 
                        {
                            img: inquriry,
                            type: 'Projects',
                            oprations: ['Projects']
                        },
                        {
                            img: projectsImg,
                            type: 'Make Placement',
                            oprations: ['Gest', 'Profiles']
                        }
                        ]
    const mapSlideShows = storeImages.map((obj, i)=>{
        return(
            <div key={`list_${i}`} className='home-contain-img-slide each-slide'>
                <div className='home-contain-img'>
                    <div className='home-img'>
                        <img src={obj['img']} />
                    </div>
                    <div className='home-slide-img-info'>
                        <div className='home-slide-info'>
                            <h2>
                                {obj['type']}
                            </h2>
                            <ul>
                            {
                                obj['oprations'].map((data, i)=>{
                                    return(
                                        
                                            <li key={'list_'+i}>
                                                <a href={`#${obj['type'].toLocaleLowerCase()}`}>
                                                    <h4>
                                                        {data}
                                                    </h4>
                                                </a>
                                                {obj['operatInfo']?
                                                    <p>{obj['operatInfo'][i]}</p>: ''
                                                }
                                            </li>
                                        
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    useEffect(()=>{
        AOS.init({
            duration: 2000
        })
    }, [])

    return(
        <div className='home-body'>
            <div className='home-header'>
                <div className='home-log-nav'>
                    <div className='home-logo'>
                        <img src={logo} alt='Logo' />
                    </div>
                    <div className='home-nav'>
                        <div className='home-nav-type'>

                            <div className='home-nav-main'>
                                <a href={''}> Home </a>
                            </div>

                            <div className='home-nav-main'>
                                <a href={''}> About </a>
                            </div>

                            <div className='home-nav-main'>
                                <a href={''}> Projects </a>
                            </div>

                            <div className='home-nav-main'>
                                <a > Contacts </a>
                                <div className="home-nav-main-contain">
                                    <a href>{'Emails & main'}</a>
                                    <hr />
                                    <a href>{'Echat'}</a>
                                </div>
                            </div>

                        </div>
                        <div className='home-nav-data'>
                            <div className='home-nav-data-types'>
                                <a href={''}>
                                    Make Placement
                                </a>
                            </div>
                            <div className='home-nav-data-types'>
                                <a href={'#'}>
                                    <Link to='/login'>Login</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-sections'>
                <div className='home-slide-show'>
                {/* [others, servicesImg, inquriry, projectsImg] */}
                    <Slide canSwipe={true}>
                        {mapSlideShows}
                    </Slide>

                </div>
                <div className='home-about' id='about'>
                    <div className='home-contain-about'>
                        <div className='home-about-vision'>
                            <div data-aos='fade-left' className='home-about-img' >
                                <div className='home-about-contain-img  '>
                                    <img src={healthAndSafty} alt='vision' />
                                </div>
                                <div className='home-about-contain-img-info'>
                                    <div className='home-about-containimg-info-data'>
                                        <a href>
                                           <u> VISION </u>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos='fade-right' className='home-about-info' >
                                <div className='home-about-info-contain '>
                                    <div className='home-about-info-border'></div>
                                    <p>Our vision is to be a first class construction company, by offering a high value services to all our clientele </p>
                                </div>
                            </div>
                        </div>
                        <div className='home-about-mission'>
                            <div data-aos='fade-left' className='home-about-info'>
                                
                                <div className='home-about-info-contain '>
                                    <div className='home-about-info-border'></div>
                                    <p>Bricks integral Construction Company ltd. is an Indigenous Company with International standards providing construction and maintenance services to it's clients using cutting edge technology </p>
                                   
                                </div>
                                
                            </div>
                            <div data-aos='fade-right' className='home-about-img' >
                                <div className='home-about-contain-img '>
                                    <img src={others} alt='OVERVIRE IMAGE' />
                                </div>
                                <div className='home-about-contain-img-info'>
                                    <div className='home-about-containimg-info-data'>
                                        <a href>
                                            <u>OVERVIRE</u>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PROJECTS  */}
                <div className='home-projects' id='projects'>
                    <div className='home-projects-contain'>
                        <ProjectsReview allBool={true}/>
                    </div>
                </div>
                <div className='home-customer-review'>
                    <CustomerReview />
                </div>
                <div className='home-contact' id='contacts'>
                    <div className='home-contacts-body'>
                        <div className='home-contact-contain'>
                            <div className='home-contact-email hcc'>
                                <a onClick={()=>setDisplayStyle(!displayStyle)}>
                                    SUBSCRIBE
                                </a>
                            </div>
                            <div className='home-contact-echat hcc'>
                                <a>
                                    E CHAT
                                </a>
                            </div>
                        </div>
                        <div onClick={()=>setDisplayStyle(!displayStyle)} className={displayStyle?'home-contact-contain':'hideclass'}>
                            <div className='home-contact-email-subscribe'>
                                {/* <label htmlFor='email'>SUBSCRIBE</label> */}
                                <input id='email' 
                                       placeholder="example@example.com"
                                       value={subscribe}
                                       onChange={({target})=>{setSubscribe(target.value)}}></input>
                                <button type='submit'>
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='home-projects'></div>
            </div>
            <div className='home-footer'>
                
            </div>
        </div>
    )
}
export default Home