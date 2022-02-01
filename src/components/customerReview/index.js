import React, {useState} from 'react'
import './style.css'
import portrateOne from '../../preserve/001.jpg'
import portrateTwo from '../../preserve/002.jpg'
import portrateThree from '../../preserve/003.jpg'
import portrateFour from '../../preserve/004.jpg'
import { RatingStar } from '../input/rattingStar'


const CustomerReview = () =>{
    let result = 0
    const objReviews = {
        profile: [portrateOne, portrateTwo, portrateThree, portrateFour],
        discription: [
            "It is a distinct pleasure for me to recommend Thrive Internet Marketing to any and all interested parties. They have been professional, comprehensive and competent throughout the process of our working together. We feel that we have established a relationship with them for years to come. The reaction to our new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC.” The same can be said for our view of Thrive’s work for us.",
            "Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to Thrive for all of your hard work and support!",
            "With Thrive’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!",
            "I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some! We have had nothing but rave comments about the site from those who are closest to it and rely on it the most. I personally want to thank you and your staff for their patience and diligence in promptly meeting each of our requests for the site during its development."
        ],
        reviewRatings: [4,4,5,2,4],
        location: ['Lagos, Nigeria', 'Acra Gahna', 'Captown SouthAfrica', 'Mariland Cannada'],
        names: ['David King', 'Sam Logo', 'Rock Stone', 'Marryam david']
    }
    const ratingStyle = {
        bottom: '0px',
        right: '5px',
        background: 'none',

    }
    const mapReviews = objReviews['profile'].map((keys, i)=>{
        return(
            <div key={`list_${i}`} className='customer-review-body'>
                <div className='cutomer-review-img'>
                    <img src={keys} alt='profile image of review'/>
                </div>
                <div className='cutomer-review-name'>
                    <h4>{objReviews['names'][i]}</h4>
                </div>
                <div className='cutomer-review-location'>
                    <h4>{objReviews['location'][i]}</h4>
                </div>
                <div className='cutomer-review-description'>
                    <p>{objReviews['discription'][i]}</p>
                </div>
                <div className='review-ratings'>
                    <RatingStar finalRattings={(reulte)=> result = reulte} 
                                number={objReviews['reviewRatings'][i]} 
                                style={ratingStyle} />
                </div>
            </div>
        )
    })

    return(
        <div className='contain-cutomer-review'>
            <div className='contain-customer-review-body'>
                {mapReviews}
            </div>
        </div>
    )
}
export default CustomerReview