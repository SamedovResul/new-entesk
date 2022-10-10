import React from 'react'
import img1 from './metaImg/beforeRaul.png';
import img2 from './metaImg/chinaGirl.png'

const Addsection1 = () => {
  return (
    <article className='add-section-one'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h3> metatesk <br />
                    is making the learning process <br />
                    engaging, entertaining, exciting  </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={img1} alt="metatesk" />
                <p> Before </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={img2} alt="metatesk" />
                <p> After </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Addsection1