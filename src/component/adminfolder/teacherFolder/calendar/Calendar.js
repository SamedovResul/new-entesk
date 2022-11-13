import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { searchByDateForTeacher } from '../../../../reducer/crmRedux/action'
import Swal from 'sweetalert2'

const Calendar = () => {
const dispatch = useDispatch()
const [boolean, setBoolean] = useState(false)
const [Query, setQuery] = useState({
  from:'',
  to:''
})


let surdentCalendar = useSelector((state) => state.teachertable)


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
      
    dispatch(searchByDateForTeacher(Query))
  }, [])
  

  return (
    <article className='Calendar-section' >
      <table>
      <tbody>
      <tr>
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
          (surdentCalendar.map((data,i) =>{
            const {student_Name,date,class_Name,_id} = data
            const lessonDate = new Date(date)
            return(
              <tr key={i} >
                <td> {student_Name} </td>
                <td> {`${lessonDate.getUTCHours()}:${lessonDate.getUTCMinutes()}`} </td>
                <td> {class_Name} </td>
                
              </tr>
            )
          })) : (
            <></>
          )
        }
      </tbody>
      </table>
    </article>
  )
}



export default Calendar