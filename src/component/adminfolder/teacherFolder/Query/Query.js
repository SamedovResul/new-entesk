import React, { useState, useEffect } from "react";
import Table from "./Table";
import { useSelector, useDispatch } from "react-redux";
import {
  searchByDateForTeacher,
  GetTeacherTable,
} from "../../../../reducer/crmRedux/action";
import Swal from "sweetalert2";

const Query = ({ ReturnParms }) => {
  const { Return, setReturn } = ReturnParms;
  const [Query, setQuery] = useState({
    from: "",
    to: "",
    state: 0,
    limit: 5,
    skip: 1,
  });
  const [id, setId] = useState(0);
  const [hideList, setHideList] = useState(true);
  const [CountDate, setCountDate] = useState("");
  const dispatch = useDispatch();
  const table = useSelector((state) => state.teachertable.table);
  const count = useSelector((state) => state.teachertable.count);
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });

  useEffect(() => {
    if(Return === 0){
      dispatch(GetTeacherTable(Query));
      setTimeout(() => {
        setHideList(true);
      }, 1000);
    }
    
    console.log(Return)
  }, [Return]);

  const search = (e) => {
    e.preventDefault();
    if (Query.from && Query.skip === 1) {
      setTimeout(() => {
        setReturn(Return + 1);
      }, 1000);
      setHideList(false);
      Toast.fire({
        icon: 'success',
        title: 'Loading ...'
      })
      dispatch(searchByDateForTeacher(Query));
    } else {
      Swal.fire({
        color: "red",
        text: "please insert date",
      });
    }
  };

  useEffect(() => {
    if (Query.skip === 1) {
      setCountDate(count);
    }
    dispatch(GetTeacherTable(Query));
  }, [Query.skip]);

  return (
    <>
      <article className="Schedule-section">
        {Return >= 1 ? (
          <Table
            State={{ id, setId }}
            table={table}
            ReturnParms={{ Return, setReturn }}
            count={count}
            Query={Query}
            setQuery={setQuery}
            dispatch={dispatch}
            searchByDateForTeacher={searchByDateForTeacher}
          />
        ) : (
          <>
            <form action="">
              <input
                type="date"
                onChange={(e) => {
                  let till = new Date(e.target.value);
                  setQuery({
                    ...Query,
                    from: e.target.value,
                    to: `${till.getFullYear()}-${till.getMonth() + 1}-${
                      till.getDate() + 1
                    }`,
                    // limit:5,
                    // skip:1
                  });
                }}
              />
              <button
                onClick={(e) => {
                  search(e);
                }}
              >
                Query
              </button>
            </form>
            {hideList && (
              <div className="Schedule-list">
                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Time</th>
                      <th>date</th>
                      <th>Class Name</th>
                      <th>category info</th>
                    </tr>
                    {table.map((data, i) => {
                      const {
                        student_Name,
                        date,
                        class_Name,
                        _id,
                        category_name,
                      } = data;
                      const lessonDate = new Date(date);
                      // console.log(data)
                      return (
                        <tr key={i}>
                          <td> {student_Name} </td>
                          <td>
                            {" "}
                            {`${
                              lessonDate.getHours().toString().length === 1
                                ? `0${lessonDate.getHours()}`
                                : `${lessonDate.getHours()}`
                            }
                          :${
                            lessonDate.getUTCMinutes().toString().length === 1
                              ? `0${lessonDate.getUTCMinutes()}`
                              : `${lessonDate.getUTCMinutes()}`
                          }`}{" "}
                          </td>

                          <td>
                            {" "}
                            {lessonDate.getFullYear()}/{" "}
                            {lessonDate.getMonth().toString().length === 1
                              ? `0${lessonDate.getMonth() + 1}`
                              : lessonDate.getMonth() + 1}
                            /
                            {lessonDate.getDate().toString().length === 1
                              ? `0${lessonDate.getDate()}`
                              : lessonDate.getDate()}{" "}
                          </td>
                          <td> {class_Name} </td>
                          <td> {category_name} </td>
                          {/* <td>
                            <button onClick={() => {
                              setId(_id)
                              setReturn(Return + 1)
                            } } >
                              select
                            </button>
                          </td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {CountDate >= 6 && (
                  <button
                    onClick={(e) => {
                      setQuery({
                        ...Query,
                        skip: Query.skip + 1,
                      });
                      setCountDate(CountDate - 5);
                    }}
                  >
                    next
                  </button>
                )}
                {Query.skip !== 1 && (
                  <button
                    onClick={(e) => {
                      setQuery({
                        ...Query,
                        skip: Query.skip - 1,
                      });
                      setCountDate(CountDate + 5);
                    }}
                  >
                    prev
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </article>
    </>
  );
};

export default Query;
