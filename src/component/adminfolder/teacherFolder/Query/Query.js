import React,{useState} from 'react';
import Table from './Table';
import { useSelector,useDispatch } from 'react-redux';
import { searchByDateForTeacher } from '../../../../reducer/crmRedux/action';
import Swal from 'sweetalert2'

const Query = ({ReturnParms}) => {
  const {Return, setReturn}= ReturnParms
  const [Query, setQuery] = useState({
    from:'',
    to:'',
    state:0
  })
  const [id, setId] = useState(0)
  const dispatch = useDispatch()
  const table = useSelector((state) => state.teachertable)

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  })

  const search = (e) =>{
    e.preventDefault()
    if(Query.from){
      setTimeout(() => {
        setReturn(Return + 1)
      }, 2000);
      Toast.fire({
        icon: 'success',
        title: 'Loading ...'
      })
      dispatch(searchByDateForTeacher(Query))
    }else{
      Swal.fire({
        color:"red",
        text: "please insert date",
      })
    }
  }


  return (
    <>
    <article  className='Schedule-section' >
      
      {
        Return >= 1 ? (
          <Table 
            State={{id, setId}}
            table={table}
            ReturnParms={{Return, setReturn}}
            />
        ) : (
          <form action="">
            <input type="date" onChange={(e) => setQuery({
              ...Query, from:e.target.value
            })} />
            <button onClick={(e)  => {
              search(e)
            }} >
              Query
            </button>
          </form>
        )
      }
    </article>
    </>
    
  )
}

export default Query