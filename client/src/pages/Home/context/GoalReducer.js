export const goalReducer = (state, action) => {
  switch (action.type) {
    case "GET_GOALS":
      return {
        goals: action.payload,
      };
    case "ADD_GOAL":
      return { goals: [...state.goals, action.payload] };
    case "REMOVE_GOAL":
      return {
        goals: state.goals.filter((goal) => goal._id !== action.payload._id),
      };

    default:
      return state;
  }
};
