import React, {useState} from 'react'
import { useSelector } from 'react-redux';
// import {CreateTimetable} from '../../../reducer/crmReducer/action'
import { useHistory } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import Classes from './classes'

const Create = () => {
  // let state = useSelector((state) => state.crmData);
  // // console.log(state.authData.Data)
  // const [newTimetable, setNewtimetable] = useState({
  //   classesId:'',
  //   studentsId:'',
  //   teacherId:''
  // })
  

  // const dispatch = useDispatch();
  // const history = useHistory();
  // const dispatchAction = (e) =>{
  //   e.preventDefault()
  //   console.log(newTimetable)
  //   // dispatch(CreateTimetable(newTimetable, history))
  // }


  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-12">
            create
          </div>
          <div className="col-md-12">
            <Classes />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Create