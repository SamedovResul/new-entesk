import React from 'react'
import Moment from 'react-moment';
import { Button } from "@mui/material";
const Tables = ({state, teacher, ConCanHandler}) => {
  state.table.sort( function(a, b) {
    return a.date.localeCompare(b.date);
  })


  
  return (
    <>
      {
        teacher.map((teacher) => {
          const {name, _id} = teacher
      

          return(
            <>
              <h2 key={_id}>{name}</h2>
              
              {
                state.table.filter((table) => table.teacher_Id === _id)
                .map((table,index) =>{
                  console.log(table)
                  const {
                    student_Name,
                    teacher_Name,
                    teacher_Id,
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
                      <div className="table-box" key={index}>
                        <p>
                          {" "}
                          <b>teacher:</b> {teacher_Name}{" "}
                        </p>
                        <p>
                          {" "}
                          <b>student:</b> {student_Name}{" "}
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

      {/* <div className="parent-table-box">
        {state.table.map((timetable, index) => {
          
          const {
            student_Name,
            teacher_Name,
            teacher_Id,
            class_Name,
            date,
            _id,
            class_Comment,
            table_State,
          } = timetable;
          let time, dates, month, year;
            time = new Date(date);
            dates = time.getDate();
            month = time.getMonth();
            year = time.getFullYear();
            return (
              <div className="table-box" key={index}>
                <p>
                  {" "}
                  <b>teacher:</b> {teacher_Name}{" "}
                </p>
                <p>
                  {" "}
                  <b>student:</b> {student_Name}{" "}
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


          // }
        })}
      </div> */}
    </>
  )
}

export default Tables