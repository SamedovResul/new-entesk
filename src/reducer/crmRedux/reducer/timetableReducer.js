const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHTIMETABLE":
      return action.payload;
    case "CREATETIMETABLE":
      return [...state, action.payload]
    case "UPDATETIMETABLE":
      return state.map((timetable) =>(timetable._id === action.payload._id ? action.payload: timetable));
    case "FETCHBYSEARCH":
      return  action.payload 
    case "ConfirmOrCancel":
      console.log(action.payload)
      return  action.payload; 
    default:
      return state;
  }
}

export default reducer