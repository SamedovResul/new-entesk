import React,{useState} from 'react'

const ClassList = ({table}) => {

  const [boolean, setBoolean] = useState(false)
  setTimeout(() => {
    setBoolean(true)
  }, 3000);
  return (
    <article>
      <h1> class list </h1>
      <table>
            <tbody>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Class Name</th>
            <th>Class State</th>
            <th>Class Information</th>
          </tr>
        {
          (table.map((data,i) =>{
            const {student_Name,date,class_Name,_id,table_State,class_Comment} = data
            const lessonDate = new Date(date)
            return(
              <tr key={i} >
                <td> {student_Name} </td>
                <td> {`${lessonDate.getUTCHours()}:${lessonDate.getUTCMinutes()}`} </td>
                <td> {class_Name} </td>
                <td> {table_State === 1 ? "Təsdiq olunmus": 'legv olunmus' }  </td>
                <td> {class_Comment} </td>
              </tr>
            )
          })) 
        }
            </tbody>
          </table>
    </article>
  )
}

export default ClassList