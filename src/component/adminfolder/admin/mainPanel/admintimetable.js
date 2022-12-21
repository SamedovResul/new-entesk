import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  GetTimetable,
  searchByDate,
  confirmOrCancel,
  GetTeacher,
  GetStudent
} from "../../../../reducer/crmRedux/action";
import Functions from "./functions";
import DateLocal from "./date-local";
import SearchResult from "./searchResult";
import Tables from "./tables";
import Textfield from "./text-field";
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Classes from '../create/classes/classes';
import Teachers from '../create/teacher/teachers';
import Student from '../create//student/students';
import Timetable from '../create/timetable/timetable'



const Admin = () => {
  const [search, setSearch] = useState(false);
  const [boolean, setBoolean] = useState(0);
  const [div,setdiv ] = useState(10)
  let state = useSelector((state) => state.timetableReducer);
  const searchingState = useSelector((state) => state.timetableReducer);
  const teacher = useSelector((state) => state.teacherReducer);
  const dispatch = useDispatch();
  const [date, getDate] = useState({
    from: "",
    to: "",
    teacher_Name: "",
    student_Name: "",
    table_State: "",
  });


    

  const { 
    Searching,
    today,
    ConCanHandler,
    onChangeFunction,
    style,
   } = Functions(
    // get data from back
    dispatch,
    GetTimetable,
    GetTeacher,
    // searching table
    searchByDate,
    date,
    setSearch,
    // confirm or cancel
    setBoolean,
    confirmOrCancel,
    // get search data
    getDate,
    // get birthday
    GetStudent,
    searchingState
  )

  return (
    <>
      {/* <div className="sideContainer">
        <p> create </p>
        <Button className="create-box" variant="outlined" style={div === 0 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 0 ? setdiv(0) : setdiv(10) } >
          Create Classes 
        </Button>
        <Button className="create-box" variant="outlined" style={div === 1 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 1 ? setdiv(1) : setdiv(10) }>
          Create Teachers
        </Button>
        <Button className="create-box" variant="outlined" style={div === 2 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 2 ? setdiv(2) : setdiv(10) }>
          Create Student
        </Button>
        <Button className="create-box" variant="outlined" style={div === 3 ? {borderColor:'red'}:{borderColor:''}} onClick={
          () => div !== 3 ? setdiv(3) : setdiv(10) }>
          Create timetable
        </Button>
      </div>
      <div className="mainContainer">
      <div style={
          div === 0 ? style : {display: "none"}
        } className="classes">
        <Classes  />
      </div>
      <div style={
          div === 1 ? style : {display: "none"}
        } className="classes">
        <Teachers />
      </div>
      <div style={
          div === 2 ? style : {display: "none"}
        } className="classes">
        <Student />
      </div>
      <div style={
          div === 3 ? {
            display: "block", 
            height:'auto', 
            borderColor:'red'
          } : {display: "none"}
        } className="classes">
        <Timetable />
      </div>
      </div> */}
      {state ? (
        <div className="main-admin-page">
          <div className="container">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <form action="" className="get-date">
                    <DateLocal date={date.from} type={'datetime-local'} name={'from'} onChangeFunction={onChangeFunction} />
                    <DateLocal date={date.to} type={'datetime-local'} name={'to'} onChangeFunction={onChangeFunction} />
                    <Textfield type={'text'} name={'teacher_Name'} onChangeFunction={onChangeFunction} />
                    <Textfield type={'text'} name={'student_Name'} onChangeFunction={onChangeFunction} />
                    <label
                      htmlFor="state"
                      onChange={(e) => {
                        e.target.checked
                          ? getDate({
                              ...date,
                              table_State: 1,
                            })
                          : getDate({
                              ...date,
                              table_State: "",
                            });
                      }}
                    >
                      calculate confirmed class:{" "}
                      <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                      />
                    </label>
                    <Button variant="outlined" onClick={Searching}>Searching</Button>
                  </form>
                  <Button variant="outlined" onClick={today}>today</Button>
                </div>
                {search ? (
                  <>
                  {
                    date.table_State === 1 && date.teacher_Name && (
                      <>
                        <b> { state.length } </b>
                        {
                          teacher.map((s) =>{
                            const {salary} = s
                            console.log(s,date.teacher_Name)
                            if(s.name === date.teacher_Name){
                              let result = salary * state.length
                              console.log(result)
                              return(
                                <>
                                  <b>salary:</b> <p> {result} </p>
                                </>
                              )
                            }
                          })
                        }
                      </>
                    )
                  }
                  <SearchResult state={state} ConCanHandler={ConCanHandler} />
                  </>
                  
                ) : (
                  <Tables state={state} teacher={teacher} ConCanHandler={ConCanHandler} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>wait</p>
      )}
    </>
  );
};

export default Admin;
