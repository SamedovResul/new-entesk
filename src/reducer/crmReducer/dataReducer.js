const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHDATA":
      console.log(state);
      return action.payload;
    case "CREATECLASS":
      console.log(action.payload)
      return [...state, action.payload]
    case "UPDATECLASS":
      console.log(state)
      return state.classes.map((clas) =>(clas._id === action.payload._id? action.payload: clas))
    default:
      return state;
  }
}

export default reducer