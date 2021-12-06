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
            <div className="col-md-6">
              <div className="blog-text-box">

                {
                  data.blogContent ? 
                  data.blogContent.map((subject) =>{
                    const {description, text,list  } = subject
                    console.log(subject)
                    return(
                      <div>
                      <p>
                        {description}
                      </p>
                      <ul>
                        {
                          list ? list.map((list)=>{
                            const {li} = list
                            console.log(li)
                            return(
                              <li>
                                {
                                  li
                                }
                              </li>
                            )
                          }) : (
                            <p></p>
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
                        {title}
                      </p>
                      <p>
                        {text}
                      </p> 
                    </>
                     
                  )
                }
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog-img-box">
                <img src={img} alt='img'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionOne
