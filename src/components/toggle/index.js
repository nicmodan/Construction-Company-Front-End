import React, {useState, useImperativeHandle} from "react";
import './style.css'
import Input from "../input/input";
// import Button from '../button/button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Toggle = React.forwardRef( ({name, type, placeholde, services}, ref) =>{
    const [classCount, setClassCount] = useState(['item_0'])
    const [counts, setCounts] = useState(0)
    const [finalResult, setFinalResulte] = useState({
        item_0: '',
        item_1: '',
        item_2: '',
        item_3: '',
    })
    services(finalResult)

    const changeState =()=>{
        setFinalResulte({
            item_0: '',
            item_1: '',
            item_2: '',
            item_3: '',
        })
    }
    useImperativeHandle(ref, ()=>{
        return {
            changeState
        }
    })
    //props.countToggles(counts, newName)


    const handelDelete = (event) =>{
        event.preventDefault()

        // let count = counts-1
        
        // count = count < 0? count+1: count-1

        // const x = classCount.concat()
        // x.pop()
       
        // setCounts(count)
        // setClassCount(x)

        let count = counts-1

        count = count < -1? count+1: count

        const x = classCount.concat()
        x.pop()
       
        setCounts(count)
        setClassCount(x)

    //    console.log(classCount, counts, count)
    }

    const handelAdd = (event) =>{
        // event.preventDefault()
        // setCounts(counts+1)

        
        // let count = counts+1

        // let wrd = 'item_'+count
        // count = count >= 4? 4: setClassCount([...classCount, 'item_'+count])

        event.preventDefault()
        
        let count = counts+1
        let wrd = 'item_'+count

        if(count < 4){
            count = count
            setCounts(count)
            // setClassCount([...classCount, 'item_'+count])
            setClassCount([...classCount, wrd])


        }
        // count = count > 4? 4: count

        // count > 4 ? '': 

        // console.log(classCount, wrd)
    }   
    


    return (
        <div className='toggle'>
            <div className='childe-body'>
                <h3>{name}</h3>
               
                {classCount.map((cls, i)=>{
                    return (
                        <div key={`list_${i}`} className={`toggleChild ${cls}`}>
                            <div className='service-filed'>
                                {/* name={wrd.slice(-1)} */}
                                <Input 
                                    name={cls}
                                    type={type}
                                    placeholder={placeholde}
                                    value={finalResult[cls]}
                                    // handelChange={(e)=>setFinalResulte( Object.assign( finalResult, {[e.target.name]: e.target.value}) )}
                                    handelChange={(e)=>setFinalResulte( {...finalResult, [cls]: e.target.value} )}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='poition-botton'>
                <div className='delte'>
                    <button type='submit'
                    onClick={handelDelete}>
                        
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
                <div className='add'>
                    <button type='submit' //name='add' 
                    onClick={handelAdd} >
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </div>
            </div>
        </div>
    )
})

export default Toggle