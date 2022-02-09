import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import 'bootstrap/dist/css/bootstrap.min.css';


const SectionOne = ({GalleryData}) => {
  return (
    <SRLWrapper>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            {
              GalleryData.map((img, index) =>{
                const {image} = img
                return(
                <div key={index} className="col-md-4 certificate-div">
                  <div className=" " >
                    <img className="responsive" src={image} alt="..."></img>
                  </div>
                </div>
                )
                
              })
            }
          </div>
        </div>
      </div>
    </SRLWrapper>
  )
}

export default SectionOne