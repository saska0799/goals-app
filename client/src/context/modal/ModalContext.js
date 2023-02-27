import { createContext, useReducer } from "react";
import { modalReducer } from "./ModalReducer";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const initialModalState = { open: false };

  const [modalState, modalDispatch] = useReducer(
    modalReducer,
    initialModalState
  );

  return (
    <ModalContext.Provider value={{ modalState, modalDispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
