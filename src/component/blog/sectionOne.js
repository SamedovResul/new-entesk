import React from 'react'


function SectionOne(props) {

  const deletedBlog = {
    title: 'Blog silinmisdir',
    text: '____',
    filepath: ""
  }

  let data
  if(props.data){
    data = props.data
  }else{
    data = deletedBlog
  }
  // if(data.blogContent){
  //   const {description, text, list} = data.blogContent
  //   console.log(data.blogContent)
  // }

  // data.blogContent ? 
  // data.blogContent.map((subject) =>{
  //   console.log(subject)
  // }):



  
  const {id, img,text,title} = data
  return (
    <article>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-text-box">

            {
              data.blogContent ? ( <>
              <img className='blog-img' src={img} alt='img'/>
              <img className='blog-img2' src={img} alt='img'/>
              </> ) :
              ( <p></p>)
            }
              
                {
                  data.blogContent ? 
                  data.blogContent.map((subject, index) =>{
                    const {description, text,list  } = subject
                    // console.log(subject)
                    return(
                      <div key={index}>
                      <>
                        {
                        description ? (
                          <p>{description}</p>
                        ): (null)
                        }
                      </>
                      
                      <ul>
                        {
                          list ? list.map((list)=>{
                            const {li} = list
                            return(
                              <li>
                                {li}
                              </li>
                            )
                          }) : (
                            null
                          )
                        } 
                          
                      </ul>
                      <p>
                        {text}
                      </p> 
                      </div>
                    )
                  }):(
                    <>
                      
                      <p>
                        <p>
                          {title}
                        </p>
                        <div>
                          <img className='blog-img' src={img} alt='img'/>
                        </div>
                        {text}
                      </p> 
                    </>
                     
                  )
                }
                
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="blog-img-box">
                <img src={img} alt='img'/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionOne
