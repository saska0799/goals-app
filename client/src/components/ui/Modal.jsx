const Modal = ({ children }) => {
  return (
    <div className="modal fixed z-20 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Modal;
