import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { CreateTeacher, UpdateTeacher,GetTeacher} from '../../../../reducer/crmRedux/action';
import Swal from 'sweetalert2'


const Classes = () => {
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    status:0
  })
  const [id, setId] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state) => state.teacherReducer);

  // get teacher
  useEffect(() => {
    dispatch(GetTeacher())
  }, [])
  

    
// select update teacher
  useEffect(() => {
    state.map((classes) =>{
      const {_id} = classes
      if(_id === id.id){
        setData(classes)
      }
    })
  }, [id])


  // create and update teacher
  const createTeacher = (e) =>{
    if(id.id){
      dispatch(UpdateTeacher(id.id,data))
      setData({
        name:"",
        email:"",
        password:"",
      })
    }else{
      if(data.email && data.name && data.password && data.status){
        dispatch(CreateTeacher(data))
        setData({
          name:"",
          email:"",
          password:"",
        })
        Swal.fire({
          color:"green",
          text: "Great",
          timer:1000
        })
      }else{
        Swal.fire({
          color:"red",
          text: "please complete form",
          timer:1000
        })
      }
      
    }
  }

 
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className=" create-admin create-teacher">
              <p>create teacher</p>
              <form action="">
                <label htmlFor="name">
                name
                <input type="name" id="name"
                value={data.name}
                  onChange={(e) =>{
                    setData({
                      ...data, name: e.target.value
                    })
                  }}
                />
                </label>
                <label htmlFor="email">
                  email
                  <input type="email" id="email" 
                    value={data.email}
                    onChange={(e) =>{
                      setData({
                        ...data, email:e.target.value
                      })
                    }}
                  />
                </label>
                <label htmlFor="password">
                  password
                  <input type="password" id="password"
                    onChange={(e) =>{
                      setData({
                        ...data, password:e.target.value
                      })
                    }}
                      />
                </label>
                <label htmlFor="status">
                  status
                  <select name="" id="status"
                    onChange={(e)=>{
                      setData({
                        ...data, status: parseInt(e.target.value) 
                      })
                    }}
                  >
                    <option >select status</option>
                    <option value="0">inactive</option>
                    <option value="1">active</option>
                  </select>
                </label>
              </form>
              <button onClick={() =>{ createTeacher()}}>
                    {
                      id.id ? (
                        <span>update</span> 
                      ):(
                        <span>create</span> 
                      )
                    }
                </button>
            </div>
          </div>
            {
              state.map((teacher, index) =>{
                const {name, _id,email,status,} = teacher;

                return(
                  <div key={_id} className="col-md-4">
                    <div className="info-table">
                      <p> <b>Teacher name:</b> {name}</p>
                      <p> <b>Email:</b> {email}  </p>
                      <p> <b> status: </b> {
                      status === 1? 
                      ( <span>active</span> ) :
                      ( <span>inactive</span> )
                        } 
                       </p>
                      <button
                        onClick={()=>{setId({id: _id}) }} >
                        update
                      </button>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Classes