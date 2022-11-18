import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { CreateStudent, UpdateStudent,GetStudent} from '../../../../reducer/crmRedux/action';
import Swal from 'sweetalert2'

const Classes = () => {
  const [data, setData] = useState({
    name:"",
    secondName:"",
    age:0,
    status:0
  })
  const [id, setId] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state) => state.studentReducer);


  // get student
  useEffect(() => {
    dispatch(GetStudent())
  }, [])
  
    
// select update student
  useEffect(() => {
    state.map((classes) =>{
      const {_id} = classes
      if(_id === id.id){
        setData(classes)
      }
    })
  }, [id])


  // create and update student
  const createClass = (e) =>{
    if(id.id){
      dispatch(UpdateStudent(id.id,data))
      setData({
        name:"",
        secondName:"",
        age:0,
        status:0
      })
      Swal.fire({
        color:"green",
        text: "Great",
        timer:1000
      })
    }else{
      if(data.age && data.name && data.secondName && data.status){
        dispatch(CreateStudent(data))
        setData({
          name:"",
          secondName:"",
          age:0,
          status:0
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
            <div className="create-admin  create-student">
            <p>create Student</p>
               <form action="">
                 <label htmlFor="name">
                   <b>firstName :</b>
                   <input type="name" id="name"
                   value={data.firstName}
                     onChange={(e) =>{
                       setData({
                         ...data, name: e.target.value
                       })
                     }}
                   />
                 </label>
                 <label htmlFor="secondName">
                    <b>secondName :</b>
                   <input type="secondName" id="secondName" 
                     value={data.secondName}
                     onChange={(e) =>{
                       setData({
                         ...data, secondName:e.target.value
                       })
                     }}
                   />
                 </label>
                 <label htmlFor="number">
                    <b>age :</b>
                   <input type="date" id="password"
                     value={data.age}
                     onChange={(e) =>{
                       setData({
                         ...data, age:e.target.value
                       })
                     }}
                       />
                 </label>
                 <label htmlFor="status">
                    <b>status</b>
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
                    onClick={() =>{createClass()}}>
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
            state.map((student, index) =>{
              const {name,secondName,age,status,_id} = student;

              return(
                <div key={_id} className="col-md-4">
                  <div className="info-table">
                    <p> <b>Student fullname:</b> {name}, {secondName}  </p>
                    <p> <b>Age:</b> {age}  </p>
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