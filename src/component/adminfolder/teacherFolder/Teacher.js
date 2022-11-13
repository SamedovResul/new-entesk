import React, {useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {GetTeacherTable,CreateComment} from '../../../reducer/crmRedux/action';
import './teacher.css'
import {useSpring, animated } from 'react-spring'
import Query from './Query/Query';
import Calendar from './calendar/Calendar';
import FinishedClass from './ClassFolder/FinishedClass';


const Teacher = () => {
  const [data, setData] = useState({
    class_Comment:'',
  })
  const [QueryData, setQuery] = useState({
    from:'',
    to:''
  })
  const [studentName, setStudentName] = useState('');
  const [id, setId] = useState(10);
  const [Return, setReturn] = useState(0)
  const profile = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  // get teacher data
  useEffect(() => {
    dispatch(GetTeacherTable(profile.superAdmin._id))
  }, [])

  // const style = {
  //   display: id ? 'flex': 'none'
  // };

  // // select student
  // useEffect(() => {
  //   state.map((Id) =>{
  //     const {_id,student_Name} =Id
  //     if(_id === id){
  //       setStudentName('')
  //       setStudentName(student_Name)
  //     }
  //   })
  // }, [id]);


  // // post teacher comment 
  // const createComment = () =>{
  //   console.log(id)
  //   dispatch(CreateComment(id,data))
  //   setData({
  //     class_Comment:'',
  //   })
  //   setId(0)
  //   setStudentName('')
  // }

  const [div, setDiv] = useState(10)
  const container = useSpring({
		to: [{height: div < 10  ? '500px' : '50px' }],
		from: {height: '50px'},
    config: {
			duration: 500
		}
	})

  const containers = useSpring({
		to: [{height: div === 10  ? '60px' : '0px',}],
		from: {height: '0px'},
    config: {
			duration: 500
		}
	})

  const text = useSpring({
		to: [{opacity: div === 10  ? '1' : '0',}],
		from: {opacity: '0'},
    config: {
			duration: 300
		}
	})


  const btn = useSpring({
		to: [{opacity: div === 10  ? '0' : '1',}],
		from: {opacity: '0'},
    config: {
			duration: 300
		}
	})

  const component = [
    {
      name:'My schedule',
      className:'Schedule'
    },
    {
      name:'My Calendar',
      className:'Calendar'
    },
    {
      name:'My Finished Classes',
      className:'Classes'
    },
  ]

  return (
    <>
      <div className="container main-teacher-page ">
        <div className="container-fluid">
          <div className="row">
            {
              component.map((div, i) =>{
                  const {name,className} = div

                  return(
                    <div  key={i}  className={`col-md-4 teacher-menu `}>
                      <animated.div style={containers}  onClick={() => setDiv(i)}>
                        <animated.p style={text} > {name} </animated.p> 
                      </animated.div>
                    </div>
                  )
              })
            }
            <div className="col-md-12">
              <animated.div style={container} className="infoComponent">
                {
                   Return === 0  ? 
                  (
                    < animated.button style={btn}  onClick={() => setDiv(10)} className='close'>
                        x
                    </animated.button>
                  ): 
                  (
                    <span 
                      onClick={() => setReturn(Return - 1)}  > 
                      &#9664;
                    </span>
                  )
                }
              {
                div === 0 ? (
                  <Query ReturnParms={{Return, setReturn}} />
                ):div === 1 ? (
                  <Calendar  />
                ): div === 2 ?(
                  <FinishedClass ReturnParms={{Return, setReturn}} />
                ):(
                  <></>
                )
              }

              </animated.div>
            </div>
            {/* <div className="col-md-12">
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
                      </div>
                    </div>
                  </div>
                )
              })
            } */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Teacher
