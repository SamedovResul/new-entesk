import React,{useEffect,useState}  from 'react'
import Studentinfo from './Studentinfo'
import Moment from 'react-moment';


const Table = ({State,ReturnParms,count,table,Query,setQuery,dispatch,searchByDateForTeacher,number,getLimit}) => {
  const {Return, setReturn}= ReturnParms
  const {id, setId} = State

  const [CountDate, setCountDate] = useState('')
  let studentData = table.filter((data) =>  data._id === id ) 
  

  const weekday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  
  

  
  useEffect(() => {
    if(Query.skip === 1){
      setCountDate(count) 
    }
      dispatch(searchByDateForTeacher(Query))
  }, [count])

  // sorting data
  table.sort( function(a, b) {
    return a.date.localeCompare(b.date);
  })
  console.log(table)
  return (
    <div>
      {
        Return >= 2 ? (
          <>
            {
              studentData.length > 0 && (
                <Studentinfo studentData={studentData} />
              )
            }
          </>
        ):(
          
          <>
          {/* for desktop */}
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
                  table.length > 0 && (
                  table.map((data,i) =>{
                    const {student_Name,date,class_Name,_id, category_name} = data
                    const lessonDate = new Date(date)
                    return(
                        <tr key={i} >
                          <td>{weekday[lessonDate.getDay()]}</td>
                          <td> {student_Name} </td>
                          <td> <Moment format="HH:mm ">{date}</Moment> </td>

                          <td> {lessonDate.getMonth().toString().length === 1 ? `0${lessonDate.getMonth() + 1}` :  lessonDate.getMonth() + 1}/
                          {lessonDate.getDate().toString().length === 1 ? `0${lessonDate.getDate()}` :  lessonDate.getDate()}  </td>
                          <td> {class_Name} </td>
                          <td> {category_name} </td>
                          <td>
                            <button onClick={() => {
                              setId(_id)
                              setReturn(Return + number)
                            } } >
                              select
                            </button>
                          </td>
                        </tr>
                    )
                  })
                  )
                }
                
              </tbody>
            </table>


            {/* for mobile */}
            
            <div className="mobile-box">
              {
                table.length > 0 && (
                  table.map((data,i) =>{
                    
                    const {student_Name,date,class_Name,_id, category_name} = data
                    const lessonDate = new Date(date)

                    return(
                      <div key={i} > 
                        <p> <b> Name : </b>   {student_Name} </p>
                        <p> <b> Time : </b> <Moment format="HH:mm ">{date}</Moment> </p>
                        <p> <b> date : </b> {lessonDate.getMonth().toString().length === 1 ? `0${lessonDate.getMonth() + 1}` :  lessonDate.getMonth() + 1}/
                          {lessonDate.getDate().toString().length === 1 ? `0${lessonDate.getDate()}` :  lessonDate.getDate()} </p>
                        <p> <b> Class Name : </b> {class_Name} </p>
                        <p> <b> category info : </b> {category_name} </p>
                        <button onClick={() => {
                            setId(_id)
                            setReturn(Return + number)
                          } } >
                            select
                        </button>
                      </div>
                    )
                  })
                )
              }

            </div>
            {
              CountDate >= 6 &&
                <button 
                onClick={(e) =>{
                  setQuery({
                    ...Query, 
                    skip:Query.skip + 1
                  })
                  setCountDate(CountDate - 5)
                  getLimit()
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
                  getLimit()
                }}
                >
                  prev
                </button>
            }
          </>

        )
      }

    </div>
  )
}

export default Table