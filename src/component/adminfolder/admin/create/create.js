import React, {useState} from 'react'
import { useSelector } from 'react-redux';
// import {CreateTimetable} from '../../../reducer/crmReducer/action'
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import Classes from './classes';
import Teachers from './teachers';
import Student from './students';
import Timetable from './timetable'


const Create = () => {

  return (
    <div className="container create-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Timetable />
            {/* <Classes />
            <Teachers />
            <Student />
            <Timetable /> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Create