import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import VideoPlayer from "react-video-js-player";
import MediaQuery from 'react-responsive'
import { Link} from 'react-router-dom'

const SectionThree = ({data,myRef,blog}) =>{
  const { id,  Description_2,  text_2, scineceBlog, image_2} = data
  // console.log(id)
  return(
    <article className="section-3-main-div home-folder">
      
      <div key={id} className="container bigScreenContainer environment ">
        <div className="container-fluid">
          <div className="row" >

            <div  className="img-box col-md-6 col-sm-12 col-12" ref={myRef}>
              <img src={image_2} alt='img' ></img>
            </div>

            <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
              <div className='png' ></div>
              <h2>{Description_2}</h2>
              <p>{text_2}</p>
              {
                blog.map((blog,index) =>{
    
                const {name} = blog
                if(name === scineceBlog){
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
              <div className="col-md-12 col-sm-12 section-3-for-mobile environment"  ref={myRef}>
                
                
                  <img src={image_2} alt='img' ></img>
                
                
                <p>{text_2}</p>
              {
                blog.map((blog,index) =>{
    
                const {name} = blog
                if(name === scineceBlog){
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