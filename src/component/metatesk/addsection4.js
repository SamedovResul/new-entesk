import React, {useState,useEffect} from 'react'
import VideoPlayer from "react-video-js-player";
import img1 from './metaImg/book.png';
import Video from './video';
import ScrollTriger from 'react-scroll-trigger'


const Addsection4 = () => {
  const [number, setNumber] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setNumber(true)
      
  //   }, 2000);
  //   console.log(VideoPlayer)
  // }, [number])
  // const play = (e) =>{
  //   console.log(e)
    
  // }

  useEffect(() => {
    setTimeout(() => {
      setNumber(true)
    }, 5000);
  }, [])
  

  const src = "https://res.cloudinary.com/dbgyytugh/video/upload/v1665658464/recipes/MetateskTrailer_14.49.50_hmrro3.mp4"
  return (
    <ScrollTriger onEnter={()=>  setNumber(true)} onExit={() => setNumber(false)} >
      <article className='add-section-four'>
        <div  className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h3> shifting <span> EDUCATION </span>  from  </h3>
                <div className="text-box">
                  <p> borign </p> <p> to </p> <p> exciting </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src={img1} alt="metatesk" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="video-box ">
                <VideoPlayer
                  src={src}
                  // autoplay={true}
                  controls={true}
                  className="video"   
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </ScrollTriger>

  )
}

export default Addsection4

