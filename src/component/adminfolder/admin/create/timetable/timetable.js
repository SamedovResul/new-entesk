import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  GetTimetable,
  CreateTimetable,
  UpdateTimetable,
} from "../../../../../reducer/crmRedux/action";
import { useDispatch } from "react-redux";
import Select from "./select/select";
import Table from "./table/Table";
import ExistTable from "./table/existTable";
import Swal from "sweetalert2";
import { positions } from "react-alert";

const Create = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTimetable());
  }, []);

  let state = useSelector((state) => state);
  const [newTimetable, setNewtimetable] = useState({
    student_Name: "",
    student_Id: "",
    teacher_Name: "",
    teacher_Email: "",
    teacher_Id: "",
    class_Name: "",
    class_Id: "",
    date: "",
  });
  const [Array, setArray] = useState([]);

  //  add class
  useEffect(() => {
    state.classReducer.map((Class) => {
      const { name, _id } = Class;
      if (_id === newTimetable.class_Id) {
        newTimetable.class_Name = name;
      }
    });
  }, [newTimetable]);

  // add student
  useEffect(() => {
    state.studentReducer.map((student) => {
      const { name, _id } = student;
      if (_id === newTimetable.student_Id) {
        newTimetable.student_Name = name;
      }
    });
  }, [newTimetable]);

  // add teacher
  useEffect(() => {
    state.teacherReducer.map((student) => {
      const { name, _id, email } = student;
      if (_id === newTimetable.teacher_Id) {
        newTimetable.teacher_Name = name;
        newTimetable.teacher_Email = email;
      }
    });
  }, [newTimetable]);

  // update timetable
  useEffect(() => {
    state.timetableReducer.map((timetable) => {
      const { _id } = timetable;
      if (_id === id) {
        setNewtimetable(timetable);
      }
    });
  }, [id]);

  // create timatable
  const createTimetbale = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(UpdateTimetable(newTimetable, id));
      setNewtimetable({
        student_Name: "",
        student_Id: "",
        teacher_Name: "",
        teacher_Id: "",
        class_Name: "",
        class_Id: "",
        date: "",
      });
    } else {
      if ( Array.length > 0 && !newTimetable.class_Name &&  !newTimetable.student_Name && !newTimetable.date ) {
        dispatch(CreateTimetable(Array));
        setArray([])
        Swal.fire({
          color: "green",
          text: "Great",
        });
      } else {
        Swal.fire({
          color: "red",
          text: "please add time table",
        });
      }
    }
  };


  console.log(newTimetable)
  console.log(Array)
  const addToArray = (e) =>{
    e.preventDefault();
    if( 
      newTimetable.student_Id &&
      newTimetable.teacher_Id &&
      newTimetable.class_Id &&
      newTimetable.date){
        setArray([...Array, newTimetable]);
        setNewtimetable({
          ...newTimetable,
          student_Name: "",
          student_Id: "",
          class_Name: "",
          class_Id: "",
          date: "",
        })
      }else{
        Swal.fire({
          color: "red",
          text: "please complete form",
        });
      }
  }

  let Name, value;
  const onChangeFunction = (e) => {
    e.preventDefault();
    Name = e.target.name;
    value = e.target.value;

    setNewtimetable({
      ...newTimetable,
      [Name]: value,
    });
  };

  return (
    <>
      <div className="">
        <div className=" create-admin create-data">
          <p> create Timetable</p>
          <form action="">
            {/* select teacher  */}
            <Select
              state={state.teacherReducer}
              name={"teacher_Id"}
              params={newTimetable.teacher_Id}
              onChangeFunction={onChangeFunction}
            />
            {/* select student */}
            {newTimetable.teacher_Id ? (
              <Select
                state={state.studentReducer}
                name={"student_Id"}
                params={newTimetable.student_Id}
                onChangeFunction={onChangeFunction}
              />
            ) : (
              <></>
            )}
            {/* select class */}
            {newTimetable.teacher_Id ? (
              <Select
                state={state.classReducer}
                name={"class_Id"}
                params={newTimetable.class_Id}
                onChangeFunction={onChangeFunction}
              />
            ) : (
              <></>
            )}
            {/* set date */}
            {newTimetable.teacher_Id ? (
              <input
                type="datetime-local"
                name={"date"}
                value={newTimetable.date || "YY-MM-DD"}
                onChange={(e) => {
                  onChangeFunction(e);
                }}
              />
            ) : (
              <></>
            )}
            <button
              onClick={(e) => {
                addToArray(e)
              }}
            >
              add
              {/* {id ? <span>Update</span> : <span>Create</span>} */}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                createTimetbale(e);
              }}
            >
              
              {id ? <span>Update</span> : <span>save</span>}
            </button>
          </form>
        </div>
      </div>
      <div 
        style={ Array.length !== 0? {
        border:'1px solid',
        display:'flex',
        flexWrap:"wrap",
        position:"relative",
        paddingTop:"50px"
        } : {border:'none'}} >
        <h5
            style={Array.length !== 0? {
              position:"absolute",
              left:'50%',
              top:"5px",
              transform:"translateX(-50%)"
            } : {display:"none"}}
          >new Table</h5>
        {<Table 
          setNewtimetable={setNewtimetable} 
          tableData={Array} 
          setId={setId}
          newTimetable={newTimetable} />}
      </div>
      
        {newTimetable.teacher_Id ? (
          <div 
          style={{
            border:'1px solid',
            display:'flex',
            flexWrap:"wrap",
            position:"relative",
            paddingTop:"50px"
          }}
        >
          <h5
            style={{
              position:"absolute",
              left:'50%',
              top:"5px",
              transform:"translateX(-50%)"
            }}
          >Existing Table</h5>
          <ExistTable
            teacher={newTimetable.teacher_Id}
            tableData={state.timetableReducer}
            setId={setId}
          />
          </div>
        ) : (
          <></>
        )}
      
    </>
  );
};

export default Create;
