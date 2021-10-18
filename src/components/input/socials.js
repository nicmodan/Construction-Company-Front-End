import React, {useState, useImperativeHandle} from "react";
// import Input from "./input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Social = React.forwardRef( ({finalValues}, ref) =>{
    const [classCount, setClassCount] = useState(['social_0'])
    const [counts, setCounts] = useState(0)
    const [social, setSocial] = useState({
        facebook: '',
        twitter: '',
        whatsapp: '',
        github: ''
    })
    const socialObject = {
        social_0: ['facebook', faFacebook, {background: '#4267B2'}],
        social_1: ['twitter', faTwitter, {background: '#1DA1F2'}],
        social_2: ['whatsapp', faWhatsapp, {background: '#25D366'}],
        social_3: ['gitHub', faGithub, {background: '#4078c0'}]
    }

    finalValues(social)

    const changeState = () =>{

        console.log('am workking!!!!')
        setSocial({
            facebook: '',
            twitter: '',
            whatsapp: '',
            github: ''
        })
    }
    useImperativeHandle(ref, ()=>{
        return{ 
            changeState
        }
    })

    const handelDelete = (event) =>{
        event.preventDefault()

        let count = counts-1

        count = count < -1? count+1: count

        const x = classCount.concat()
        x.pop()
       
        setCounts(count)
        setClassCount(x)

    //    console.log(classCount, counts, count)
    }

    const handelAdd = (event) =>{
        event.preventDefault()
        
        let count = counts+1
        let wrd = 'social_'+count

        if(count < 4){
            count = count
            setCounts(count)
            // setClassCount([...classCount, 'social_'+count])
            setClassCount([...classCount, wrd])


        }

        // console.log(classCount, wrd)
    }   

    return(
        <div className="social-body">
            {/* mapping will be positioned here */}
            {
                classCount.map((val, i)=>{
                    return (
                            <div key={`key_${i}`} className='position-social'>
                                <div className='set-socials'> 
                                    <div className='icon' htmlFor='faceBook' style={socialObject[val][2]}>
                                        <FontAwesomeIcon icon={socialObject[val][1]} />
                                    </div>
                                    <input className='input-field' name={socialObject[val][0]}
                                        type='text' placeholder='social handel' 
                                        value={social[val[0]]} onChange={({target})=>setSocial( {...social, [target.name]: target.value} ) }/>
                                </div>            
                            </div>
                    )
                })
            }
            
            
            {/* THIS DIV OF CLASS NAME WAS GOTTEN FROM THE TOGGLE FOLDER position-botton */}
            <div className='poition-botton'>
                <div className='add'>
                    <button type='submit' //name='add' 
                    onClick={handelAdd} >
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </div>
                <div className='delte'>
                    <button type='submit'
                    onClick={handelDelete}>    
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
             {/* THIS DIV OF CLASS NAME WAS GOTTEN FROM THE TOGGLE FOLDER position-botton */}
        </div>
    )
})