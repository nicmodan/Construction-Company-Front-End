import React, {useState, useEffect} from "react";
import './style.css'
// import info from '../../apiResponse/info'
// import data from "../../apiResponse/info";
import info from "../../../../../services/info";


export const InfoReview = () =>{
    const [services, setServices] = useState([])
    const [overview, setoverview] = useState('')
    const [vision, setVision] = useState('')
    const [name, setName] = useState('')
    const [logo, setLogo] = useState('')
    const user = JSON.parse( window.localStorage.getItem('userInfoAndToken') )

    useEffect(()=>{

        const fetchData = async()=>{
            const imgPath= "../../../../../../../backend/"

            const data = await info.getId(user.id)
            const company_logo = data.company_logo //data.company_logo

            const arrayBufferToBase64 = (buffer)=> {
                var binary = '';
                var bytes = [].slice.call(new Uint8Array(buffer));
                bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
            }

            // const content_type = `data:${company_logo.image.contentType};base64,`
            // const bufferImagebase64 = arrayBufferToBase64(company_logo.image.data.data)
            
            // setLogo(content_type+bufferImagebase64)

            const path = imgPath+company_logo.image.path
            setLogo(path)
            
            setServices(data.company_services)
            setoverview(data.company_overview)
            setVision(data.company_vision)
            setName(data.company_name)
            console.log(data)
        }
        fetchData()

    }, [])

    const mapServices = services.map((services, i)=>{
        return <li className='services-id' key={'list_'+i}>{services}</li>
    })

    return(
        <div className='contain-reviews'>
           <div className='review-logo-name'> 
                <div className='review-logo'>
                    <img className='Company_logo' src={logo} alt='company logo' />
                </div>
                <div className='review-name'>
                    <h1 id='company_name'>{name}</h1>
                </div>
           </div>
           <div className='services-mission-vision'> 
                <div className='services'>
                    <ul className='services-ul'>
                        {mapServices}
                    </ul>
                </div>
                <div className='vision-mission'>
                    <div className='vision'>
                        <h3 className='vision-mision-h3'><u>Vision</u></h3>
                        <h4 className='vision-mision-h4'>{vision}</h4>
                    </div>
                    <div className='mission'>
                         <h3 className='vision-mision-h3'><u>Overview</u></h3>
                        <h4 className='vision-mision-h4' >{overview}</h4>
                    </div>
                </div>
           </div>
        </div>
    )
}