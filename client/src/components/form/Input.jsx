import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 my-3 rounded-lg"
      ref={ref}
      required
    />
  );
});

export default Input;
