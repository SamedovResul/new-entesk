import React, {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import {GetTimetable,CreateTimetable,UpdateTimetable} from '../../../../reducer/crmRedux/action';
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';


const Create = () => {
  const [id, setId] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTimetable())
  }, [])
  
  let state = useSelector((state) => state);

  const [newTimetable, setNewtimetable] = useState({
    student_Name: '',
    student_Id: '',
    teacher_Name: '',
    teacher_Id: '',
    class_Name: '',
    class_Id: '',
    date: '',
  })

  //  add class
  useEffect(() => {
     state.classReducer.map((Class) =>{
        const {name, _id} = Class
        if(_id === newTimetable.class_Id){
            newTimetable.class_Name = name
        }
      })
  }, [newTimetable])


  // add student
  useEffect(() => {
    state.studentReducer.map((student) =>{
      const {firstName, _id} = student
      if(_id === newTimetable.student_Id){
        newTimetable.student_Name = firstName
      }
    })
  }, [newTimetable]);


  // add teacher
  useEffect(() => {
    state.teacherReducer.map((student) =>{
      const {name, _id} = student
      if(_id === newTimetable.teacher_Id){
        newTimetable.teacher_Name = name
      }
    })
  }, [newTimetable])
  
 

  const history = useHistory();

  // update timetable
  useEffect(() => {
    state.timetableReducer.map((timetable) =>{
      const {_id} = timetable
      if(_id === id){
        setNewtimetable(timetable)
      }
    })
  }, [id])
  

  // create timatable
  const  createTimetbale = (e) =>{
    console.log(true)
    if(id){
      dispatch(UpdateTimetable(newTimetable, id))
    }else{
      dispatch(CreateTimetable(newTimetable))
    }
    
  }

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className=" create-admin create-data">
              <p>  create Timetable</p>
            <form action="">
              {/* select teacher  */}
              <select 
                onChange={(e) =>{
                  setNewtimetable({...newTimetable, teacher_Id: e.target.value
                  })
                }}name="students" id="teacher">
                  {
                    newTimetable.teacher_Id ? (
                      <option  value="select"> {newTimetable.teacher_Name} </option>
                    ):(
                      <option  value="select"> select </option>
                    )
                  }
                {
                  state.teacherReducer.map((teacher, index) =>{
                    const {name, _id} = teacher

                    return(
                      <option key={index} value={_id}>{name}</option>
                    )
                  })
                }
              </select>
              {/* select student */}
              <select
              onChange={(e) =>{
                setNewtimetable({
                  ...newTimetable, student_Id: e.target.value
                })
              }}
              name="students" id="student">
                {
                    newTimetable.student_Id ? (
                      <option  value="select"> {newTimetable.student_Name} </option>
                    ):(
                      <option  value="select"> select </option>
                    )
                  }
                {
                  state.studentReducer.map((student, index) =>{
                    const {firstName, _id} = student

                    return(
                      <option key={index} value={_id}>{firstName}</option>
                    )
                  })
                }
              </select>
              {/* select class */}
              <select
                onChange={(e) =>{
                  setNewtimetable({
                    ...newTimetable, class_Id: e.target.value
                  })
                }} name="class" id='class'>
                  {
                    newTimetable.class_Id ? (
                      <option  value="select"> {newTimetable.class_Name} </option>
                    ):(
                      <option  value="select"> select </option>
                    )
                  }
                {
                  state.classReducer.map((clas, index) =>{
                    const {name, _id} = clas

                    return(
                      <option key={index} value={_id}>{name}</option>
                    )
                  })
                }
              </select>

              
              {/* set date */}
              <input type="datetime-local" id="date" name="date"
                
                onChange={(e) =>{
                  setNewtimetable({
                    ...newTimetable, date: e.target.value
                  })
                }}
              />
              
            </form>
            <button onClick={() =>{createTimetbale()}}>
                {id ? (
                  <span>Update</span>
                ) :(
                  <span>Create</span>
                )}
              </button>
            </div>
          </div>
            {
              state.timetableReducer.map((timetable, index) =>{
                const {
                  student_Name,
                  teacher_Name,
                  class_Name,
                  date,
                  _id,
                  table_State
                } =timetable
                const time = new Date(date)
                const minute = time.getMinutes()
                const hour = time.getHours()
                const day = time.getDay()
                const month = time.getMonth()
                const year = time.getFullYear()
                // console.log(year)
                return(

                  <div key={index} className='col-md-4'>
                    <div className="info-table">
                      
                        <p><b>teacher:</b>  {teacher_Name} </p>
                        <p><b>student:</b>  {student_Name} </p> 
                        <p><b>class:</b> {class_Name}  </p>  
                        <p><b>date:</b>{`${year} ${month} ${day} ${hour}:${minute}`} </p>
                        <p> <b>class state</b>  <span>nun</span> </p>
                        <p>
                        <b>class state</b>
                        {
                          table_State === 0 ?( <span> undefined </span> ):( <span>confirm</span> )
                        }
                      </p>
                        <button
                        onClick={()=>{
                          setId(_id)
                        }}
                        >
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

export default Create