import React, {useState, useEffect, useImperativeHandle} from "react";
import './input.css'
import Input from "./input";
import Button from "../button/button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

const ImageFile = React.forwardRef ( ({name, imagesResulte, alt},  ref) =>{
    const [countImages, setCountImages] = useState([])
    const [url, setUrl] = useState('')
    const [updateUrl, setUpdateUrl] = useState(null)

    imagesResulte(updateUrl)
    // console.log(updateUrl)
    const changeState = () =>{
        setUpdateUrl(null)
        setUrl('')
        setCountImages([])
    }
    
    useImperativeHandle(ref, ()=>{
        return {
            changeState
        }
    })

    const handelChange = ({ target }) =>{

        const storeList = []
        for(let i = 0; i<target.files.length; i++){
            storeList.push(`display-img-box ${i}`)
        }

        setCountImages(storeList)
       // console.log(storeList)
        setUpdateUrl(target.files)
        setUrl(URL.createObjectURL(target.files[0]))
    }
    const countAndDisplay = () =>{
        return countImages.map((count, i)=>{
            return (
                <a className={ count } key={`list_${i}`}
                   onClick={()=>setUrl( URL.createObjectURL(updateUrl[i]) )} key={`list_${i}`}>
                    {/* setUrl( URL.createObjectURL(updateUrl[i]) )}> */}
                    <></>
                </a>
            )
        })
    }

    return(
        <div className='image-body'>

            <div className='contain-imgfile'>
                 <div className='showImg'>
                     <img src={url} alt={alt} />
                </div>
                <div className='count-img-file'>
                    <Input type='file' 
                           name={name ||'image'}
                        //    value={updateUrl[0]}
                           handelChange={handelChange} />
                    {/* <div className='container__icon'>
                        <FontAwesomeIcon icon={faFileUpload} />
                    </div> */}
                </div>
            </div>

            <div className={url === ''? 'hideClass': 'countImg'}>
                {countAndDisplay()}
            </div>
        </div>
    )
})

export default ImageFile