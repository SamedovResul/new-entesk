import React from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'


const Addsection5 = () => {
  return (
    <article className='metatesk-info section-one'>
    {/* <div className='png' ></div> */}
    <div  className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ">
            <div className='metatesk-text' >
              <p> <span>EDUCATION</span>  <br /> <span>in</span> <br /> <span>METAVERSE</span> </p>  
            </div>
          </div>
          <div className="col-md-6 ">
            <div  className='metatesk-img' >
              <img 
               src={sectionImg} alt="metatesk"
               />
            </div>
          </div>

        </div>
      </div>
    </div>
  </article>
  )
}

export default Addsection5