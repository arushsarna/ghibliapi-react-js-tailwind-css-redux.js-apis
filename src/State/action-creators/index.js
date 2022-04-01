export const setId = (id) => {
  return (dispatch) => {
    dispatch({
      type: "setId",
      payload: id,
    });
  };
};
