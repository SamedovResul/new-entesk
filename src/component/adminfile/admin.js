import {React, useState,useEffect} from 'react'
import {useDispatch } from 'react-redux';
import {createUser, updateUser, deleteBlog} from '../../reducer/action'
import { useSelector } from 'react-redux';
import Input from './Input';
const Admin = (props) =>{
  let state = useSelector((state) => state.allData)
  const [currentId, setCurrentId] = useState(0)
  const [deleteId, setDeleteId] = useState(0)
  const [count, setCount] = useState(0)
  const [path, setPath] = useState("")
  console.log()
  const dispatch = useDispatch()
  const [userData, setuserData] =  useState({ 
    title: '', 
    text: '', 
    name: '', 
    file: [],
  })
  let images = []

  const handleChangetext = (e) => {
    setuserData({...userData, [e.target.name]: e.target.value})
  }

  const update = useSelector((state) =>(
    currentId ? state.allData.find((blog) => blog._id === currentId) : null
  ))

  const handleChangefile = (e) => {
    setuserData({...userData, file:  [ ...userData.file, e.target.files[0] ],})
  }



    useEffect(() => {
      if(update){
        setuserData(update)
      }
    }, [update])

    console.log(userData.file)
    function handleUpdateimg(filepath) {

      const itemToRemoveIndex = userData.file.findIndex( function(item) {
        return item.filepath === filepath
      })
      setCount(count + 1)
      userData.file.splice(itemToRemoveIndex, 1)
      return console.log()
    }


  const handlerSubmit = (e) =>{
    e.preventDefault();
    if(currentId === 0){
      if(userData.title && userData.text && userData.name && userData.file){
        userData.blogName = userData.name.replace(/[^a-zA-Z ]/g, "")
        dispatch(createUser(userData));
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
  // console.log(currentId)

  useEffect(() => {
    if(deleteId){
      dispatch(deleteBlog(deleteId))
      // console.log(deleteId)
    }
    console.log()
    
  }, [deleteId,dispatch])
  
  return(
    <article >
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form autoComplete="off" className='admin-form' action="/upload" method='POST'  >
              <label htmlFor="name">name
                <input required type='text' name="name" variant="outlined"  id='name' 
                  onChange={handleChangetext}
                ></input> 
              </label>
              <label htmlFor="title">title
              <input required type='text' name="title" variant="outlined" id='title' 
                onChange={handleChangetext}
              ></input> 

              </label>
              <label required htmlFor="text">text
                <textarea  name="text" variant="outlined" id='text' 
                  onChange={handleChangetext}
                ></textarea> 
              </label> 
              {
                update ? (
                  <>
                   {
                     userData.file.length == 1 ?(
                      <Input handleChangefile={handleChangefile} />
                     ):(
                      <>
                      {
                        userData.file.length == 0 ?(
                          <>
                            <Input handleChangefile={handleChangefile} />
                            <Input handleChangefile={handleChangefile} />
                          </>
                        ):(
                          null
                        )
                      }
                      </>
                     )
                   }
                  </>
                ):(
                  <>
                    <Input handleChangefile={handleChangefile} />
                    <Input handleChangefile={handleChangefile} />
                  </>
                )
              }
                <button type="submit" className="btn btn-primary" onClick={handlerSubmit} >
                  {
                    update ? (
                      <p>Update</p>
                    ):(
                      <p>Create</p>
                    )
                  }
                </button>
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
                  // console.log(blog)
            return(
                    <div className="col-md-4" key={_id}>
                      <div className="card" >
                        {
                          update ? 
                          userData.file.map((image, index)=>{
                            const {filepath} = image
                            // console.log(image)
                            return(
                              <div key={index}>
                                {
                                    <div key={index}>
                                      
                                      {
                                        filepath ? (
                                          <>
                                            {
                                            currentId === _id ?
                                            (<button onClick={() =>handleUpdateimg(filepath)}>remove</button>) :
                                            (null)
                                            }
                                            <img className="card-img-top" 
                                            src={`http://localhost:5000/${filepath}`} 
                                            alt="img"
                                            />
                                          </>
                                        
                                        ):(
                                          <p> {
                                            console.log(image.File)
                                            } </p>
                                        )
                                      }
                                      
                                    </div>
                                }
                              </div>
                            )
                          }):
                          file.map((image, index)=>{
                            const {filepath} = image
                            // console.log(image)
                            return(
                              <div key={index}>
                                <div>
                                  <img className="card-img-top" 
                                  src={`http://localhost:5000/${filepath}`} 
                                  alt="img" />
                                  </div>
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
