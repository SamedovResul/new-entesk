import React from 'react'
import VideoPlayer from "react-video-js-player";
import video from './video/video.mp4'
import img1 from './metaImg/Img3.png';
const Addsection4 = () => {
  return (
    <article className='add-section-four'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h3> <span> metatesk </span> <br />
                    <span> is making the learning process </span> <br />
                    <span> engaging, entertaining, exciting </span> </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={img1} alt="metatesk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box text-box">
              <VideoPlayer 
                src={video} className="video"   
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Addsection4