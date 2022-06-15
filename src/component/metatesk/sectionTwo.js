import React from 'react'
import img1 from './metaImg/image1.png';
import img2 from './metaImg/image2.png';
import img3 from './metaImg/image3.png';


const sectionTwo = () => {
  return (
    <article className='section-Two'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 ">
              <div className="metatesk-box " >
                <div className="img-div">
                  <img src={img1} alt="" />
                </div>
                <p>Anytime, Anywhere join the classes</p>
              </div>
            </div>
            
            <div className="col-md-4 ">
              <div className="metatesk-box " >
                <div className="img-div">
                  <img src={img2} alt="" />
                </div>
                
                <p>Interact
                    with other users 
                    in virtual world</p>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="metatesk-box " >
                <div className="img-div">
                  <img src={img3} alt="" />
                </div>
                <p>Entertain 
                  with gamified 
                  engaging classes </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionTwo