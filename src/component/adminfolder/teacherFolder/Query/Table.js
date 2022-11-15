import React  from 'react'
import Studentinfo from './Studentinfo'

const Table = ({State,ReturnParms,table}) => {
  const {Return, setReturn}= ReturnParms
  const {id, setId} = State

  
  const studentData = table.filter((data) =>  data._id === id )

  const weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  return (
    <article>
      {
        Return >= 2 ? (
          <Studentinfo studentData={studentData[0]} />
        ):(
          <table>
            <tbody>
              <tr>
                <th>Week day</th>
                <th>Name</th>
                <th>Time</th>
                <th>Class Name</th>
                <th>Select Student</th>
              </tr>
              {
                table.map((data,i) =>{
                  const {student_Name,date,class_Name,_id} = data
                  const lessonDate = new Date(date)
                  console.log(lessonDate.getDay())
                  return(
                      <tr key={i} >
                        <td>{weekday[lessonDate.getDay()]}</td>
                        <td> {student_Name} </td>
                        <td> {`${lessonDate.getUTCHours()}:${lessonDate.getUTCMinutes()}`} </td>
                        <td> {class_Name} </td>
                        <td>
                          <button onClick={() => {
                            setId(_id)
                            setReturn(Return + 1)
                          } } >
                            select
                          </button>
                        </td>
                      </tr>
                  )
                })
              }
              
            </tbody>
          </table>
        )
      }

    </article>
  )
}

export default Table