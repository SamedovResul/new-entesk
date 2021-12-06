import {createPosts,fetchUsers, updateUsers, deleteBlogs} from './api'
 
export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await createPosts(user);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getUser = () => async (dispatch) => {
  try {
    const { data } = await fetchUsers();
    console.log(data)
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = (id, blog) => async (dispatch) =>{
  try{
    
    const {data} = await updateUsers(id, blog);
    console.log(data)

    dispatch({type: 'UPDATE' ,payload: data})

  }catch(error){
    console.log(error.message);
  }
}

export const deleteBlog = (id) => async (dispatch) =>{
  try{
    await deleteBlogs(id);

    dispatch({type: "DELETE", payload: id})

  }catch(error){
    console.log(error.message)
  }
}