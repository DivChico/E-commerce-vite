const CustomButton = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm ${
        className ? className : "py-2 px-10 text-lg"
      } bg-red-500 text-white flex items-center justify-center`}
    >
      {title || "title"}
    </button>
  );
};

export default CustomButton;
