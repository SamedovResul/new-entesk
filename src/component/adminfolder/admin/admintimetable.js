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
    name:''
  })
  // console.log(state)
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
    if(date.from && date.to){
      dispatch(searchByDate(date))
    }else{
      alert('you must insert date')
    }
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
              <label htmlFor="name">Name:
                 <input type="text" id="name" name="name"
                  
                  onChange={(e) =>{
                    getDate({
                      ...date,name:e.target.value
                    })
                  }}
                />
              </label>
              {/* <button onClick={Searching()} > search </button> */}
              <button onClick={Searching} > search </button>
              {/* <button onClick={today} >today</button> */}
            </form>
            <button onClick={today} >today</button>
          </div>
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
                  const day = time.getDay()
                  const month = time.getMonth()
                  const year = time.getFullYear()
  
                return(
  
                  <div key={index} className="col-md-6">
                    <div className='table-box' >
                      <p> <b>teacher:</b>  {teacher_Name} </p>
                      <p> <b>student:</b>  {student_Name} </p>
                      <p> <b>class:</b>  {class_Name} </p>
                      <p> <b>class information:</b> {class_Comment} </p>
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
                      </div>
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
                  const minute = time.getMinutes()
                  const hour = time.getHours()
                  const day = time.getDate()
                  const month = time.getMonth()
                  const year = time.getFullYear()
  
                return(
  
                  <div key={index} className="col-md-6">
                    <div className='table-box' >
                      <p> <b>teacher:</b>  {teacher_Name} </p>
                      <p> <b>student:</b>  {student_Name} </p>
                      <p> <b>class:</b>  {class_Name} </p>
                      <p> <b>class information:</b> {class_Comment} </p>
                      <p> <b>date:</b> <span>{`${year} ${month} ${day} ${hour}:${minute}`} </span></p>
                      <p>
                        <b>class state</b>
                        {
                          table_State === 0 ?( <span> undefined </span> ):( <span>confirm</span> )
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