import React, {useState} from 'react'
import { useSelector } from 'react-redux';


const Create = () => {
  let state = useSelector((state) => state.admin);
  console.log(state.authData.Data)
  const [newTimetable, setNewtimetable] = useState({
    classesId:'',
    studentsId:'',
    teacherId:''
  })
  console.log(newTimetable)

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-5">
            <div className="create-div">
              {/* select class */}
              <select
                onChange={(e) =>{
                  setNewtimetable({
                    ...newTimetable, classesId: e.target.value
                  })
                }} 
                name="class" id="cars">
                <option  value="select">select</option>
                {
                  state.authData.Data.classes.map((clas, index) =>{
                    const {name, _id} = clas

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
                  ...newTimetable, studentsId: e.target.value
                })
              }}
              name="students" id="cars">
                <option  value="select">select</option>
                {
                  state.authData.Data.students.map((student, index) =>{
                    const {name, _id} = student

                    return(
                      <option key={index} value={_id}>{name}</option>
                    )
                  })
                }
              </select>
              {/* select teacher  */}
              <select 
                onChange={(e) =>{
                  setNewtimetable({
                    ...newTimetable, teacherId: e.target.value
                  })
                }}
              name="students" id="cars">
                <option  value="select">select</option>
                {
                  state.authData.Data.teacher.map((teacher, index) =>{
                    const {name, _id} = teacher

                    return(
                      <option key={index} value={_id}>{name}</option>
                    )
                  })
                }
              </select>
              {/*  */}
            </div>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Create