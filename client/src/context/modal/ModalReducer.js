export const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, open: action.payload };
    case "CLOSE_MODAL":
      return { ...state, open: action.payload };
    default:
      return state;
  }
};
