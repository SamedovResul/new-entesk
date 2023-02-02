import React from "react";
import Moment from 'react-moment';



const SearchResult = ({ state,ConCanHandler }) => {
  return (
    <>
      <div className="parent-table-box">
        {state.table.map((timetable, index) => {
          const {
            student_Name,
            teacher_Name,
            class_Name,
            date,
            _id,
            teacher_Id,
            class_Comment,
            table_State,
          } = timetable;
          const time = new Date(date);
          const year = time.getFullYear();

          return (
            <div key={index} className="table-box">
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
              <div>
                <p>
                  <b>date:</b> {year}/
                  {time.getMonth().toString().length === 1
                    ? `0${time.getMonth() + 1}`
                    : time.getMonth() + 1}
                  /
                  {time.getDate().toString().length === 1
                    ? `0${time.getDate()}`
                    : time.getDate()}
                </p>
                <b>class state</b>
                {table_State === 0 ? (
                  <span style={{ color: "gray", fontWeight: "700" }}>
                    {" "}
                    təsdiq olunmamış{" "}
                  </span>
                ) : table_State === 1 ? (
                  <span style={{ color: "green", fontWeight: "700" }}>
                    {" "}
                    təsdiq olunmuş{" "}
                  </span>
                ) : table_State === 2 ? (
                  <span style={{ color: "red", fontWeight: "700" }}>
                    {" "}
                    imtina olunmuş{" "}
                  </span>
                ) : (
                  <span> something wrong </span>
                )}
              </div>
              {table_State === 0 ? (
                <div className="btn-div">
                  <button onClick={() => ConCanHandler(_id, 1)}>
                    Confirm class
                  </button>
                  <button onClick={() => ConCanHandler(_id, 2)}>
                    Cancel class
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResult;
