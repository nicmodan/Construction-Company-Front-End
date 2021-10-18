import React, {useState, useImperativeHandle} from 'react'
import './input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const RatingStar = React.forwardRef (({finalRattings, style, n}, ref) =>{
    const [count, setCount] = useState(n)
    const numbers = [1, 2, 3, 4, 5]
    finalRattings({
        resulte: count
    })

    const changeState = () =>{
        setCount(0)
    }

    useImperativeHandle(ref, ()=>{
        return{
            changeState
        }
    })

    const handleClick = (x) =>{
        setCount(x)
    }

    return(
        <div className='rating-body' style={style}>
            {
                numbers.map((num, i)=>{
                    return (
                        <a key={`list_${i}`} onClick={()=>handleClick(num)}>
                            <FontAwesomeIcon icon={faStar} color={count >= num?'gold':'papayawhip'}/>
                        </a>
                    )
                })
            }
           
        </div>
    )
})