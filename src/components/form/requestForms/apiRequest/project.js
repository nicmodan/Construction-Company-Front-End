import React, {useState, useRef} from "react";
import './style.css'
import ImageFile from "../../../input/imagefile";
import { RatingStar } from "../../../input/rattingStar";
import TextArea from "../../../input/textarea";
import Input from "../../../input/input";
import Button from '../../../button/button'
import Notifiation from "../../../notification/notification";
import projects from "../../../../services/projects";
import ProjectsReview from "./projects/review";

const ProjectsForm = ({inputtype}) =>{
    const [location, setLocation] = useState('')
    // const [sold, setSold] = useState(Boolean)   /// BY DEFULT WHEN CREATING THIS SHOULD AWAYAS BE TURE
    const [discription, setDiscription] = useState('')
    // const ratting = {}
    let ratting = 0
    
    const projectObjectImg = {}

    const [message, setMessage] = useState(null)
    const [styleMessage, setStyleMessage] = useState({})

    const toggleShowImageRef = useRef()
    const toggleResetRattings = useRef()

    const examplediscription = 'Please stats the feature of this appartment'

    const showImg =  <ImageFile imagesResulte={(obj)=>{ 
                                    Object.assign(projectObjectImg, obj)
                                    // console.log(obj)
                                } } 

                            alt='please set multiple image for your profile'  
                            ref={toggleShowImageRef} />
    

    const handelSubmit = async(event) =>{
       
        // console.log('ewewe')
        event.preventDefault()
        const user = JSON.parse(window.localStorage.getItem('userInfoAndToken'))
        projects.setToken(user.token)

        const formData = new FormData()
        const objectvalues = {
            location,
            information: discription,
            ratings: ratting,

        }
        

        for(const key of Object.keys(projectObjectImg)){
            formData.append('image', projectObjectImg[key])
            // console.log(key)
        }
        console.log(formData)
        // console.log(objectvalues)
        try{
            await projects.create(objectvalues)
            await projects.createPrjImg(formData)

            setLocation('')
            setDiscription('')
            toggleShowImageRef.current.changeState()
            toggleResetRattings.current.changeState()

            setMessage('congratulations you just posted yoye projects')
            setStyleMessage({color: 'green'})

            setInterval(()=>{

                setMessage(null)
                setStyleMessage({color: 'brown'})

            }, 5000)

            

        }catch(exception){
            setMessage('please set Proper Project Info')
            setInterval(()=>{
                setMessage(null)
            }, 5000)
        }
        
    }


    const review = ()=>{
        return(
            <div className='review-body'>
                <ProjectsReview />
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
                                <div className='contain-input-name contain-rating-score'>
                                    <RatingStar finalRattings={({resulte})=> ratting = resulte} ref={toggleResetRattings} />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='discription-location'>
                            <p 
                                style={{margin: '0 0 0 10px'}}>
                                    <strong>{'Appartment Discription & Location'}</strong> 
                            </p>
                            <div className='discription'>
                                <div className='textare-overview'>
                                    <TextArea rows='4' cols='58' name='discription' placeholder={examplediscription}
                                        valuse={discription} handelChange={({ target })=>setDiscription(target.value)} />
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
                        <div className='notification-resulte'>
                            <Notifiation message={message} style={styleMessage} />
                        </div>
                        <div className='button-station'>
                            <Button type='submit'
                                    // handleClick={(e)=>e.preventDefault} 
                                    name='submit' />
                         </div> 

                    {/* lets create projects */}
                </form>
            </div>
        )
    }
    const replace = ()=>{
        return(
            <div className='replace-body'>
                <div>
                    lets replace projects
                </div>
            </div>
        )
    }

    const remove = ()=>{
        return(
            <div className='remove-body'>
                <div>
                    lets remove projects
                </div>
            </div>
        )
    }

    const objectRender = {
        review: review(),
        create: create(),
        replace: replace(),
        remove: remove()
    }

    return objectRender[inputtype]
}

export default ProjectsForm