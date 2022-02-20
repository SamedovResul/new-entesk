const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHCLASSDATA":
      // console.log(state);
      return action.payload;
    case "CREATECLASS":
      console.log(state)
      return [...state, action.payload]
    case "UPDATECLASS":
      return state.map((clas) =>(clas._id === action.payload.id? action.payload: clas))
    case "DELETECLASS":
      return state.filter((clas) => clas.id !== action.payload)
    default:
      return state;
  }
}

export default reducer