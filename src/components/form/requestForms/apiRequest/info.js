import React, { useState, useEffect, useRef} from "react";
import './style.css'
import Input from "../../../input/input";
import ImageFile from "../../../input/imagefile";
import TextArea from "../../../input/textarea";
import ToggleInputs from "../../../input/togglInput";
import Button from '../../../button/button'
import { InfoReview } from "./info/review";
import infoSerives from "../../../../services/info"
// import {setToken, create, uploadLogo} from "../../../../services/info"
import Notifiation from "../../../notification/notification"

const InfoForm = ({inputtype}) =>{

    const [name, setName] = useState('')
    const [vision, setVision] = useState('')
    const [overview, setoverview] = useState('')
    

    const toggleShowImageRef = useRef()
    const toggleServicesRef = useRef()

    const [users, setUsers] = useState(null)
    const [meassage, setMessage] = useState('')
    const [styleMessage, setStyleMessage] = useState({})
    
    // console.log(logoObj)

    useEffect(()=>{
        const user = JSON.parse(window.localStorage.getItem('userInfoAndToken'))
        setUsers(user)
    }, [])

    const logoObj = {}
    const service = {}

    const showLogo =  <ImageFile name={'logo'} imagesResulte={(obj)=> Object.assign(logoObj, obj) } 
                                 alt='please a single image for your company logo' 
                                 ref={toggleShowImageRef} />

    const showServices = <ToggleInputs name={"service's".toUpperCase()}
                                        //   condition={condition}
                                        placeholde='Services Required' type='text'
                                        services={(resulte)=> Object.assign(service, resulte) }
                                        preRef={toggleServicesRef}
                                        />

    const handelSubmite = async (event) =>{
        event.preventDefault() 
        // setCondition(true)

        const objectvaluse = {
            name,
            vision,
            overview,
            service
        }

        
        // const objectImg = {
        //     logo: logoObj
        // }

        const formdata = new FormData()
        infoSerives.setToken(users.token)
        // setToken(users.token)
        // console.log(objectImg, objectvaluse, users)
        for (const key of Object.keys(logoObj)){
            formdata.append('logo', logoObj[key])
        }

        try{

            
            // infoSerives.loger(logoObj)
            const resData = await infoSerives.create(objectvaluse)
            const resLogo = await infoSerives.uploadLogo(formdata)

            setName('')
            setVision('')
            setoverview('')

            toggleShowImageRef.current.changeState()
            toggleServicesRef.current.changeState()

            // console.log(resData, resLogo)
            setMessage('Congratulationse you have succefuly renderd to the data base')
            setStyleMessage({color: 'green'})

            setInterval(()=>{
                setMessage(null)
                setStyleMessage({color: 'brown'})
            }, 5000)
            

        }catch(exception){
            setMessage('please file the appropriate form  correctly')
            setInterval(()=>{
                setMessage(null)
            }, 5000)

        }

    }

    const review = ()=>{
        return(
            <div className='review-body'>
                <InfoReview />
                {/* <div>lets review informations</div> */}
            </div>
        )
    }
    const create = ()=>{
        return(
            <div className='create-body'>
                <form onSubmit={handelSubmite}>
                    <div className='api-form'>
                        <div className='img-contain'>
                            <div className='contain-imgFile'>
                               {showLogo}
                            </div>
                            <div className='contain-input-name'>
                                <Input name='name' type='text' placeholder='please set company name' 
                                        value={name} handelChange={({ target })=>setName(target.value) } />
                            </div>
                        </div>
                        <hr />
                        <div className='textarea-contain'>
                            <div className='textare-overview'>
                                <TextArea name='overview' placeholder='What are you overview about the company '
                                    valuse={overview} handelChange={({ target })=>setoverview(target.value)} />
                             </div>   
                             <div className='textare-vision'>
                                <TextArea name='vison' placeholder='What is the Vision of this company' 
                                    valuse={vision} handelChange={({ target })=> setVision(target.value)} />
                             </div>
                        </div>
                        <hr />
                        <div className='service-contain'>
                            {showServices}
                        </div>
                    </div>
                    <div className='notification-resulte'>
                        <Notifiation message={meassage} style={styleMessage} />
                    </div>
                    <div className='button-station'>
                        <Button type='submite'
                                // handleClick={(e)=>e.preventDefault} 
                                name='submite' />
                    </div> 
                    {/* lets create informations */}
                </form>
            </div>
        )
    }
    const replace = ()=>{
        return(
            <div className='replace-body'>
                <div>
                    lets replace informations
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

export default InfoForm