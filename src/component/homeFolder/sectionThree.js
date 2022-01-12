import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaQuery from 'react-responsive'
import poster from '../../images/guneshsistemi.png';
import { Link } from 'react-router-dom';

const SectionThree = ({data,blog}) =>{
  const {text,img,description } = data[0]
  const {name} = blog[0]

  
  return(
    <article className="section-3-main-div home-folder">
      
      <div className="container bigScreenContainer">
        <div className="container-fluid">
          <div className="row" >


            <div  className="img-box col-md-6 col-sm-12 col-12">
              <img src={img} alt="" />
            </div>

            <div  className="text-box col-md-6 col-sm-12 col-xs-12" >
              <div className='png' ></div>
              <h2>{description}</h2>
              <p>{text}</p>
              
                <Link to={{
                      pathname:`/blog/${name}`,
                    }}>
                    <button className="yellow-button-big custom-margin">
                      Davamı
                    </button>
                </Link>
              

            </div>

          </div>
        </div> 
      </div>

      <MediaQuery maxDeviceWidth={767}  >
        <div className="container section-3-for-mobile">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 " >
                
                
                <div  className="img-box col-md-6 col-sm-12 col-12">
                  <img src={img} alt="" />
                </div>
                
                <h2>{description}</h2>
                <p>{text}</p>
                <Link to={{
                      pathname:`/blog/${name}`,
                    }}>
                    <button className="section-3-button">
                      Ətraflı
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>


      
    </article>
  )
}

export default SectionThree