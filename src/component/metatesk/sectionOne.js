import React,{useState,useRef} from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'
import {useSpring,animated} from 'react-spring';

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
                <p>A virtual venue which provides educators and  learners with equipped classrooms. </p>  
              </animated.div>
            </div>
            <div className="col-md-6 ">
              <animated.div  className='metatesk-img' >
                <img 
                 src={sectionImg} alt="metatesk"
                 />
              </animated.div>
            </div>

          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionOne