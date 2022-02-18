import {createTimetable, SigninAdmin, getAlldata, createClass, updateClass} from './api'
 
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

// class create update delete

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



// export const getUser = () => async (dispatch) => {
//   try {
//     const { data } = await fetchBlogs();
//     console.log(data)
//     dispatch({ type: "FETCH_ALL", payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updateUser = (id, blog) => async (dispatch) =>{
//   try{
    
//     const {data} = await updateBlogs(id, blog);
//     console.log(data)

//     dispatch({type: 'UPDATE' ,payload: data})

//   }catch(error){
//     console.log(error.message);
//   }
// }

// export const deleteBlog = (id) => async (dispatch) =>{
//   try{
//     await deleteBlogs(id);

//     dispatch({type: "DELETE", payload: id})

//   }catch(error){
//     console.log(error.message)
//   }
// }