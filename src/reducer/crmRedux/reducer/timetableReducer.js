const reducer = (state = {table:[], teacherData:''}, action ) =>{
  const {table} = state
  switch (action.type) {
    case "FETCHTIMETABLE":
      return { ...state, table: action.payload,}
    case "CREATETIMETABLE":
      const Array = action.payload
      return{
        ...state,
        table: [...table, ...Array]
      }
      // [...state.table,  ...Array]
    case "UPDATETIMETABLE":
      console.log(action.payload)
      
      return{
        ...state,
        table: table.map((timetable) =>
        (timetable._id === action.payload._id ? action.payload: timetable))
      }
    case "FETCHBYSEARCH":
      return  { ...state, table: action.payload.table,teacherData: action.payload.teacherData}
    case "ConfirmOrCancel":
      return  { ...state, table: action.payload,}
    default:
      return state;
  }
}

export default reducer