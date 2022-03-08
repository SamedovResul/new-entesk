const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHSTUDENTDATA":
      // console.log(state);
      return action.payload;
    case "CREATESTUDENT":
      // console.log(action.payload)
      return [...state, action.payload]
    case "UPDATESTUDENT":
      return state.map((teacher) =>(teacher._id === action.payload.id? action.payload: teacher))
    default:
      return state;
  }
}

export default reducer