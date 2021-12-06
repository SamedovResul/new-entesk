import React from 'react';
import poster from '../../images/guneshsistemi.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import video from "../../video/EnteskVideo.mp4"
import { Link } from 'react-router-dom';


const  SectionOne = (props) =>{

  const {Description, areas } = props.data[0]
  // console.log(props.data)

  const videoSrc = video;
  return(

    
  <article className="position section-one">
    <div   className="container bigScreenContainer">
      <div className="container-fluid">
        <div className="row" >
          <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
            <div className='png' ></div>
             <p>{Description}</p>
             <ul>
              {
                areas.map((areas, index) =>{
                  const { area } = areas

                  return(
                    <li key={index} >
                      {
                        area
                      }
                    </li>
                  )
                })
              }
             </ul>
            {/* <button className="section-1-button" >Davami</button> */}

            <Link to={{
                pathname:'/products',
              }}>
              <button className="section-1-button">
                Ətraflı
              </button>
            </Link>
          </div>
          <div  className="text-box col-md-6 col-sm-12 col-12">
            <VideoPlayer 
            src={videoSrc} poster={poster} className="video"   
            />
          </div>
        </div>
      </div> 
    </div> 

    <div className='smallScreen'  >
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 section-1-for-mobile" >
              <p>{Description}</p>
                <VideoPlayer 
                  src={videoSrc} poster={poster} className="video"   
                />
               <ul>
              {
                areas.map((areas, index) =>{
                  const { area } = areas

                  return(
                    <li key={index} >
                      {
                        area
                      }
                    </li>
                  )
                })
              }
             </ul>
            <Link to={{
                pathname:'/products',
              }}>
              <button className="button">
                Ətraflı
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </article>  
  )
}

export default SectionOne