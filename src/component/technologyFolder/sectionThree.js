import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import MediaQuery from 'react-responsive'
import video from "../../video/video1.mp4";
import poster from '../../images/guneshsistemi.png';
import { Link} from 'react-router-dom'


const SectionThree = ({data,myRef,blog}) =>{
  

  const { id,  Description_2, Video, text_2, technologyBlog, image_2 } = data

  


  // console.log(myRef.current.offsetTop)
  const videoSrc = video;
  return(
    <article className="section-3-main-div home-folder " >
      
      <div key={id} className="container bigScreenContainer technology" >
        <div className="container-fluid">
          <div className="row" >
            <div ref={myRef} className="img-box col-md-6 col-sm-12 col-12">
              <img src={image_2} alt='img' ></img>
            </div>

            <div  className="text-box col-md-6 col-sm-12 col-xs-12"  >
              <div className='png' ></div>
              <h2>{Description_2}</h2>
              <p>{text_2}</p>

              {
                blog.map((blog,index) =>{
    
                const {name} = blog
                if(name === technologyBlog){
                  return(
                    <Link to={{pathname:`/blog/${name}`, }} key={index} >
                      <button className="section-3-button">Davami</button>
                    </Link>
                  )
                  }
                })
              }
              
            </div>

          </div>
        </div> 
      </div>

      <MediaQuery maxDeviceWidth={780}  >
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 section-3-for-mobile technology" ref={myRef} >
                
                
                  <img src={image_2} alt='img' ></img>
                
                
                <p>Hey dostlar, salam! Bu gün müxtəlif peşələr haqqında maraqlı bir kitab oxudum. 
                Sən demə, həkim, müəllim, polis, yanğınsöndürən kimi fərqli peşə növləri var. 
                Öyrəndim ki,  
                  
              </p>

                {
                  blog.map((blog,index) =>{
      
                  const {name} = blog
                  console.log(technologyBlog)
                  if(name === technologyBlog){
                    
                    return(
                      <Link to={{pathname:`/blog/${name}`, }} key={index} >
                        <button className="section-3-button">Davami</button>
                      </Link>
                    )
                    }
                  })
                }

              
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>


      
    </article>
  )
}

export default SectionThree