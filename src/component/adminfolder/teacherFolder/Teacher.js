import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {GetTeacherTable,CreateComment} from '../../../reducer/crmRedux/action';


const Teacher = () => {
  const [data, setData] = useState({
    class_Comment:'',
  })
  const [studentName, setStudentName] = useState('');
  const [id, setId] = useState(0);
  const state = useSelector((state) => state.teachertable);
  const profile = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  // get teacher data
  useEffect(() => {
    dispatch(GetTeacherTable(profile.superAdmin._id))
  }, [])

  const style = {
    display: id ? 'flex': 'none'
  };

  // select student
  useEffect(() => {
    state.map((Id) =>{
      const {_id,student_Name} =Id
      if(_id === id){
        setStudentName('')
        setStudentName(student_Name)
      }
    })
  }, [id]);


  // post teacher comment 
  const createComment = () =>{
    console.log(id)
    dispatch(CreateComment(id,data))
    setData({
      class_Comment:'',
    })
    setId(0)
    setStudentName('')
  }

  return (
    <>
      <div className="container main-teacher-page ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className=" create-comment" style={style} >
                <form action="">
                    <label htmlFor="comment">
                      <b> {studentName} </b>
                    </label>
                      <textarea name="comment" id="comment" cols="100" rows="5" value={data.class_Comment} onChange={(e) =>{
                          setData({
                          ...data, class_Comment: e.target.value
                          })
                        }} >
                      </textarea>
                  
                </form>
                  <button onClick={() =>{createComment()}}>
                    create
                  </button>
              </div>
            </div>
            {
              state.map((timetable,index) =>{
                const {
                  student_Name,
                  teacher_Name,
                  class_Name,
                  date,
                  class_Comment,
                  _id,
                  table_State
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
                      <p> <b>class information:</b> {class_Comment}</p>
                      <p> <b>date:</b> <span>{`${year} ${month} ${day} ${hour}:${minute}`} </span></p>
                      <p>
                        <b>class state</b>
                        {
                          table_State === 0 ?( <span style={{color:"yellow", fontWeight:"700"}} > undefined </span> )
                          :table_State === 1 ? ( <span style={{color:"green", fontWeight:"700"}} > Confirm </span> ) 
                          : table_State === 2 ? ( <span style={{color:"red", fontWeight:"700"}}> Cancel </span> )
                          :( <span> something wrong </span> )
                        }
                      </p>
                      <div className='btn-div'>
                        <button onClick={() => setId(_id)} >
                          add Comment
                        </button>
                        {/* <button >
                          gancel class
                        </button> */}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Teacher
