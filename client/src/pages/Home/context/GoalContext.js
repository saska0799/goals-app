import { createContext, useReducer } from "react";
import { goalReducer } from "./GoalReducer";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const initialGoalState = { goals: [] };

  const [goalState, goalDispatch] = useReducer(goalReducer, initialGoalState);

  return (
    <GoalContext.Provider value={{ ...goalState, goalDispatch }}>
      {children}
    </GoalContext.Provider>
  );
};

export default GoalContext;
