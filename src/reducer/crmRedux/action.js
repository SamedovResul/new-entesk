import {
  createTimetable,
  SigninAdmin, 
  getAlldata, 
  createClass, 
  updateClass,
  getClass, 
  deleteClass,
  getTeacher,
  createTeacher,
  updateTeacher,
  getStudent,
  createStudent,
  updateStudent,
  getTimetable,
  updateTimetable,
  getTeacherTable,
  createComment,
  SearchByDate,
  ConfirmOrCancel,
  SearchByDateForTeacher
} from './api'
 


// admin  get, create, update, delete 

export const SignInAdmin = (adminData,router) => async (dispatch) => {
  // console.log(router)
  try {
    const { data } = await SigninAdmin(adminData);
    console.log(data)
    dispatch({ type: "SIGNIN", payload: data });
    if(data.superAdmin.role === 1){
      router.push('/adminTimetable')
    }else if(data.superAdmin.role === 0) {
      router.push('/teacher')
    }
    
  } catch (error) {
    alert(error.response.data.msg)
  }
};

export const getData = (id) =>  async (dispatch) =>{

  try {
    const {data} = await getAlldata(id)

    dispatch({type:"FETCHDATA", payload:data})
  } catch (error) {
    console.log(error.message)
  }
}


// Class create update delete get

export const GetClass = ()=> async(dispatch) =>{

  try {
    const {data} = await getClass()
    // console.log(data)
    dispatch({type:"FETCHCLASSDATA", payload:data})
  } catch (error) {
    console.log(error.message)
  }
}

export const CreateClass= (classData) => async (dispatch) =>{
   
  try {
    const {data} = await createClass(classData)
    console.log(data)
    dispatch({type:"CREATECLASS", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}

export const UpdateClass= (id,classData) => async (dispatch) =>{
   
  try {
    const {data} = await updateClass(id,classData)
    console.log(data)
    dispatch({type:"UPDATECLASS", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}

export const DeleteClass = (id) => async (dispatch)  => {

  try {
    console.log(id)
    const {data} = await deleteClass(id)

    dispatch({type: "DELETECLASS" , payload:id})
  } catch (error) {
    console.log(error.message);
  }
}


// Teacher create update  get

export const GetTeacher = ()=> async(dispatch) =>{

  try {
    const {data} = await getTeacher()
    // console.log(data)
    dispatch({type:"FETCHTEACHERDATA", payload:data})
  } catch (error) {
    console.log(error.message)
  }
}

export const CreateTeacher= (teacherData) => async (dispatch) =>{
   
  try {
    const {data} = await createTeacher(teacherData)
    console.log(data)
    dispatch({type:"CREATETEACHER", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}

export const UpdateTeacher = (id,teacherData) => async (dispatch) =>{
   
  try {
    const {data} = await updateTeacher(id,teacherData)
    console.log(data)
    dispatch({type:"UPDATETEACHER", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}

//  get post teacher search

export const GetTeacherTable = (id) => async (dispatch) =>{


  try {
    const {data} = await getTeacherTable(id)

    dispatch({type:"GETTEACHERTABLE", payload:data})
  } catch (error) {
    console.log(error.message);
  }
}

export const CreateComment = (comment) => async (dispatch)  =>{
  try {
    const {data} = await createComment(comment)

    // console.log(data)
    dispatch({type:"CREATECOMMENT", payload:data })
  } catch (error) {
    console.log(error.message);
  }
}

export const searchByDateForTeacher = (search) => async (dispatch)  =>{
  try {
    console.log(search)
    const {data} = await SearchByDateForTeacher(search)
    dispatch({type:"SEARCH_BY_DATE_FOR_TEACHER", payload:data })
  } catch (error) {
    console.log(error.message);
  }
}

// Student create update get

export const GetStudent = ()=> async(dispatch) =>{
  
  try {
    const {data} = await getStudent()
    // console.log(data)
    dispatch({type:"FETCHSTUDENTDATA", payload:data})
  } catch (error) {
    console.log(error.message)
  }
}

export const CreateStudent = (studentData) => async (dispatch) =>{
   
  try {
    const {data} = await createStudent(studentData)
    console.log(data)
    dispatch({type:"CREATESTUDENT", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}

export const UpdateStudent = (id,studentData) => async (dispatch) =>{
   
  try {
    const {data} = await updateStudent(id,studentData)
    console.log(data)
    dispatch({type:"UPDATESTUDENT", payload: data})
  } catch (error) {
    console.log(error.message);
  }
}

// Timetable create update get


export const GetTimetable = () => async (dispatch)=>{


  try {

    const {data} = await getTimetable()

    dispatch({type:"FETCHTIMETABLE", payload: data })
  } catch (error) {
    
  }
}

export const CreateTimetable = (timetableData) => async (dispatch) =>{

  try {
    
    const {data} = await createTimetable(timetableData)
    console.log(data)
    dispatch({type:"CREATETIMETABLE", payload:data})
  } catch (error) {
    console.log(error.message);
  }
}

export const UpdateTimetable = (timetableData, id) => async (dispatch) =>{

  console.log(timetableData)
  try {
    const {data} = await updateTimetable(timetableData, id)
    
    dispatch({type:"UPDATETIMETABLE", payload:data})
  } catch (error) {
    alert(error.response.data.msg);
  }
}


export const searchByDate = (search) => async (dispatch) =>{
  try {
    const {data} = await SearchByDate(search);
    console.log(data)
    dispatch({type:"FETCHBYSEARCH", payload:data})
  } catch (error) {
    alert(error.response.data.msg)
  }
}

export const confirmOrCancel = (id,Confirmdata) => async (dispatch) =>{
  
  try {
    const {data} = await ConfirmOrCancel(id,Confirmdata);
    console.log(data)
    dispatch({type:'ConfirmOrCancel', payload:data})
  } catch (error) {
    console.log(error.message); 
  }
}


