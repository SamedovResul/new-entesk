import React, {useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import {GetTimetable,CreateTimetable,UpdateTimetable} from '../../../../../reducer/crmRedux/action';
import Table from './Table';
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';


const Create = () => {
  const [id, setId] = useState('')
  const [boolean, setboolean] = useState({
    i1:10,
    i2:10,
    i3:10,
    i4:10
  })
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
    // e.preventDefault()
    setboolean(true)
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
                onClick={() => boolean.i1 !== 0 ? setboolean({ ...boolean, i1:0}) : setboolean({...boolean, i2:10}) }
                onChange={(e) =>{
                  setNewtimetable({...newTimetable, teacher_Id: e.target.value})
                  }}name="students" id="teacher">
                  {
                    boolean.i1 !== 0 ?(
                      <option   > select </option>
                    ):(
                      <>
                      {
                        state.teacherReducer.map((teacher, index) =>{
                          const {name, _id} = teacher
                          return(
                            <option key={index} value={_id}>
                              {name}
                            </option>
                          )
                        })
                      }
                      </>
                    )
                  }
                
              </select>
              {/* select student */}
              <select 
                onClick={() => boolean.i2 !== 1 ? setboolean({...boolean, i2:1}) : setboolean({...boolean, i2:10}) }
                onChange={(e) =>{
                  setNewtimetable({...newTimetable, student_Id: e.target.value})
                  }} name="students" id="teacher">
                  {
                    boolean.i2 !== 1 ?(
                      <option  value={"select"} > select </option>
                    ):(
                      <>
                      {
                        state.studentReducer.map((student, index) =>{
                          const {firstName, _id} = student
                          return(
                            <option key={index} value={_id}>
                              {firstName}
                            </option>
                          )
                        })
                      }
                      </>
                    )
                  }
              </select>
              {/* select class */}
              <select 
                onClick={() => boolean.i3 !== 2 ? setboolean({ ...boolean, i3:2}) : setboolean({...boolean, i3:10}) }
                onChange={(e) =>{
                  setNewtimetable({...newTimetable, class_Id: e.target.value})
                  }}>
                  {
                    boolean.i3 !== 2 ?(
                      <option  value={"select"} > select </option>
                    ):(
                      <>
                      {
                         state.classReducer.map((clas, index) =>{
                          const {name, _id} = clas
      
                          return(
                            <option key={index} value={_id}>{name}</option>
                          )
                        })
                      }
                      </>
                    )
                  }
              </select>
              {/* set date */}
              {
                boolean.i4 === 10 ? (
                  <>
                    <input type="datetime-local" id="date" name="date"
                      onChange={(e) =>{
                        setNewtimetable({
                          ...newTimetable, date: e.target.value
                        })
                      }}
                    />
                  </>
                ):(
                  <>
                    <input type="datetime-local" value={"YYY-MM-DD"} />
                  </>
                )
              }
              

              <button onClick={(e) => {
                e.preventDefault()
                createTimetbale()
                setboolean({
                  i1:10,
                  i2:10,
                  i3:10,
                  i4:3
                })
              }}>
                {id ? (
                  <span>Update</span>
                ) :(
                  <span>Create</span>
                )}
              </button>
            </form>
            
            </div>
          </div>
            <Table tableData={state.timetableReducer} setId={setId} />
        </div>
      </div>
    </div>
    

  )
}

export default Create