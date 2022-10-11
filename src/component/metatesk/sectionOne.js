import React,{useState,useRef} from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'
import {useSpring,animated} from 'react-spring';
import VideoPlayer from "react-video-js-player"
import video from './video/video.mp4'

const SectionOne = () => {
// use spring 

  const imgAnimation = useSpring({
		to: [{opacity: 1 }],
		from: {opacity: 0  },
    config: {
      duration: 2000
    }
	})

  const TextAnimation = useSpring({
		to: [{opacity: 1 }],
		from: {opacity: 0 },
    config: {
      duration: 2000
    }
	})


  return (
    <article className='metatesk-info section-one'>
      {/* <div className='png' ></div> */}
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <animated.div style={TextAnimation} className='metatesk-text' >
                <p> <span>EDUCATION</span>  <br /> <span>in</span> <br /> <span>METAVERSE</span> </p>  
              </animated.div>
            </div>
            <div className="col-md-6 ">
              <animated.div  className='metatesk-img' >
              <div className="video-box text-box">
              <VideoPlayer 
                src={video} className="video"   
              />
              </div>
              </animated.div>
            </div>

          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionOne