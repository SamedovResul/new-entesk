import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {GetTimetable} from '../../../reducer/crmRedux/action'

const Admin = () => {
  let state = useSelector((state) => state.timetableReducer);
  // console.log(state.authData.Data.timetable)
  const dispatch = useDispatch();
  // get data from back

  useEffect(() => {
    dispatch(GetTimetable())
  }, [])

  


  return (
  <>
  {
    state ? (
      <div className='container main-admin-page' >
      <div className="container-fluid">
        <div className="row">
        {
          state.map((timetable,index) =>{
            const {
              student_Name,
              teacher_Name,
              class_Name,
              date,
              _id
            } = timetable
            // console.log(time)
              const time = new Date(date)
              const minute = time.getMinutes()
              const hour = time.getHours()
              const day = time.getDay()
              const month = time.getMonth()
              const year = time.getFullYear()

            return(

              <div key={index} className="col-md-6">
                <div className='table-box' >
                  <p> <b>teacher:</b>  {teacher_Name} </p>
                  <p> <b>student:</b>  {student_Name} </p>
                  <p> <b>class:</b>  {class_Name} </p>
                  <p> <b>class state</b>  <span>nun</span> </p>
                  <p> <b>class information:</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error impedit iusto nihil magni facilis veniam dolores mollitia nesciunt ipsam, temporibus, architecto suscipit dolore est natus, et reiciendis corrupti tenetur!</p>
                  <p> <b>date:</b> <span>{`${year} ${month} ${day} ${hour}:${minute}`} </span></p>
                  <div className='btn-div'>
                    <button >
                      confirm class
                    </button>
                    <button >
                      gancel class
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
        <Link to="/Create">
          <button className='create-button'>
            create
          </button>
        </Link>
        </div>
      </div>
    </div> 
    ):(
      <p>wait</p>
    )
  }
    
  </>
    
  )
}

export default Admin