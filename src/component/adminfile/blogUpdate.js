import React from 'react'


function BlogUpdate({
  userData,
  currentId,
  handleUpdateimg,
  }) {

    
    const {_id, name, file, text,title} = userData

  return (  
    <div>
      {
        userData.title ? console.log(true) : console.log(false)
      }
      {  
      userData._id ? (
        <>
          <div className="col-md-12" key={_id}>
            <div className="updateBlog" >
              <div className="updateimgDiv">
                {
                  userData.file.map((image, index)=>{
                    const {filepath} = image
                    // console.log(image)
                    return(

                      <div className='updateImage'  key={index}>
                        {
                          filepath? (
                            <>
                            { 
                              currentId === _id ?
                              (<button onClick={() =>handleUpdateimg(filepath)}>remove</button>) :
                              (null)
                            }
                              <img className="" 
                              src={`http://localhost:5000/${filepath}`} 
                              alt="img"
                              />
                            </>
                          ):
                          (
                            null
                          )
                          
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div className="updateText">
                <h5 className="title">title: {title} </h5>
                <h6 className="blogName">name: {name}</h6>
                <p className="text">text: {text}</p>
              </div>
            </div>
          </div>
        </>
      ):(
        <b>Wait...</b>
      )
        }
    </div>
  )
}

export default BlogUpdate
