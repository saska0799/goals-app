import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="p-3 rounded-lg bg-slate-500 text-slate-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
