import React from 'react'
import VideoPlayer from "react-video-js-player";
import img1 from './metaImg/beforeRaul.png';
const Addsection4 = () => {
  return (
    <article className='add-section-four'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3> REPLACING </h3>
              <div className="text-box">
                <p> borign </p> <p> with </p> <p> exciting </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={img1} alt="metatesk" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box ">
              <iframe width="420" height="280" src="https://www.youtube.com/embed/JZz6mcw3y0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <VideoPlayer 
                src={video} className="video"   
              /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Addsection4