import { useContext, useRef } from "react";
import { formatDateAndTime } from "../../../../utils/formatDate";
import { getFetch } from "../../../../lib/fetch";
import ModalContext from "../../../../context/modal/ModalContext";
import GoalContext from "../../context/GoalContext";
import AuthContext from "../../../../context/auth/AuthContext";
import AddGoalForm from "../../../../components/form/AddGoalForm";

const AddGoal = () => {
  const { modalDispatch } = useContext(ModalContext);
  const { goalDispatch } = useContext(GoalContext);
  const { user } = useContext(AuthContext);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const urgentRef = useRef();
  const deadlineRef = useRef();

  const ref = { titleRef, descriptionRef, urgentRef, deadlineRef };

  const formSubmit = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const deadline = deadlineRef.current.value;
    const urgent = urgentRef.current.checked;

    const formattedDeadline = formatDateAndTime(deadline);

    const goal = { title, description, deadline: formattedDeadline, urgent };

    await getFetch(process.env.REACT_APP_GOALS, {
      method: "post",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: goal,
    }).then((goal) => {
      goalDispatch({
        type: "ADD_GOAL",
        payload: goal,
      });
    });

    modalDispatch({ type: "CLOSE_MODAL" });
  };

  return <AddGoalForm formSubmit={formSubmit} ref={ref} />;
};

export default AddGoal;
