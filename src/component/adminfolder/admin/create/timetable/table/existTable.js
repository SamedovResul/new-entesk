import React from "react";

const ExistTable = ({Array,teacher, tableData, setId }) => {
  return (
    <>
      {tableData.map((timetable, index) => {
        const {
          student_Name,
          teacher_Name,
          class_Name,
          date,
          _id,
          table_State,
          teacher_Id
        } = timetable;
        const time = new Date(date);
        const dates = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
        if(teacher_Id === teacher){
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
                <p>
                  <b>class state</b>
                  {table_State === 0 ? (
                    <span> tesdiq olunmamis </span>
                  ) : (
                    <span></span>
                  )}
                </p>
                <button
                  onClick={() => {
                    setId(_id);
                  }}
                >
                  update
                </button>
              </div>
            </div>
          );
        }
        
      })}
    </>
  );
};

export default ExistTable;
