import React from 'react'
import Moment from 'react-moment';
import { Button } from "@mui/material";
const Tables = ({state, teacher, ConCanHandler}) => {
  


  
  return (
    <>
      {
        teacher.map((teacher,i) => {
          const {name, _id} = teacher
      

          return(
            <>
              <h2 key={i} >{name}</h2>
              
              {
                state.filter((table) => table.teacher_Id === _id)
                .map((table,index) =>{
                  const {
                    teacher_Name,
                    StudentsArray,
                    class_Name,
                    date,
                    _id,
                    class_Comment,
                    table_State,
                  } = table;
                  let time, dates, month, year;
                    time = new Date(date);
                    dates = time.getDate();
                    month = time.getMonth();
                    year = time.getFullYear();
                    return (
                      <div key={index} className="table-box" >
                        <p>
                          {" "}
                          <b>teacher:</b> {teacher_Name}{" "}
                        </p>
                        <p>
                          {" "}
                          <b> Student: </b> 
                          {
                            StudentsArray.map((student,i) =>{
                              const {student_Name} = student
                              return(
                                <span key={i} > {student_Name}, </span>
                              )
                            })
                          }
                        </p>
                        <p>
                          {" "}
                          <b>class:</b> {class_Name}{" "}
                        </p>
                        <p>
                          {" "}
                          <b>class information:</b> {class_Comment}{" "}
                        </p>
                        <p>
                          {" "}
                          <b>time:</b>{" "}
                          <Moment format="HH:mm " utc>{time}</Moment>
                        </p>
                        <p>
                          <b>date:</b> {year}/
                          {month.toString().length === 1
                            ? `0${month + 1}`
                            : month + 1}
                          /
                          {dates.toString().length === 1
                            ? `0${dates}`
                            : dates}
                        </p>
                        <p>
                          <b>class state</b>
                          {table_State !== 1 ? (
                            <span> Təsdiq olunmamış </span>
                          ) : (
                            <span>Təsdiqlənmiş</span>
                          )}
                        </p>
                        <div className="btn-div">
                          <Button onClick={() => ConCanHandler(_id, 1)}>
                            Confirm class
                          </Button>
                          <Button onClick={() => ConCanHandler(_id, 2)}>
                            Cancel class
                          </Button>
                        </div>
                      </div>
                    );

                })
              }
            </>
          )

          
        })
      }

    </>
  )
}

export default Tables