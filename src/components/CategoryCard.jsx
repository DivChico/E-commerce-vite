const CategoryCard = ({ category, onClick }) => {
  return (
    <button className="hover:bg-red-500 rounded-md shadow " onClick={onClick}>
      <div className="w-[133px] h-[156px]  rounded-md border border-gray-300 p-4 flex flex-col items-center justify-center ">
        {category.title}
      </div>
    </button>
  );
};

export default CategoryCard;
