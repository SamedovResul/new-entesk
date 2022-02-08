import {SignINUser} from './api'
 
export const SigninUsee = (SignInData) => async (dispatch) => {
  try {
    const { data } = await SignINUser(SignIn,SignInData);
    dispatch({ type: "SignIn", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


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