import React from 'react'
import VideoPlayer from "react-video-js-player";
import EnteskVidio from '../../video/Entesk.MOV'
const sectionOne = () => {
  return (
    <article className='metatesk-info'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 metatesk-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Molestiae consequuntur exercitationem voluptas tempora nesciunt sint eaque. Libero, nisi!</p>
            </div>
            <div className="col-md-6 ">
              <div className="metatesk-video " >
                <VideoPlayer src={EnteskVidio} className="video" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionOne