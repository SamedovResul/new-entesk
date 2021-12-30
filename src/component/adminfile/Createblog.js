import React from 'react'
import {Link} from 'react-router-dom'
import adminFunctions from './adminFunctions'
import Input from './Input'
import BlogUpdate from './blogUpdate'
import {useParams} from 'react-router-dom'


const  Createblog = () => {


  const { id } = useParams();
  const {
    handleChangetext,
    handleChangefile,
    setSlideimg,
    update,
    handlerSubmit,
    userData,
    handleUpdateimg,
    currentId
  } = adminFunctions(id)

  console.log(update)
  return (
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
                       <>
                        <Input handleChangefile={handleChangefile} />
                       </>
                      
                     ):(
                      <>
                      {
                        userData.file.length == 0 ?(
                          <>
                            <Input handleChangefile={handleChangefile} />
                            <Input handleChangefile={handleChangefile} />
                          </>
                        ):(
                          <>
                            {
                          userData.file ? (
                          <>
                            <select id="file" onChange={(e) => setSlideimg(e.target.value)} >
                              <option select="selected"> set slide </option>
                              {
                                userData.file.map((file, index) =>{
                                  // console.log(file)
                                  const {name} = file
                                  return(
                                    
                                    <option key={index} value={name} > {name} </option>
                                  )
                                })
                              }
                            </select>
                              </>
                              ):(
                                null
                              )
                            }
                          </>
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
                    {
                      userData ? (
                      <>
                        <select id="file" onChange={(e) => setSlideimg(e.target.value)} >
                          <option select="selected"> set slide </option>
                          {
                            userData.file.map((file, index) =>{
                              const {name} = file
                              return(
                                
                                <option key={index} value={name} > {name} </option>
                              )
                            })
                          }
                        </select>
                      </>
                      ):(
                        null
                      )
                    }
                  </>
                )
              }
                <button type="submit" className="btn btn-primary" onClick={handlerSubmit} >
                  {
                    update ? (
                      <p>Update</p>
                    ):(
                      <Link to="/adminBlogs">
                        <p>Create</p>
                      </Link>
                      
                    )
                  }
                </button>
              </form> 
              {
                update ? (
                  <BlogUpdate userData={userData} currentId={currentId} handleUpdateimg={handleUpdateimg}  />
                ):(
                  null
                )
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default Createblog
