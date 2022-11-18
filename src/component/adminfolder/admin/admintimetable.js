import React, {useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {GetTimetable,searchByDate,confirmOrCancel} from '../../../reducer/crmRedux/action'

const Admin = () => {
  const [search,setSearch] = useState(false)
  const [data,setData] =useState(0)
  // console.log(search)
  let state = useSelector((state) => state.timetableReducer);
  const searchingState = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();
  const [date, getDate] = useState({
    from:'',
    to:'',
    teacher_Name:'',
    student_Name:''
  })

  // get data from back
  useEffect(() => {
    dispatch(GetTimetable())
  }, [])

  useEffect(() => {
    dispatch(GetTimetable())
  }, [search])
  
  // searching table

  const Searching = (e) =>{
    e.preventDefault();
      dispatch(searchByDate(date))
      setSearch(true)
  }


  const today =(e) =>{
    e.preventDefault();
    setSearch(false)
  }
    
  const ConCanHandler = (id,conData) =>{
    console.log(id,conData)
    let data = {
      table_State:conData
    }
    dispatch(confirmOrCancel(id,data))
  }
  // confirm or cancel
  return (
  <>
  {
    state ? (
      <div className='container main-admin-page' >
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-12">
            <form action="" className='get-date'>
            <label htmlFor="date">from:
            <input type="datetime-local" id="date" name="date"
                
                onChange={(e) =>{
                  getDate({
                    ...date ,from: e.target.value
                  })
                }}
              />
              </label>
              <label htmlFor="date">to:
                <input type="datetime-local" id="date" name="date"
                  
                  onChange={(e) =>{
                    getDate({
                      ...date,to:e.target.value
                    })
                  }}
                />
              </label>
              <label htmlFor="name"> Teacher Name:
                 <input type="text" id="name" name="name"
                  
                  onChange={(e) =>{
                    getDate({
                      ...date,teacher_Name:e.target.value
                    })
                  }}
                />
              </label>
              <label htmlFor="name"> Student Name:
                 <input type="text" id="name" name="name"
                  
                  onChange={(e) =>{
                    getDate({
                      ...date,student_Name:e.target.value
                    })
                  }}
                />
              </label>
              <button onClick={Searching} > search </button>
            </form>
            <button onClick={today} >today</button>
          </div>
          {/* <p> <b> Ümumi say: </b>
            { 
              state ? 
              ( <span>{state?.length}</span> )
              :(<span>{searchingState?.length}</span>) 
            }
          </p> */}
            {
            
            search ? (
              searchingState.map((timetable,index) =>{
                const {
                  student_Name,
                  teacher_Name,
                  class_Name,
                  date,
                  _id,
                  class_Comment,
                  table_State
                } = timetable
                  const time = new Date(date)
                  const minute = time.getMinutes()
                  const hour = time.getHours()
                  const dates = time.getDay()
                  const month = time.getMonth()
                  const year = time.getFullYear()
  
                return(
  
                  <div key={index} className="col-md-6">
                    
                    <div className='table-box' >
                      <p> <b>teacher:</b>  {teacher_Name} </p>
                      <p> <b>student:</b>  {student_Name} </p>
                      <p> <b>class:</b>  {class_Name} </p>
                      <p> <b>class information:</b> {class_Comment} </p>
                      <p> <b>time:</b> <span>{`${time.getUTCHours().toString().length === 1 ? `0${time.getUTCHours()}`:`${time.getUTCHours()}` }
                        :${time.getUTCMinutes().toString().length === 1 ? `0${time.getUTCMinutes()}`:`${time.getUTCMinutes()}` }`}</span></p>
                      <div>
                      <p><b>date:</b> {year}:
                        {month.toString().length === 1 ? `0${month + 1}` :  month + 1}: 
                        {dates.toString().length === 1 ? `0${dates}` :  dates} 
                        </p>
                        <b>class state</b>
                        {
                          table_State === 0 ?( <span style={{color:"gray", fontWeight:"700"}} > təsdiq olunmamış </span> )
                          :table_State === 1 ? ( <span style={{color:"green", fontWeight:"700"}} > təsdiq olunmuş </span> ) 
                          : table_State === 2 ? ( <span style={{color:"red", fontWeight:"700"}}> imtina olunmuş </span> )
                          :( <span> something wrong </span> )
                        }
                      </div>
                      {
                        table_State !== 1 && table_State !== 2 && (
                          <div className='btn-div'>
                            <button onClick={()=>ConCanHandler(_id,1)} >
                              Confirm class
                            </button>
                            <button onClick={()=>ConCanHandler(_id,2)} >
                              Cancel class
                            </button>
                          </div>
                        )
                      }
                      
                    </div>
                  </div>
                )
              })
              ) :(
              state.map((timetable,index) =>{
                const {
                  student_Name,
                  teacher_Name,
                  class_Name,
                  date,
                  _id,
                  class_Comment,
                  table_State
                } = timetable
                  const time = new Date(date)
                  const dates = time.getDate()
                  const month = time.getMonth()
                  const year = time.getFullYear()
  
                return(
  
                  <div key={index} className="col-md-6">
                    <div className='table-box' >
                      <p> <b>teacher:</b>  {teacher_Name} </p>
                      <p> <b>student:</b>  {student_Name} </p>
                      <p> <b>class:</b>  {class_Name} </p>
                      <p> <b>class information:</b> {class_Comment} </p>
                      <p> <b>time:</b> <span>{`${time.getUTCHours().toString().length === 1 ? `0${time.getUTCHours()}`:`${time.getUTCHours()}` }
                        :${time.getUTCMinutes().toString().length === 1 ? `0${time.getUTCMinutes()}`:`${time.getUTCMinutes()}` }`}</span>
                      </p>
                      <p><b>date:</b> {year}:
                        {month.toString().length === 1 ? `0${month + 1}` :  month + 1}: 
                        {dates.toString().length === 1 ? `0${dates}` :  dates} 
                        </p>
                      <p>
                        <b>class state</b>
                        {
                          table_State !== 1 ?( <span> Təsdiq olunmamış </span> ):( <span>Təsdiqlənmiş</span> )
                        }
                      </p>
                      <div className='btn-div'>
                        <button onClick={()=>ConCanHandler(_id,1)} >
                          Confirm class
                        </button>
                        <button onClick={()=>ConCanHandler(_id,2)} >
                          Cancel class
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            )
            
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