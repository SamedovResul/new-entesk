import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link} from 'react-router-dom';

const SectionTwo = (props)=>{
  const Course = props.data



  const settings = {
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      pauseOnHover: true,
      autoplaySpeed: 4000,
      dots: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "180px",
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "120px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "50px",
          }
        }
      ]

  };

  return(
    <article className="section-2">
      <Slider {...settings}>
        {Course.map((subject) =>{
          // subject ? console.log(true) : console.log(false)
          
          const {name,id,Category,slide_text,image} = subject
          return(
          <div key={id} className="caruseldiv">
            <div className="top-div">
              <img  src={image} alt="img" ></img>
            </div>
            <div className="bottom-div">
              <p>{slide_text}</p>
              <Link 
                to={{pathname:`${Category}/${name}`,
                  aboutProps:{
                    name: name,
                  }
                  }} >
                <button
                 > Davamı </button>
              </Link>
              
            </div>
          </div>
          )
        })
        }
      </Slider>
    </article>
    
  )
}

export default SectionTwo