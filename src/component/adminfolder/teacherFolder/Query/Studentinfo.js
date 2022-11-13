import React from 'react'

const Studentinfo = ({studentData}) => {

  const {class_Name, date, student_Name }  = studentData

  const lessonDate = new Date(date)
  console.log(("0" + lessonDate.getUTCHours()).slice(-2))
  return (
    <article>
      <div className="card" >
        <div className="card-header">
          Student info
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Name: </b> {student_Name} </li>
          <li className="list-group-item"> <b>time: </b>{`${lessonDate.getUTCHours()}:${lessonDate.getUTCMinutes()}`}</li>
          <li className="list-group-item"> <b>Class Name: </b> <p> {class_Name} </p> </li>
        </ul>
      </div>
    </article>
  )
}

export default Studentinfo