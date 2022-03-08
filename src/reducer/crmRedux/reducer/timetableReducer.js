const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHTIMETABLE":
      // console.log(state);
      return action.payload;
    case "CREATETIMETABLE":
      return [...state, action.payload]
    case "UPDATETIMETABLE":
      return state.map((timetable) =>(timetable._id === action.payload.id? action.payload: timetable))
    default:
      return state;
  }
}

export default reducer