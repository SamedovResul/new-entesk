import React from 'react'
import adminFunctions from './adminFunctions'
import {Link} from 'react-router-dom'

const Blogs = () => {

  const {state,setCurrentId,currentId} = adminFunctions() 
  console.log(currentId)
 


  return (

    <div className="container">
      <div className="container-fluid">
        <div className="row">
          
        
          {  state.map((blog) =>{
            const {_id, name, file, text,title} = blog

            return(
              <div className="col-md-6"  >
                <div className="admin-blog">
                  <div className="admin-blog-img">
                      <img src={`http://localhost:5000/${file[0].filepath}`} alt="img" />
                  </div>
                  <div className="admin-blog-content">
                    <p className=''  > BlogName: {name}  </p>
                    <p className='' > Blogcontent: {text} </p>
                    <p className='' > Blogtitle: {title} </p>
                  </div>
                      <div className="admin-btn-div">
                        <Link  to={`/Createblog/${_id}`} >
                          <button >
                            <p>edit</p>
                          </button>
                        </Link>
                        <Link  to={`/Createblog/${_id}`} >
                          <button >
                            <p>preview</p>
                          </button>
                        </Link>
                      </div>
                    
                      
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Blogs
