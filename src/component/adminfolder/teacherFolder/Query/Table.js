import React,{useEffect,useState}  from 'react'
import Studentinfo from './Studentinfo'

const Table = ({State,ReturnParms,count,table,Query,setQuery,dispatch,searchByDateForTeacher}) => {
  const {Return, setReturn}= ReturnParms
  const {id, setId} = State

  const [CountDate, setCountDate] = useState('')
  const studentData = table.filter((data) =>  data._id === id )
  const weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  
  useEffect(() => {
    if(Query.skip === 1){
      setCountDate(count) 
    }
      dispatch(searchByDateForTeacher(Query))
      console.log(table)
  }, [Query.skip])

  // useEffect(() => {
  //   searchByDateForTeacher(Query)
  // }, [])
  
  // weekday.map((day,i) =>{


  //   table.map((data) =>{
  //     const {date,student_Name} = data
  //     const lessonDate = new Date(date)
  //   })
  // })
  console.log(table)
  return (
    <article>
      {
        Return >= 2 ? (
          <Studentinfo studentData={studentData[0]} />
        ):(
          <>
          <table>
            <tbody>
              <tr>
                <th>Week day</th>
                <th>Name</th>
                <th>Time</th>
                <th>date</th>
                <th>Class Name</th>
                <th>category info</th>
                <th>Select Student</th>
              </tr>
              {
                table.map((data,i) =>{
                  const {student_Name,date,class_Name,_id, category_name} = data
                  const lessonDate = new Date(date)
                  return(
                      <tr key={i} >
                        <td>{weekday[lessonDate.getDay()]}</td>
                        <td> {student_Name} </td>
                        <td> {`${lessonDate.getHours().toString().length === 1 ? `0${lessonDate.getHours()}`:`${lessonDate.getHours()}`}
                        :${lessonDate.getUTCMinutes().toString().length === 1 ? `0${lessonDate.getUTCMinutes()}`:`${lessonDate.getUTCMinutes()}`}`} </td>

                        <td> {lessonDate.getMonth().toString().length === 1 ? `0${lessonDate.getMonth() + 1}` :  lessonDate.getMonth() + 1}/
                        {lessonDate.getDate().toString().length === 1 ? `0${lessonDate.getDate()}` :  lessonDate.getDate()}  </td>
                        <td> {class_Name} </td>
                        <td> {category_name} </td>
                        <td>
                          <button onClick={() => {
                            setId(_id)
                            setReturn(Return + 1)
                          } } >
                            select
                          </button>
                        </td>
                      </tr>
                  )
                })
              }
              
            </tbody>
          </table>

          {
            CountDate >= 6 &&
              <button 
              onClick={(e) =>{
                setQuery({
                  ...Query, 
                  skip:Query.skip + 1
                })
                setCountDate(CountDate - 5)
              }}
              >
                next
              </button>
          }
          {
            Query.skip !== 1 && <button 
              onClick={(e) =>{
                setQuery({
                  ...Query, 
                  skip:Query.skip - 1
                })
                setCountDate(CountDate + 5)
              }}
              >
                prev
              </button>
          }
          
          </>
        )
      }

    </article>
  )
}

export default Table