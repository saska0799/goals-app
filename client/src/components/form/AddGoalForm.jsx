import { forwardRef, useContext } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import ModalContext from "../../context/modal/ModalContext";
import Button from "../ui/Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";

const AddGoalForm = forwardRef(({ formSubmit }, ref) => {
  const { modalDispatch } = useContext(ModalContext);
  return (
    <Form formSubmit={formSubmit}>
      <div className="flex justify-between my-5">
        <h2 className="text-3xl">Add a goal</h2>
        <AiOutlineCloseSquare
          className=" w-[2.5rem] h-auto cursor-pointer fill-[#B1B2FF] hover:fill-[#AAC4FF]"
          color="gray"
          onClick={() => modalDispatch({ type: "CLOSE_MODAL", payload: false })}
        />
      </div>
      <div className="flex flex-col my-5">
        <label>Title</label>
        <Input type="text" placeholder="Title" ref={ref.titleRef} required />
        <label>Description</label>
        <Textarea placeholder="Description" ref={ref.descriptionRef} />
      </div>
      <div className="flex justify-between my-5">
        <div className="flex justify-center items-center">
          <label>Urgent?</label>
          <Checkbox ref={ref.urgentRef} />
        </div>
        <Input
          type="datetime-local"
          name="date"
          ref={ref.deadlineRef}
          required
        />
      </div>
      <Button>Submit</Button>
    </Form>
  );
});

export default AddGoalForm;
