import React from 'react'
import VideoPlayer from "react-video-js-player";
import EnteskVidio from '../../video/Entesk.MOV';
import sectionImg from './metaImg/sectionOnebg.jpeg'

const sectionOne = () => {
  return (
    <article className='metatesk-info section-one'>
      {/* <div className='png' ></div> */}
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <div className='metatesk-text' >
                <p>A virtual venue which provides educators and  learners with equipped classrooms. </p>  
              </div>
            </div>
            <div className="col-md-6 ">
              <div className='metatesk-img'>
                <img src={sectionImg} alt="metatesk" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionOne