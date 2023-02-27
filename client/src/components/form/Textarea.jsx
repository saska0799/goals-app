import React from "react";
import { forwardRef } from "react";

const Textarea = forwardRef(({ placeholder }, ref) => {
  return (
    <textarea
      placeholder={placeholder}
      className="p-3 my-3 rounded-lg"
      ref={ref}
      maxLength="30"
      required
    />
  );
});

export default Textarea;
