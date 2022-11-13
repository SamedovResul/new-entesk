


const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "GETTEACHERTABLE":
      // console.log(action.payload.token);
      return action.payload
    case "CREATECOMMENT" :
      return state.map((teacher) =>(teacher._id === action.payload._id? action.payload: teacher))
    case "SEARCH_BY_DATE_FOR_TEACHER":
      // console.log(action.payload.token);
      return action.payload
    default:
      return state;
  }
}

export default reducer