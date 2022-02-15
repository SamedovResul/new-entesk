import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Admin = () => {
  let state = useSelector((state) => state.admin);
  console.log(state.authData.Data.timetable)
  return (
  <>
    <div className='container' >
      <div className="container-fluid">
        <div className="row">
        {
          state.authData.Data.timetable.map((time,index) =>{
            const {class_Name, student_Name, teacher_Name} = time
            console.log(time)


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
        
        </div>
      </div>
    </div>
  </>
    
  )
}

export default Admin