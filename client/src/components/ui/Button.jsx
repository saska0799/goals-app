const Button = ({ children, onClick }) => {
  return (
    <button
      className="p-3 rounded-lg bg-[#B1B2FF] hover:bg-[#AAC4FF] transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
