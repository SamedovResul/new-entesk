const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCHDATA":
      console.log(state);
      return action.payload;
    default:
      return state;
  }
}

export default reducer