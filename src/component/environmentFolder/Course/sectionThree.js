import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import poster from '../../../images/guneshsistemi.png';


const SectionThree = (props) =>{
  const { id,   Video, module, module_mun , module_for} = props.data
  const [moreLess , setMoreLess] = useState({display: 'none'})
  const [span , setSpan] = useState(false)

  return(
    <article className="section-3-main-div">
      
      <div key={id} className="container ">
        <div className="container-fluid">
          <div className="row" >


            <div  className=" col-md-5 col-sm-12 col-12">
              <VideoPlayer 
              src={Video} poster={poster} className="video"   
              />
            </div>

            <div  className=" linethree col-md-7 col-sm-12 col-xs-12" >
              
              <div className='environment-course main-box'>
                <div className='png' ></div>
                <p>Modula daxildir</p>
              <ul>
                {
                  module.map((subject, index) =>{
                    const {mod,note} = subject

                    return(
                      <li key={index}>
                        <p>{mod}</p> <span>&#8226;</span>
                        <p style={ note ? {display: 'block'} : {display: 'none'} } > {note} </p>
                      </li>
                    )
                  })

                }
                
              </ul>
              </div>
              
            </div>
            

            <div className="col-md-12 ">
              <div className='main-box environment-course mundaricat ' >
                <div className='png' ></div>
                <div className={span? "cantentul  " : "cantents " }  >
                  

                  <div className="cantent">

                    <p> Modulun mündəricatı </p>
                    <ul  >
                    {
                    module_mun.map((subject, index) =>{
                      const {li} = subject
                      return(
                      <li key={index}>
                        <p> {li} </p>  <span>&#8226;</span>
                      </li>
                      )
                    })
                    }
                    </ul>
                  </div>
                    
                  <div className="note">
                    <p> Bu modul kimlər üçündü  </p>
                    <ul  >
                    {
                    module_for.map((subject, index) =>{
                      const {li} = subject
                      return(
                      <li key={index}>
                        <p> {li} </p>  <span>&#8226;</span>
                      </li>
                      )
                    })
                    }
                    </ul>

                  </div>
                  
                </div>
                  <button className="cantent-btn"
                    onClick={() => {
                    if(moreLess.display === 'none'  ){
                      setSpan(true)
                      setMoreLess({display: 'flex'})
                    }else{
                      setMoreLess({display: 'none'})
                      setSpan(false)
                    }
                    }}
                  >
                    Davami
                  </button>
              </div>
              
            </div>
              
            
            

          </div>
        </div> 
      </div>

      


      
    </article>
  )
}

export default SectionThree