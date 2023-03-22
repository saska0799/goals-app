import { forwardRef } from "react";

const Textarea = forwardRef(({ placeholder }, ref) => {
  return (
    <textarea
      placeholder={placeholder}
      className="p-3 my-3 rounded-lg outline-none focus:border-b-2 border-[#B1B2FF]"
      ref={ref}
      maxLength="30"
      required
    />
  );
});

export default Textarea;
