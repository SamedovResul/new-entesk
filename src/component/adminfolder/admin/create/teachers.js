import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { CreateTeacher, UpdateTeacher,GetTeacher} from '../../../../reducer/crmRedux/action';

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
      dispatch(CreateTeacher(data))
      setData({
        name:"",
        email:"",
        password:"",
      })
    }
  }

 
  return (
    <div className='create-data'>
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
      <button
          onClick={() =>{
            createTeacher()
          }}
        >
          {
            id.id ? (
              <span>update</span> 
            ):(
              <span>create</span> 
            )

          }
          
      </button>
      
      <div className="data">

        <ul>
          {
            state.map((clas, index) =>{
              const {name, _id,email,status } =clas
              
              return(
                <div key={index}>
                  <button
                    onClick={()=>{
                      setId({id: _id})
                    }}
                  >
                    update
                  </button>
                  <li   value={_id} >
                  <span>status: {
                      status === 1? ( <span>active</span> ) :( <span>inactive</span> )
                    } 
                  </span>
                  </li>
                  <li>
                  <span> name: {name} </span>
                  </li>
                </div>

              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Classes