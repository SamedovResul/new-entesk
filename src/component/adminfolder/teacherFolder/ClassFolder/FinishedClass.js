import React,{useState} from 'react'
import ClassList from './ClassList'
import { useSelector,useDispatch } from 'react-redux';
import { searchByDateForTeacher } from '../../../../reducer/crmRedux/action';
import Swal from 'sweetalert2'

const FinishedClass = ({ReturnParms}) => {
  const [Query, setQuery] = useState({
    from:'',
    to:''
  })
  const {Return, setReturn} = ReturnParms


  const dispatch = useDispatch()
  const table = useSelector((state) => state.teachertable)

  console.log(table)

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })
  const search = (e) =>{
    e.preventDefault()

    if(Query.from || Query.to){
      dispatch(searchByDateForTeacher(Query))
      setTimeout(() => {
        setReturn(Return + 1)
      }, 2000);
      
      setQuery({
        from:'',
        to:''
      })

      Toast.fire({
        icon: 'success',
        title: 'Loading ...'
      })
    }else{
      Swal.fire({
        color:"red",
        text: "please insert date",
      })
    }

  }

  return (
    <article className='Finished-class-Section'>
      {
        Return >= 1 ? 
        (
          <ClassList table={table} />
        ) 
        :
        (
          <form action="">
            <p>Start Date</p>
            <input type="date" onChange={(e) => setQuery({
              ...Query ,from: e.target.value
            }) } />
            <p>End Date</p>
            <input type="date" onChange={(e) => setQuery({
              ...Query ,to: e.target.value
            }) } />
            <button onClick={(e) => {
              search(e)
            } }>
              Query
            </button>
          </form> 
        )
      }
      {/* <form action="">
        <p>Start Date</p>
        <input type="date"  />
        <p>End Date</p>
        <input type="date"  />
        <button>
          Query
        </button>
      </form> */}
    </article>
  )
}

export default FinishedClass