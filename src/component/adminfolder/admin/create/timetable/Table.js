import React from 'react'

const Table = ({tableData,setId}) => {
  return (
    <>
      {
              tableData.map((timetable, index) =>{
                const {
                  student_Name,
                  teacher_Name,
                  class_Name,
                  date,
                  _id,
                  table_State
                } =timetable
                const time = new Date(date)
                const minute = time.getMinutes()
                const hour = time.getHours()
                const day = time.getDay()
                const month = time.getMonth()
                const year = time.getFullYear()
                // console.log(year)
                return(

                  <div key={index} className='col-md-4'>
                    <div className="info-table">
                      
                        <p><b>teacher:</b>  {teacher_Name} </p>
                        <p><b>student:</b>  {student_Name} </p> 
                        <p><b>class:</b> {class_Name}  </p>  
                        <p><b>date:</b>{`${year} ${month} ${day} ${hour}:${minute}`} </p>
                        <p> <b>class state</b>  <span>nun</span> </p>
                        <p>
                        <b>class state</b>
                        {
                          table_State === 0 ?( <span> undefined </span> ):( <span>confirm</span> )
                        }
                      </p>
                        <button
                        onClick={()=>{
                          setId(_id)
                        }}
                        >
                          update
                        </button>
                    </div>
                  </div>

                )
              })
            }
    </>
  )
}

export default Table