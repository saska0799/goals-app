import { useContext } from "react";

import ModalContext from "../../context/modal/ModalContext";

import GoalList from "./components/goals/GoalList";
import AddGoal from "./components/goals/AddGoal";
const Home = () => {
  const { modalState } = useContext(ModalContext);
  return (
    <>
      {modalState.open && <AddGoal />}
      <GoalList />
    </>
  );
};

export default Home;
