import React from "react";
import FormLayout from "../../layout/FormLayout";

const Form = ({ children, formSubmit }) => {
  return (
    <FormLayout>
      <form
        className="flex flex-col bg-slate-200 md:w-[25rem] w-[20rem] rounded-lg p-5"
        onSubmit={formSubmit}
      >
        {children}
      </form>
    </FormLayout>
  );
};

export default Form;
