import React, {useState, useEffect} from "react";
import './style.css'
import { RatingStar } from "../../../../input/rattingStar";
import projects from "../../../../../services/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan, faTimes} from "@fortawesome/free-solid-svg-icons";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const ProjectsReview = ({allBool}) =>{
    //remember to change this to false for loading 
    const [loading, setLoading] = useState(false)

    const [location, setLocation] = useState([])
    const [information, setInformation] = useState([])
    const [ratings, setRating] = useState([])

    const [productImg, setProductImg] =  useState([ [''] ])

    const [booleanClassPreview, setBooleanClassPreview] = useState(true)
    const [previewIndex, setPreviewIndex] = useState(0)
    const [valIndex, setValIndex] = useState(0)
    
   
    let countRatings = 0
    const user = JSON.parse( window.localStorage.getItem('userInfoAndToken') )

    const rattingStyle = {
        width: '100%',
        height: '100%',
        bottom: '0',
        background: 'none',
    }
    const preRattingStyle = {
        width: '30%',
        height: '72%',
        bottom: '5px',
        margin: '0 0 0 10px',
        background: 'none',
    }
   
   
   
    const storeIndexs = (n)=>{
        // console.log(n)
        setPreviewIndex(n)
        setValIndex(n)
        setBooleanClassPreview(false)
    }
   
    const previews = (n)=>{
        const maxIndex = location.length
        let calPreview = valIndex + n
        // console.log(valIndex, n, calPreview)

        // calPreview = ?0: 
        if(calPreview > maxIndex-1) calPreview = 0
        else if(calPreview < 0) calPreview = maxIndex-1
        // else calPreview += n

        setPreviewIndex(calPreview)
        setValIndex(calPreview)
        // console.log(calPreview)
    }
    

    useEffect(()=>{

        const fetchData = async () =>{
            // const imgPath= "../../../../../../../backend"
            let projectResponse = allBool ? await projects.review(): await projects.reviewId(user.id)
            setLoading(!projectResponse?false:true)
            // console.log(projectResponse)
            
            const arrayBufferToBase64 = (buffer)=> {
                var binary = '';
                var bytes = [].slice.call(new Uint8Array(buffer));
                bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
            }

            const locations = []
            const informations = []
            const rattings = []
            const StoreMainUrls = []

            projectResponse.map(objData=>{
                // console.log(objData)
                locations.push(objData['location'])
                informations.push(objData['information'])
                rattings.push(objData['ratings'])

                const storeUrl = []
                const imgList = objData['images']

                for(let i = 0; i<imgList.length; i++){

                    const contentType = `data:${imgList[i].contentType};base64,`
                    const bufferImagebase64 = arrayBufferToBase64(imgList[i].data.data)
                    storeUrl.push(contentType+bufferImagebase64)

                    // const path = imgList[i].path

                    // storeUrl.push(path)
                }
                
                StoreMainUrls.push(storeUrl)
                // StoreMainUrls.push(objData['images'].path)
            })

        setLocation(locations)
        setInformation(informations)
        setRating(rattings)
        // console.log(StoreMainUrls[1])
        setProductImg(!StoreMainUrls[0] ?[ [''] ]:StoreMainUrls)


        }
        fetchData()

    }, [])


    const mapProduct =   productImg.map((loc, i)=>{
       
        return (
        // <  {className='body-projects'*/}>
            
                <div key={`list_${i}`} className={!booleanClassPreview?'hideClass':'prj'}>
                    <div
                     className={loading?'prj-img-info prj-img':'prj-img-info prj-img loading'}>
                        {/* {console.log(productImg[i][0])} */}
                        <img src={loc[0]} alt='images of products'/>
                    </div>
                    <div className='prj-img-info prj-info' onClick={()=>storeIndexs(i)}>
                        <div className={loading?'prj-location':'prj-location loading'}>
                            <h4>
                                {location[i]}
                            </h4>
                        </div>
                        <div className={loading?'prj-discription':'prj-discription loading'}>
                            <p>
                                {information[i]}
                            </p>
                        </div>
                        <div className={loading?'prj-ratings-price':'prj-ratings-price loading'}>
                            <div className='prj-price'></div>
                            <div className='prj-ratings'>
                                <RatingStar finalRattings={(resulte)=>countRatings = resulte}
                                            number={ratings[i]}
                                            style={rattingStyle} />
                            </div>
                        </div>
                    </div>
                </div>
           
        )
    })
    const mapSlideShowImg = productImg[previewIndex].map((img, i)=>{
                                return (
                                    <div key={`key_${i}`} className='prj-pre-img-contain'>
                                        <img src={img} alt='products slide images' />
                                    </div>
                                )
                            })
    
    // const slideshow =   

    return(
        <div className='project-body'>   
            <div className='project-contain'>
                <div className='prj-contin-body'>
                    {
                    mapProduct
                    }
                </div>
                <div className={booleanClassPreview?'hideClass':'project-preview-body'}>
                    {/* <div className='project-preview-button'> */}
                        
                       
                    {/* </div> */}
                    <span onClick={()=>setBooleanClassPreview(true)}
                        className='preview-end'>
                            <FontAwesomeIcon icon = {faTimes}/>
                    </span>
                    <span onClick={()=>previews(-1)}
                        className='preview-button-lesser pre-butt'>
                            <FontAwesomeIcon icon = {faLessThan}/>
                    </span>
                    <div className= 'project-preview'>
                        <div className='projects-preview-img'>
                            <div className='project-preview-img-main-contina'>
                                <Slide>
                                    {mapSlideShowImg}
                                </Slide>
                            </div>
                        </div>
                        <div className='projects-preview-info'>
                            <div className='prj-ratts'>
                                <RatingStar finalRattings={(resulte)=> countRatings = resulte} 
                                            number={ratings[previewIndex]}
                                            style={preRattingStyle} />
                            </div>
                            <div className='prj-location'>
                                <h4>
                                    {location[previewIndex]}
                                </h4>
                            </div>
                            <div className='prj-discription'>
                                <p>
                                    {information[previewIndex]}
                                </p>
                            </div>
                        </div>
                    </div>
                     <span onClick={()=>previews(1)}
                        className='preview-button-greeter pre-butt'>
                        <FontAwesomeIcon icon = {faGreaterThan}/>
                    </span>
                </div>
               
            </div> 
        </div>
    )
}
export default ProjectsReview