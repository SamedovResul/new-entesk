import React from 'react'
import { useSelector } from 'react-redux';
const Teacher = () => {
  let state = useSelector((state) => state.admin);
  console.log(state.authData.Data.timetable)
  return (
    <>
      {
        state.authData.Data.timetable.map((time,index) =>{
          const {class_Name, student_Name, teacher_Name} = time
          console.log(time)


          return(
            <table key={index}  className="table" >
              <tbody>
                <tr>
                  <th>{class_Name}</th>
                </tr>
                <tr>
                  <td>{student_Name}</td>
                </tr>
              </tbody>
            </table>
          )
        })
      }
    </>
  )
}

export default Teacher