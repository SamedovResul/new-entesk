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
  const history = useHistory();
  // console.log(state)
  // let userData = JSON.parse(localStorage.getItem('profile'))
  
  // get data from back

  useEffect(() => {
    dispatch(GetTimetable())
  }, [])

  // log out----
  const logOut = () =>{
    dispatch({ type:"LOGOUT" })
    history.push("/login")
  }


  // create timeTable 
  return (
  <>
  {
    state ? (
      <div className='container' >
      <div className="container-fluid">
        <div className="row">
        {
          state.map((time,index) =>{
            const {class_Name, student_Name, teacher_Name} = time
            // console.log(time)


            return(
              <table key={index}  className="table" >
                <tbody>
                  <tr>
                    <th>{teacher_Name}</th>
                  </tr>
                  <tr>
                    <td>{class_Name}</td>
                  </tr>
                  <tr>
                    <td>{student_Name}</td>
                  </tr>
                </tbody>
              </table>
            )
          })
        }
        <Link to="/Create">
          <button className='create-button'>
            create
          </button>
        </Link>
        <button
          onClick={()=>{
            logOut()
          }}
        >
          logOute
        </button>
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