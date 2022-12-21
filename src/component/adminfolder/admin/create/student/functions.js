import React,{useEffect, useState, useCallback} from 'react'

const Functions = (
  // get student
  dispatch,
  GetStudent,
  // get birthDay
  render,
  // select update student
  state,
  id,
  setData,
  // create and update student
  Swal,
  data,
  UpdateStudent,
  CreateStudent,
  // get birth day
  FetchByBirthday,
  // teacher
  teacher
  ) => {

// get student
  useEffect(() => {
    dispatch(GetStudent())
  }, [])



  useEffect(() => {
    state.map((classes) =>{
      const {_id} = classes
      if(_id === id.id){
        setData(classes)
      }
    })
  }, [id])

  useEffect(() => {
    teacher.map((teacher) => {
      const { name, _id, email } = teacher;
      if (_id === data.teacherId) {
        data.teacherName = name
      }
    });
  }, [data]);

   // create and update student
  const createStudent = (e) =>{
    if(id.id){
      dispatch(UpdateStudent(id.id,data))
      setData({
        name:"",
        SecondName:"",
        age:'',
        ParentName:'',
        PhoneNumber:'',
        Email:'',
        ClassAmount:'',
        status:'',
        teacherName:"",
        teacherId:"",
        dateOne:'',
        timeOne:'',
        dateTwo:'',
        timeTwo:''
      })
      Swal.fire({
        color:"green",
        text: "Great",
        timer:1000
      })
    }else{
      if(data.age && data.name && data.SecondName && data.status){
        dispatch(CreateStudent(data))
        setTimeout(() => {
          dispatch(FetchByBirthday())
        }, 2000);
        setData({
          name:"",
          SecondName:"",
          age:'',
          ParentName:'',
          PhoneNumber:'',
          Email:'',
          ClassAmount:'',
          status:'',
          teacherName:"",
          teacherId:"",
          dateOne:'',
          timeOne:'',
          dateTwo:'',
          timeTwo:''
        })
        Swal.fire({
          color:"green",
          text: "Great",
          timer:1000
        })
      }else{
        Swal.fire({
          color:"red",
          text: "please complete form",
          timer:1000
        })
      }
      
    }
  }

  return{
    createStudent
  }

}

export default Functions