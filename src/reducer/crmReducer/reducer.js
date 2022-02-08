


const reducer = (state = [], action ) =>{
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "SignIn":
      console.log(action.payload);
      return [...state, action.payload]
    default:
      return state;
  }
}

export default reducer