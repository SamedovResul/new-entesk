import React from "react";
import Moment from 'react-moment';


const Table = ({setNewtimetable,tableData,newTimetable,setId }) => {
  return (
    <>
      {tableData.map((timetable, index) => {
        tableData.sort( function(a, b) {
          return a.date.localeCompare(b.date);
        })
        const {
          student_Name,
          student_Id,
          teacher_Name,
          class_Name,
          class_Id,
          date,
          category_name
        } = timetable;
        const time = new Date(date);
        const dates = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
          return (
            <div key={index} className="col-md-4">
              <div className="info-table">
                <p>
                  <b>teacher:</b> {teacher_Name}
                </p>
                <p>
                  <b>student:</b> {student_Name}
                </p>
                <p>
                  <b>class:</b> {class_Name}
                </p>
                <p>
                  <b>category:</b> {category_name}
                </p>
                <p>
                  <b>date:</b> {year}/
                  {month.toString().length === 1 ? `0${month + 1}` : month + 1}/
                  {dates.toString().length === 1 ? `0${dates }` : dates }
                </p>
                <p>
                  <b>time:</b>
                  <Moment format="HH:mm " >{time}</Moment>
                  {/* { moment().format(` ${time.getUTCHours()}:${time.getUTCMinutes()}`) } */}
                  {/* { moment().format(` ${time.getHours()}:${time.getMinutes()}`) } */}
                  {/* {`${
                    time.getHours().toString().length === 1
                      ? `0${time.getHours()}`
                      : `${time.getHours()}`
                  }
                    :${
                      time.getUTCMinutes().toString().length === 1
                        ? `0${time.getUTCMinutes()}`
                        : `${time.getUTCMinutes()}`
                    }`} */}
                </p>
                <button
                  onClick={() => {
                    setNewtimetable({
                      ...newTimetable,
                      student_Name,
                      class_Name,
                      date,
                      class_Id,
                      student_Id,
                      category_name,
                      index:index,
                      condition:true
                    })
                  }}
                >
                  update
                </button>
              </div>
            </div>
          );
        
      })}
    </>
  );
};

export default Table;
