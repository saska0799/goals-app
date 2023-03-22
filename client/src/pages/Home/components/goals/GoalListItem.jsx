import { useContext } from "react";
import { formatDistanceToNow } from "date-fns";
import { AiFillDelete } from "react-icons/ai";
import { getFetch } from "../../../../lib/fetch";
import GoalContext from "../../context/GoalContext";
import AuthContext from "../../../../context/auth/AuthContext";

const GoalListItem = ({
  _id,
  urgent,
  title,
  description,
  deadline,
  createdAt,
}) => {
  const { goalDispatch } = useContext(GoalContext);
  const { user } = useContext(AuthContext);

  const deleteGoal = async () => {
    await getFetch(`${process.env.REACT_APP_GOALS}/${_id}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }).then((goal) => goalDispatch({ type: "REMOVE_GOAL", payload: goal }));
  };

  return (
    <div
      className={`bg-[#EEF1FF] py-10 my-5 flex justify-between items-center border-l-4 ${
        urgent ? "border-[#FF7878]" : "border-[#9ED2C6]"
      } shadow-lg shadow-slate-400`}
    >
      <div className="flex sm:mx-10 mx-5 overflow-x-hidden">
        <h3 className="text-[#554994]">{title}</h3>
        <p className="ml-10 break-words sm:w-[50%] w-[75%] text-[#AAC4FF]">
          {description}
        </p>
      </div>
      <div className="flex items-center md:px-10 px-5 text-[#554994]">
        <div className="md:pr-10 mr-10 text-end">
          <p>Deadline: {deadline}</p>
          <p>
            {`Added ${formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
            })}`}
          </p>
        </div>
        <AiFillDelete
          className="cursor-pointer fill-[#B1B2FF] hover:fill-[#AAC4FF]"
          onClick={deleteGoal}
        />
      </div>
    </div>
  );
};

export default GoalListItem;
