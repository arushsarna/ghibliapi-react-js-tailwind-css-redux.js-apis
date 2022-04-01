const reducer = (state = "hey", action) => {
  if (action.type === "setId") {
    return action.payload;
  } else {
    return state;
  }
};
export default reducer;
