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
  deleteTeacher
} from './api'
 
export const SignInAdmin = (adminData,router) => async (dispatch) => {
  // console.log(router)
  try {
    const { data } = await SigninAdmin(adminData);
    console.log(data.admin)
    dispatch({ type: "SIGNIN", payload: data });
    if(data.signIn?.role === 1){
      router.push('/admin')
    }else{
      router.push('/teacher')
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

// admin can get, create, update, delete 

export const getData = (id) =>  async (dispatch) =>{

  try {
    const {data} = await getAlldata(id)

    dispatch({type:"FETCHDATA", payload:data})
  } catch (error) {
    console.log(error.message)
  }
}

export const CreateTimetable = (timetableData,router) => async (dispatch) =>{

  try {
    const {data} = await createTimetable(timetableData)
    // console.log(data)
    dispatch({type:"TIMETABLE", payload:data})
    router.push("/login")
  } catch (error) {
    console.log(error.message);
  }
}

// class create update delete get

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

    dispatch({type: "DELETECLASS" , payload:data})
  } catch (error) {
    console.log(error.message);
  }
}


// teacher create update delete get

export const GetTeacher = ()=> async(dispatch) =>{

  try {
    const {data} = await getTeacher()
    
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

export const DeleteTeacher = (id) => async (dispatch)  => {

  try {
    console.log(id)
    const {data} = await deleteTeacher(id)

    dispatch({type: "DELETETEACHER" , payload:data})
  } catch (error) {
    console.log(error.message);
  }
}