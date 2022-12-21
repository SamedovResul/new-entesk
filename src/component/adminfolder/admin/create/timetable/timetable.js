import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  GetTimetable,
  CreateTimetable,
  UpdateTimetable,
} from "../../../../../reducer/crmRedux/action";
import { useDispatch } from "react-redux";
import SelectData from "./select/select";
import Table from "./table/Table";
import ExistTable from "./table/existTable";
import Swal from "sweetalert2";
import { positions } from "react-alert";
import TimetableFunc from "./function/function";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

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
    table_State:0,
    category_name:'',
    date: "",
    index:'',
    condition:false
  });
  const [Array, setArray] = useState([]);
  let [Category, setCategory] = useState([])
  //  add class

  const {
    createTimetbale,
    // create Array
    addToArray,
    // onChange
    onChangeFunction
  } = TimetableFunc(
    // class 
    state.classReducer,
    newTimetable,
    setCategory,
    Category,
    // student
    state.studentReducer.students,
    // teacher
    state.teacherReducer,
    // timetable
    state.timetableReducer,
    id,
    setId,
    setNewtimetable,
    // createTimetbale
    dispatch,
    UpdateTimetable,
    Array,
    CreateTimetable,
    setArray,
    Swal
    ) 

  return (
    <>
      <div className="">
        <div className=" create-admin create-data">
          <p> create Timetable</p>
          <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
            {/* select teacher  */}
            {
              Array.length === 0  && <SelectData
              state={state.teacherReducer}
              name={"teacher_Id"}
              params={newTimetable.teacher_Id}
              onChangeFunction={onChangeFunction}
              select={"Teacher"}
            />
            }
            
            {/* select student */}
            {newTimetable.teacher_Id ? (
              <SelectData
                state={state.studentReducer.students}
                name={"student_Id"}
                params={newTimetable.student_Id}
                onChangeFunction={onChangeFunction}
                select={"Student"}
              />
            ) : (
              <></>
            )}
            {/* select class */}
            {newTimetable.teacher_Id  ? (
              <>
                <SelectData
                  state={state.classReducer}
                  name={"class_Id"}
                  params={newTimetable.class_Id}
                  onChangeFunction={onChangeFunction}
                  select={"Class"}
                />
              </>
            ) : (
              <></>
            )}
            {Category.length > 0 && (
              <>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">select category </InputLabel>
                  <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="category_name"
                  value={newTimetable.category_name}
                  onChange={(e) =>{
                  onChangeFunction(e)}}
                  
                  >
                    {Category.map((name,i) => {
                      return (
                        <MenuItem key={i} value={name}>{name}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </>
            ) }
            {/* set date */}
            {newTimetable.teacher_Id ? (
              <TextField
                // label="age"
                variant="outlined"
                type="datetime-local"
                name={"date"}
                value={newTimetable.date || "YY-MM-DD"}
                onChange={(e) =>{
                  onChangeFunction(e);
                }}
                />
            ) : (
              <></>
            )}
            {
              !id && (
                <Button
                  onClick={(e) => {
                    addToArray(e)
                  }}
                >
                  {newTimetable.condition === true ? <span>Update</span> : <span>Create</span>}
                </Button>
              )
            }
            
            {
              id ? (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    createTimetbale(e);
                  }}
                >
                update exist table
                </Button>
              ):(
                <></>
              )
            }
            
            </Box>
        </div>
      </div>
      {
        Array.length ? (
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
              newTimetable={newTimetable}
              />}
              <Button
              style={{
                width:'90%',
                margin:"10px auto",
                border:"none",
                backgroundColor:"blue",
                color:"white",
                borderRadius:'10px'
              }}
              onClick={(e) => {
                e.preventDefault();
                createTimetbale(e);
              }}
            >
              save
            </Button>
          </div>
        ):(
          <></>
        )
      }
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
