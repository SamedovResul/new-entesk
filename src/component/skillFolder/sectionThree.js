import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import MediaQuery from 'react-responsive'
import poster from '../../images/guneshsistemi.png';
import { Link} from 'react-router-dom'

const SectionThree = ({data,myRef,blog}) =>{
  const { id,  Course} = data
  // console.log(id)
  return(
    <article className="section-3-main-div  ">
      
      <div key={id} className="container bigScreenContainer skill">
        <div className="container-fluid">
          <div className="row  area" >
            
          {
              Course.map((subject, index)=>{
                const {
                  class_description,
                  class_text,
                  class_image,
                  classLink
                } = subject

                return(
                  <div key={index} className='d-flex'>

                    <div ref={myRef} className="img-box col-md-6 col-sm-12 col-12">
                      <img src={class_image} alt='img' ></img>
                    </div>

                    <div  className="text-box col-md-6 col-sm-12 col-xs-12"  >
                      <div className='png' ></div>
                      <h2>{class_description}</h2>
                      <p>{class_text}</p>

                      
                            <Link to={{pathname:`/CourseSkill/${classLink}`, }}  >
                              <button className="section-3-button">Davamı</button>
                            </Link>
                          
                      
                    </div>

                  </div>
                )
              })
            }

          </div>
        </div> 
      </div>

      <MediaQuery maxDeviceWidth={767}  >
        <div className="container ">
          <div className="container-fluid">
            <div className="row ">
              {
                Course.map((subject, index)=>{
                  const {
                    class_description,
                    class_text,
                    class_image,
                    classLink
                  } = subject
                  return(
                    <div key={index} className="col-md-12 col-sm-12 section-3-for-mobile skill" ref={myRef} >
                
                      <h2>{class_description}</h2>
                      <img src={class_image} alt='img' ></img>
                      <p>{class_text}</p>
                      <Link to={{pathname:`/CourseSkill/${classLink}`, }}  >
                        <button className="section-3-button">Davamı</button>
                      </Link>

                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </MediaQuery>


      
    </article>
  )
}

export default SectionThree