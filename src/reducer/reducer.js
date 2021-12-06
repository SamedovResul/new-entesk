import allData from "../course";


const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      console.log(action.payload);
      return [...state, action.payload]
    case "UPDATE":
      return state.map((blog) =>(blog.id === action.payload._id? action.payload : blog));
    case "DELETE":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
}

export default reducer