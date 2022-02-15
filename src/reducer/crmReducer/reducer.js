


const reducer = (state = { authData: null }, action ) =>{
  switch (action.type) {
    case "FETCH_Data":
      return action.payload;
    case "SIGNIN":
      console.log(action.payload.token);
      localStorage.setItem("profile", JSON.stringify({...action.payload}))
      return {...state, authData: action.payload}
    case "TIMETABLE":
      return [...state,  action.payload]
    default:
      return state;
  }
}

export default reducer