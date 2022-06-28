import React,{useState,useRef} from 'react'
import VideoPlayer from "react-video-js-player";
import EnteskVidio from '../../video/Entesk.MOV';
import sectionImg from './metaImg/sectionOnebg.jpeg'
import {useSpring,animated} from 'react-spring';
import { useControls } from "leva";

const SectionOne = () => {
// 
  const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
  ];

  const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = useControls({
    mass: 1,
    tension: 170,
    friction: 30,
    // clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t
  });
  const props = useSpring({ xys, config });

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
              <animated.div style={imgAnimation} className='metatesk-img' ref={ref}>
                <animated.img 
                 src={sectionImg} alt="metatesk"
                 style={{ transform: props.xys.to(trans) }}
                 onMouseLeave={() => set([0, 0, 1])}
                 onMouseMove={(e) => {
                  const rect = ref.current.getBoundingClientRect();
                  set(calc(e.clientX, e.clientY, rect));
                }}
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