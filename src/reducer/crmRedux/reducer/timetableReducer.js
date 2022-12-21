const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHTIMETABLE":
      
      return action.payload;
    case "CREATETIMETABLE":
      const Array = action.payload
      return [...state,  ...Array]
    case "UPDATETIMETABLE":
      return state.map((timetable) =>(timetable._id === action.payload._id ? action.payload: timetable));
    case "FETCHBYSEARCH":
      return  action.payload 
    case "ConfirmOrCancel":
      return  action.payload; 
    default:
      return state;
  }
}

export default reducer