import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import Classes from './classes';
import Teachers from './teachers';
import Student from './students';
import Timetable from './timetable/timetable'
import {useSpring, animated} from 'react-spring'
import { Link } from 'react-router-dom';

const Create = () => {
  const [div,setdiv ] = useState(10)

  return (
    <div className="container create-page">
      <div className="return">
        <Link to='/adminTimetable'>
          <span>
            &#9664;
          </span>
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="create-box" onClick={
              () => div !== 0 ? setdiv(0) : setdiv(10) } >
              <h3>Create Classes</h3> 
            </div>
          </div>
          <div className="col-md-4">
            <div className="create-box"  onClick={
              () => div !== 1 ? setdiv(1) : setdiv(10) }>
              <h3>Create Teachers</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="create-box"  onClick={
                () => div !== 2 ? setdiv(2) : setdiv(10) }>
              <h3>Create Student</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div style={
                div === 0 ? {display: "block", height:'auto'} : {display: "none"}
              } className="classes">
              <Classes  />
            </div>
            <div style={
                div === 1 ? {display: "block", height:'auto'} : {display: "none"}
              } className="classes">
              <Teachers />
            </div>
            <div style={
                div === 2 ? {display: "block", height:'auto'} : {display: "none"}
              } className="classes">
              <Student />
            </div>
            <Timetable />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Create