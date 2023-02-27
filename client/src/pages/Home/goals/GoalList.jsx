import { useContext, useEffect, useCallback } from "react";
import AuthContext from "../../../context/auth/AuthContext";
import GoalContext from "../../../context/goal/GoalContext";
import GoalListItem from "./GoalListItem";
import { getFetch } from "../../../lib/fetch";

const GoalList = () => {
  const { goals, goalDispatch } = useContext(GoalContext);
  const { user } = useContext(AuthContext);

  const fetchGoals = useCallback(async () => {
    await getFetch(process.env.REACT_APP_GOALS, {
      headers: { Authorization: `Bearer ${user.token}` },
    }).then((goal) => {
      goalDispatch({ type: "GET_GOALS", payload: goal });
    });
  }, [goalDispatch, user.token]);

  useEffect(() => {
    fetchGoals();
  }, [fetchGoals]);

  return (
    <section className="lg:w-[55%] md:w-[75%] sm:w-[90%] w-[100%] m-auto py-24 text-center">
      {goals.length === 0 && <p>No goals for now!</p>}
      {goals && goals.map((item) => <GoalListItem key={item._id} {...item} />)}
    </section>
  );
};

export default GoalList;
