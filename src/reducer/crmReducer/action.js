import {createTimetable, SigninAdmin} from './api'
 
export const SignInAdmin = (adminData,router) => async (dispatch) => {
  console.log(router)
  try {
    const { data } = await SigninAdmin(adminData);
    console.log(data.admin)
    dispatch({ type: "SIGNIN", payload: data });
    if(data.admin?.name){
      router.push('/admin')
    }else{
      router.push('/teacher')
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const CreateTimetable = (timetableData,router) => async (dispatch) =>{

  try {
    const {data} = await createTimetable(timetableData)

    dispatch({type:"TIMETABLE", payload:data})
  } catch (error) {
    
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