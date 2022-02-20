const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHTEACHERDATA":
      console.log(state);
      return action.payload;
    case "CREATETEACHER":
      console.log(action.payload)
      return action.payload
    case "UPDATETEACHER":
      return state.map((teacher) =>(teacher._id === action.payload.id? action.payload: teacher))
    case "DELETETEACHER":
      return state.filter((teacher) => teacher.id !== action.payload)
    default:
      return state;
  }
}

export default reducer