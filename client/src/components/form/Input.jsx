import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 my-3 rounded-lg outline-none focus:border-b-2 border-[#B1B2FF]"
      ref={ref}
      required
    />
  );
});

export default Input;
