import CustomButton from "./CustomButton";

const Section = ({ children, title, IsBtn, header }) => {
  return (
    <section className=" mx-10  items-center py-10 border-b">
      <div className=" flex flex-row items-center space-x-2 mb-4">
        <div className="p-2 bg-red-500 rounded-sm w-1 py-3"></div>
        <p className="text-bold text-xs text-red-500 font-bold capitalize">
          {header}
        </p>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center mb-10">
          <p className="text-2xl font-bold tracking-wide capitalize">{title}</p>
          {IsBtn && <CustomButton />}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
