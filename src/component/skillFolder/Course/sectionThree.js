import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "react-video-js-player";
import poster from '../../../images/guneshsistemi.png';


const SectionThree = (props) =>{
  const { id,   Video, module, levels,  module_for} = props.data
  const [moreLess , setMoreLess] = useState({display: 'none'})
  const [span , setSpan] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("data", props.data)
  }, [props.data])


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
              
              <div className='main-box skill-course'>
                <div className='png' ></div>
                <p>Modula daxildir</p>
              <ul>
                {
                  module.map((subject, index) =>{
                    const {mod,note} = subject

                    return(
                      <li key={index}>
                        <p>{mod}</p>  <span>&#8226;</span>
                        <p style={ note ? {display: 'block'} : {display: 'none'} } > {note} </p>
                      </li>
                    )
                  })

                }
                
              </ul>
              </div>
              
            </div>
            
{/* <span>&#8226;</span> */}
            <div className="col-md-12 ">
              <div className='main-box skill-course mundaricat' >
                <div className='png' ></div>
                <div className={ span? "cantentul  " : "cantents " }  >
                  <p>Modulun mündəricatı</p>
                  {
                    levels.map((subject, index) =>{
                      const {name,list} = subject
                      return(
                        <div key={index}  className="level-div" >
                          <p> {name} </p>
                            <div key={index} className='list-div' >
                              <ul >

                                {
                                  list.map((subject, index) =>{
                                    const {li} = subject
                                    // console.log(subject)
                                    return(
                                      
                                      <li key={index}>
                                          {li} <span>&#8226;</span>
                                        </li>
                                        
                                    )
                                  })
                                }

                            </ul>
                          </div>
                        </div>
                      )
                    })
                  }
                  
                  <div>
                    <p>Bu modul kimlər üçündür</p>
                    <ul>
                    {
                      module_for.map((subject, index) =>{
                        const {li} = subject

                        return(
                          <li key={index} >
                            {li}
                          </li>
                        )
                      })
                    }
                    </ul>
                    
                  </div>
                  

                  
                </div>
                <button className="cantent-btn"
                    onClick={() => {
                    if(moreLess.display === 'none'){
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