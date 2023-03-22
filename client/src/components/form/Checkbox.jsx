import { forwardRef } from "react";

const Checkbox = forwardRef((props, ref) => {
  return <input type="checkbox" className="ml-5 rounded-lg" ref={ref} />;
});

export default Checkbox;
