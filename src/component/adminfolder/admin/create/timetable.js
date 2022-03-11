import React, {useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import {GetTimetable,CreateTimetable,UpdateTimetable} from '../../../../reducer/crmRedux/action'
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';


const Create = () => {
  const [id, setId] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTimetable())
  }, [])
  
  let state = useSelector((state) => state);
  // console.log(state)
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
  state.classReducer.map((Class) =>{
    const {name, _id} = Class
    if(_id === newTimetable.class_Id){
        newTimetable.class_Name = name
      // console.log(newTimetable)
    }
  })

  // add student
  state.studentReducer.map((student) =>{
    const {firstName, _id} = student
    if(_id === newTimetable.student_Id){
      newTimetable.student_Name = firstName
    // console.log(newTimetable)
    }
  })

  // add teacher
  state.teacherReducer.map((student) =>{
    const {name, _id} = student
    if(_id === newTimetable.teacher_Id){
      newTimetable.teacher_Name = name
    // console.log(newTimetable)
    }
  })

  const history = useHistory();

  // console.log(new Date(newTimetable.date))

  // update timetable


  useEffect(() => {
    state.timetableReducer.map((timetable) =>{
      const {_id} = timetable
      if(_id === id){
        setNewtimetable(timetable)
      }
    })
  }, [id])
  
  // console.log(state.timetableReducer[0])

  // create timatable
  const  createTimetbale = (e) =>{
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
            <div className="create-data">
              <p>  create Timetable</p>
            <form action="">
              {/* select teacher  */}
              <select 
                onChange={(e) =>{
                  setNewtimetable({
                    ...newTimetable, teacher_Id: e.target.value
                  })
                }}
                
                name="students" id="teacher">
                <option  value="select"> select</option>
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
                <option  value="select">select</option>
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
                }} 
                name="class" id='class'>
                <option  value="select">select</option>
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
            </div>
          </div>

              {/* <button
                onClick={() =>{
                  createTimetbale()
                }}
              >
                {
                  id ? (
                    <span>Update</span>
                  ) :(
                    <span>Create</span>
                  )
                }
                
              </button> */}

            <div className="col-md-4">
              
            </div>

            <div className="data">
              <ul>
                {
                  state.timetableReducer.map((timetable, index) =>{
                    const {
                      student_Name,
                      teacher_Name,
                      class_Name,
                      date,
                      _id
                    } =timetable
                    const time = new Date(date)
                    const minute = time.getMinutes()
                    const hour = time.getHours()
                    const day = time.getDay()
                    const month = time.getMonth()
                    const year = time.getFullYear()
                    // console.log(year)
                    return(
                      <div key={index}>
                        <button
                          onClick={()=>{
                            setId(_id)
                          }}
                        >
                          update
                        </button>
                        {/* <li   value={_id} >
                        <span>status: {
                            status === 1? ( <span>active</span> ) :( <span>inactive</span> )
                          } 
                        </span>
                        </li> */}
                        <li>
                          <span> teacher: {teacher_Name} </span>
                        </li>
                        <li>
                          <span> student: {student_Name} </span>
                        </li>
                        <li>
                          <span> class: {class_Name} </span>
                        </li>
                        <li>
                          <span> date: {`${year} ${month} ${day} ${hour}:${minute}`} </span>
                        </li>
                      </div>

                    )
                  })
                }
              </ul>
            </div>

          
        </div>
      </div>
    </div>
    

  )
}

export default Create