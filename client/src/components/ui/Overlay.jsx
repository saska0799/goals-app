import { useContext } from "react";
import ModalContext from "../../context/modal/ModalContext";

const Overlay = () => {
  const { modalDispatch } = useContext(ModalContext);

  return (
    <div
      className="modal h-screen w-full blur-lg opacity-30 z-10 bg-slate-200 fixed"
      onClick={() => {
        modalDispatch({ type: "CLOSE_MODAL", payload: false });
      }}
    />
  );
};

export default Overlay;
