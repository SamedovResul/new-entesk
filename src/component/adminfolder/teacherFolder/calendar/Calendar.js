import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { GetTeacherCalendar } from '../../../../reducer/crmRedux/action'
import Swal from 'sweetalert2'

const Calendar = () => {
const dispatch = useDispatch()
const [boolean, setBoolean] = useState(false)
const [Query, setQuery] = useState({
  from:'',
  to:'',
  state:0,
})

const table = useSelector((state) => state.teachertable.table)


  setTimeout(() => {
    setBoolean(true)
  }, 3000);

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })

  useEffect(() => {
    let date = new Date()
      Query.from = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      setTimeout(() => {
        Toast.fire({
          icon: 'success',
          title: 'Loading ...'
        })
      }, 500);
      
    dispatch(GetTeacherCalendar())
  }, [])
  
  console.log(table)
  return (
    <article className='Calendar-section' >
      <table>
      <tbody>
        {
          boolean? 
          ( <> 
            {
              table.map((data,i) =>{
                const {dateOne,dateTwo,timeOne,timeTwo,studentName} = data
    
                return(
                  <div key={i}>
                  <th> Student </th>
                  <th> {dateOne} </th>
                  <th> {dateTwo} </th>
                  
                  <tr key={i} >
                    <td> {studentName} </td>
                    <td> {timeOne} </td>
                    <td> {timeTwo} </td>
                    
                  </tr>
                  </div>
                )
              })
            }
          </> ):(
            <></>
          )
        }
      {/* <tr>
        {
           boolean? (
            <>
              <th>Name</th>
              <th>Time</th>
              <th>Class Name</th>
            </>
           ):(
            <></>
           )
        }

      </tr>
        {
          boolean? 
          (table.map((data,i) =>{
            const {student_Name,date,class_Name,_id} = data
            const lessonDate = new Date(date)
            return(
              <tr key={i} >
                <td> {student_Name} </td>
                <td> {`${lessonDate.getUTCHours().toString().length === 1 ? `0${lessonDate.getHours()}`:`${lessonDate.getHours()}`}
                        :${lessonDate.getUTCMinutes().toString().length === 1 ? `0${lessonDate.getUTCMinutes()}`:`${lessonDate.getUTCMinutes()}`}`} </td>
                <td> {class_Name} </td>
                
              </tr>
            )
          })) : (
            <></>
          )
        } */}
      </tbody>
      </table>
    </article>
  )
}



export default Calendar