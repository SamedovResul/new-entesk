import React,{useState} from 'react'
import sectionImg from './metaImg/sectionOnebg.jpeg'
import CountUp from 'react-countup'
import ScrollTriger from 'react-scroll-trigger'

const Addsection5 = () => {
  


  return (
    <article className='add-section-five'>
    {/* <div className='png' ></div> */}
    <div  className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3> EDUCATION  in METAVERSE </h3>
          </div>
          <div className="col-md-6 ">
            <div className='metatesk-text' >
              <p>classes for</p>
              <p> 6-14 years old </p>
              <p> from </p>
              <p> any point of the world </p>
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