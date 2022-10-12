import React from 'react'
import VideoPlayer from "react-video-js-player";
import img1 from './metaImg/beforeRaul.png';
const Addsection4 = () => {

  const src = "https://res.cloudinary.com/dbgyytugh/video/upload/v1665494740/recipes/video_pdww0u.mp4"
  return (
    <article className='add-section-four'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <p> boring </p> <p> with </p> <p> interesting </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={img1} alt="metatesk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box  ">
              <VideoPlayer 
                src={src} className="video"   
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