const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHTIMETABLE":
      return action.payload;
    case "CREATETIMETABLE":
      return [...state, action.payload]
    case "UPDATETIMETABLE":
      return state.map((timetable) =>(timetable._id === action.payload._id ? action.payload: timetable))
    default:
      return state;
  }
}

export default reducer