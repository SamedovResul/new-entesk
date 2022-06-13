import React from 'react'
import VideoPlayer from "react-video-js-player";
import EnteskVidio from '../../video/Entesk.MOV';
import img1 from './metaImg/image1.png';
import img2 from './metaImg/image2.png';
import img3 from './metaImg/image3.png';


const sectionOne = () => {
  return (
    <article className='metatesk-info section-one'>
      {/* <div className='png' ></div> */}
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 metatesk-text">
              <p>A virtual venue which provides educators and  learners with equipped classrooms. </p>
            </div>
            <div className="col-md-4 ">
              <div className="metatesk-box " >
                <div className="img-div">
                  <img src={img1} alt="" />
                </div>
                <p>Anytime, Anywhere join the classes</p>
              </div>
            </div>
            
            <div className="col-md-4 ">
              <div className="metatesk-box " >
                <div className="img-div">
                  <img src={img2} alt="" />
                </div>
                
                <p>Interact
                    with other users 
                    in virtual world</p>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="metatesk-box " >
                <div className="img-div">
                  <img src={img3} alt="" />
                </div>
                <p>Entertain 
                  with gamified 
                  engaging classes </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionOne