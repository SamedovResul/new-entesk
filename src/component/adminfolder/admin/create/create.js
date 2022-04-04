import React, {useState} from 'react'
import { useSelector } from 'react-redux';
// import {CreateTimetable} from '../../../reducer/crmReducer/action'
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import Classes from './classes';
import Teachers from './teachers';
import Student from './students';
import Timetable from './timetable'
import {useSpring, animated} from 'react-spring'

const Create = () => {
  const [classes,setClasses ] = useState(false)
  const [teacher,setTeachers ] = useState(false)
  const [student,setStudent ] = useState(false)

  // animation function
  const  classFunction = (param, setParam ) => {
    if(param === false){
      setParam(true)
    }else{
      setParam(false)
    }
  }
  // animationClass animaton
  const animationClass = useSpring({
    to:[{
      height:classes? "50%" : "0%"
    }],
    from:{
      height: "0%"
    },
    config: {
      duration: 600
    }
  })
  // animationTeacher animaton
  const animationTeacher = useSpring({
    to:[{
      height:teacher? "50%" : "0%"
    }],
    from:{
      height: "0%"
    },
    config: {
      duration: 600
    }
  })
  // animationStudent animaton
  const animationStudent = useSpring({
    to:[{
      height:student? "50%" : "0%"
    }],
    from:{
      height: "0%"
    },
    config: {
      duration: 600
    }
  })

  return (
    <div className="container create-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="create-box" onClick={() =>{classFunction(classes,setClasses) }} >
              <h3>Create Classes</h3> 
            </div>
          </div>
          <div className="col-md-4">
            <div className="create-box"  onClick={() =>{classFunction(teacher,setTeachers) }}>
              <h3>Create Teachers</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="create-box"  onClick={() =>{classFunction(student,setStudent) }}>
              <h3>Create Student</h3>
            </div>
          </div>
          <div className="col-md-12">
            <animated.div style={animationClass} className="classes">
              <Classes  />
            </animated.div>
            <animated.div style={animationTeacher} className="classes">
              <Teachers />
            </animated.div>
            <animated.div style={animationStudent} className="classes">
              <Student />
            </animated.div>
            <Timetable />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Create