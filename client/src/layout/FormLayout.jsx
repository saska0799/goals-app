import React from "react";
import ReactDOM from "react-dom";
import Modal from "../components/ui/Modal";
import Overlay from "../components/ui/Overlay";

const FormLayout = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Modal>{children}</Modal>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default FormLayout;
