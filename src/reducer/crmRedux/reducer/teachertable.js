


const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "GETTEACHERTABLE":
      // console.log(action.payload.token);
      return action.payload
    case "CREATECOMMENT" :
      return state.map((teacher) =>(teacher._id === action.payload._id? action.payload: teacher))
    default:
      return state;
  }
}

export default reducer