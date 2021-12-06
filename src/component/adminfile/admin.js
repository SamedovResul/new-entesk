import {React, useState,useEffect} from 'react'
import {useDispatch } from 'react-redux';
import {createUser, updateUser, deleteBlog} from '../../reducer/action'
import { useSelector } from 'react-redux';

const Admin = (props) =>{
  let state = useSelector((state) => state.allData)
  const [currentId, setCurrentId] = useState(0)
  const [deleteId, setDeleteId] = useState(0)
  const dispatch = useDispatch()
  const [userData, setuserData] =  useState({ 
    title: '', 
    text: '', 
    blogName: '', 
    file: [],
    filenameone: '',
    filenametwo: ''
  })


  const update = useSelector((state) =>(
    currentId ? state.allData.find((blog) => blog._id === currentId) : null
  ))

    useEffect(() => {
      if(update){
        setuserData(update)
      }
    }, [update])


  const handlerSubmit = (e) =>{
    e.preventDefault();
    if(currentId === 0){
      if(userData.title && userData.text && userData.blogName && userData.file){
        userData.blogName = userData.blogName.replace(/[^a-zA-Z ]/g, "")
        // dispatch(createUser(userData));
        setuserData({
          title: '', 
          text: '', 
          blogName: '', 
          file: []
        })
      }else{
        alert("please insert data")
      }
    }else{
      
      dispatch(updateUser(currentId, userData))
     
      setCurrentId(0)
      setuserData({
        title: '', 
        text: '', 
        blogName: '', 
        files: [],
      })
    }
    
  }


  useEffect(() => {
    if(deleteId){
      dispatch(deleteBlog(deleteId))
      console.log(deleteId)
    }
    console.log()
  }, [deleteId,dispatch])
  
  
  console.log(userData)
  
  console.log(state)
  return(
    <article >
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form autoComplete="off" className='admin-form' action="/upload" method='POST'  >
              <label htmlFor="name">name
                <input required type='text' name="name" variant="outlined"  id='name' value={userData.blogName}
                  onChange={(e) => setuserData({
                    ...userData, blogName: e.target.value  
                  })}
                ></input> 
              </label>
              <label htmlFor="title">title
              <input required type='text' name="title" variant="outlined" id='title' value={userData.title}
                onChange={(e) => setuserData({
                  ...userData, title: e.target.value  
                })}
              ></input> 

              </label>
              <label required htmlFor="text">text
                <textarea  name="text" variant="outlined" id='text' value={userData.text}
                  onChange={(e) => setuserData({
                    ...userData, text: e.target.value  
                  })}
                ></textarea> 
              </label> 
              <input
              type="file"
              name="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setuserData({
                    ...userData, file:  [ ...userData.file, e.target.files[0] ],
                  })
              }}
              />
              <input
              type="file"
              name="file"
              accept="image/png, image/jpeg"
              // onChange={(e) => setuserData({
              //       ...userData, file: [ ...userData.file, e.target.files[0] ],
              //       ...userData, filenameone: e.target.files[0].name ,
              //     })}
                onChange={(e) =>{
                  if(!userData.file){
                    setuserData({
                    ...userData, file: [ ...userData.file, e.target.files[0] ],
                    })
                      if(userData.file){
                        setuserData({
                        ...userData, filenameone: e.target.files[0].name ,
                      })
                    }
                  }
                }}
              />

                <button type="submit" className="btn btn-primary" onClick={handlerSubmit} >Göndər</button>
              </form> 
            </div>
          </div>
        </div>
      </div>

        <div className="container">
          <div className="container-fluid">
            <div className="row">

              {
                state.map((blog) =>{
            const {_id, blogName, file, text,title} = blog

            return(
                    <div className="col-md-4" key={_id}>
                      <div className="card" >
                        {
                          file.map((image, index)=>{
                            const {filepath} = image

                            return(
                              <div key={index}>
                                <img className="card-img-top" 
                                src={`https://entesk-app.herokuapp.com/${filepath}`} 
                                alt="img" />
                              </div>
                              
                            )
                          })
                        }
                        <div className="card-body">
                          <h5 className="card-title">title: {title} </h5>
                          <h6 className="card-subtitle mb-2 text-muted">blogName {blogName}</h6>
                          <p className="card-text">text: {text}</p>
                          
                          <button
                              className="btn btn-success btn-sm"
                              onClick={()=> setCurrentId(_id)}
                            >
                              update
                            </button>
                          <button
                            className="btn  btn-danger btn-sm"
                            onClick={()=> setDeleteId(_id)} >
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }


            </div>
          </div>
        </div>

        

     
      
    </article>
  )

}

export default Admin
