import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {CreateComment} from '../../../../reducer/crmRedux/action';

const Studentinfo = ({studentData}) => {
  const [comment, setComment] = useState({
    comment:"",
    id:""
  })
  const dispatch = useDispatch()
  
  const {class_Name, date, student_Name, _id,class_Comment }  = studentData

    useEffect(() => {
      
    setComment({
      ...comment, id:_id
    })
    }, [])
  
  const lessonDate = new Date(date)
  // console.log(("0" + lessonDate.getUTCHours()).slice(-2))
  return (
    <article className='student_info' >
      <div className="card" >
        <div className="card-header">
          Student info
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Name: </b> {student_Name} </li>
          <li className="list-group-item"> <b>time: </b>{`${lessonDate.getUTCHours()}:${lessonDate.getUTCMinutes()}`}</li>
          <li className="list-group-item"> <b>Class Name: </b> <p> {class_Name} </p> </li>
          <li className="list-group-item"> <b>Class Name: </b> <p> {class_Comment} </p> </li>
        </ul>
      </div>
      <form>
        <input type="text" placeholder='Write comment' onChange={(e) =>{
          setComment({ ...comment, comment: e.target.value })
        }} />
        <button
          onClick={(e) =>{
            e.preventDefault()
            dispatch(CreateComment(comment))
            console.log(comment)
          }}
        >
          add comment
        </button>
      </form>
    </article>
  )
}

export default Studentinfo