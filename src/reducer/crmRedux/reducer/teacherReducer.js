const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHTEACHERDATA":
      // console.log(state);
      return action.payload;
    case "CREATETEACHER":
      // console.log(action.payload)
      return [...state, action.payload]
    case "UPDATETEACHER":
      return state.map((teacher) =>(teacher._id === action.payload._id? action.payload: teacher))
    default:
      return state;
  }
}

export default reducer