import FormLayout from "../../layout/FormLayout";

const Form = ({ children, formSubmit }) => {
  return (
    <FormLayout>
      <form
        className="flex flex-col bg-[#EEF1FF] md:w-[25rem] w-[20rem] rounded-lg p-5"
        onSubmit={formSubmit}
      >
        {children}
      </form>
    </FormLayout>
  );
};

export default Form;
