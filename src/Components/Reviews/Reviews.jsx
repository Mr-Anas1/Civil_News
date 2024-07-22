import React from 'react'
import './Reviews.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reviews from '../../Helpers/Review';
import GenerateStars from '../UI/GenerateStars';



const Reviews = () => {

    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        
      };

  return (
    <div className='reviews'>
        <h1>Reviews</h1>
        <div className="review-container">
            <Slider {...settings}>
                {reviews.map((value, index)=> (
                    <div className="review-content">
                        <div className="stars">{GenerateStars(value.stars)}</div>
                        <div className="description">{value.review}</div>

                        <div className="profile">
                            <img src={value.image} alt="img" />
                            <div className="profile-details">
                                <div className="name">{value.name}</div>
                                <div className="profession">{value.profession}</div>
                            </div>
                        </div>
                        
                    </div>
                
                ))}
            </Slider>  
        </div>
    </div>
  )
}

export default Reviews