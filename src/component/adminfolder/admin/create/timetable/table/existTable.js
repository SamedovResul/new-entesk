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
          teacher_Id,
          category_name
        } = timetable;
        const time = new Date(date);
        const dates = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
        const hour = time.getHours().toString().length === 1
        ? `0${time.getHours()}`
        : `${time.getHours()}`
        const minute = time.getUTCMinutes().toString().length === 1
        ? `0${time.getUTCMinutes()}`
        : `${time.getUTCMinutes()}`
        const month2 = month.toString().length === 1 ? `0${month}` : month
        const dates2 = dates.toString().length === 1 ? `0${dates}` : dates
        if(teacher_Id === teacher){
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
                  <b>category:</b>{category_name}
                </p>
                <p>
                  <b>date:</b> {year}:
                  {month2}:
                  {dates2}
                </p>
                <p>
                  <b>time:</b>
                  {`${
                    hour
                  }
                    :${
                      minute
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
