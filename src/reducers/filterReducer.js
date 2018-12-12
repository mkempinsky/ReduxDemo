const filterReducer = (state = [], action) => {
  switch (action.type) {
    case "A_FIRST":
      return state.sort();
    default:
      return state;
  }
};

export default filterReducer;
