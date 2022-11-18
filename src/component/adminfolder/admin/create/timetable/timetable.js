import React, { useState, useEffect,useCallback } from "react";
import { useSelector } from "react-redux";
import {
  GetTimetable,
  CreateTimetable,
  UpdateTimetable,
} from "../../../../../reducer/crmRedux/action";
import { useDispatch } from "react-redux";
import Select from "./select/select";
import Table from "./table/Table";
import Swal from 'sweetalert2'

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
    teacher_Id: "",
    class_Name: "",
    class_Id: "",
    date: "",
  });

 

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
      const { name, _id } = student;
      if (_id === newTimetable.teacher_Id) {
        newTimetable.teacher_Name = name;
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
      })
    } else {
      if( newTimetable.student_Id && newTimetable.teacher_Id && newTimetable.class_Id && newTimetable.date){
        dispatch(CreateTimetable(newTimetable));
        setNewtimetable({
          student_Name: "",
          student_Id: "",
          teacher_Name: "",
          teacher_Id: "",
          class_Name: "",
          class_Id: "",
          date: "",
        })
        Swal.fire({
          color:"green",
          text: "Great",
        })
      }else{
        Swal.fire({
          color:"red",
          text: "please complete form",
        })
      }
    }
  };


  let Name, value
  const onChangeFunction = (e) =>{
    e.preventDefault()
    Name = e.target.name
    value = e.target.value
    
    setNewtimetable({
      ...newTimetable,
      [Name]: value
    })
  }
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
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
                <Select 
                  state={state.studentReducer}
                  name={"student_Id"}
                  params={newTimetable.student_Id}
                  onChangeFunction={onChangeFunction}
                /> 
                {/* select class */}
                <Select 
                  state={state.classReducer}
                  name={"class_Id"}
                  params={newTimetable.class_Id}
                  onChangeFunction={onChangeFunction}
                />  
                  
                {/* set date */}
                <input
                  type="datetime-local"
                  name={'date'}
                  value={newTimetable.date || "YY-MM-DD"}
                  onChange={(e) => {
                    onChangeFunction(e)
                  }}
                  
                />
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    createTimetbale(e);
                  }}
                >
                  {id ? <span>Update</span> : <span>Create</span>}
                </button>
              </form>
            </div>
          </div>
          <Table tableData={state.timetableReducer} setId={setId} />
        </div>
      </div>
    </div>
  );
};

export default Create;
