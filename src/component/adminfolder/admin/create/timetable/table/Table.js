import React from "react";

const Table = ({setNewtimetable,tableData,newTimetable }) => {
  return (
    <>
      {tableData.map((timetable, index) => {
        const {
          student_Name,
          student_Id,
          teacher_Name,
          class_Name,
          class_Id,
          date,
          _id,
          table_State,
          teacher_Id
        } = timetable;
        console.log(teacher_Id)
        const time = new Date(date);
        const dates = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
          return (
            <div key={index} className="col-md-4">
              <div className="info-table">
                <p>
                  <b>teacher:</b> {teacher_Name}{" "}
                </p>
                <p>
                  <b>student:</b> {student_Name}{" "}
                </p>
                <p>
                  <b>class:</b> {class_Name}{" "}
                </p>
                <p>
                  <b>date:</b> {year}:
                  {month.toString().length === 1 ? `0${month}` : month}:
                  {dates.toString().length === 1 ? `0${dates}` : dates}
                </p>
                <p>
                  <b>time:</b>
                  {`${
                    time.getUTCHours().toString().length === 1
                      ? `0${time.getUTCHours()}`
                      : `${time.getUTCHours()}`
                  }
                    :${
                      time.getUTCMinutes().toString().length === 1
                        ? `0${time.getUTCMinutes()}`
                        : `${time.getUTCMinutes()}`
                    }`}
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
                    })
                    // console.log(newTimetable)
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
