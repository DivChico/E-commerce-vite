import { useNavigate } from "react-router-dom";

const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <button
      className="hover:bg-red-500 rounded-md shadow "
      onClick={() => {
        navigate("/categories/products/phones");
      }}
    >
      <div className="w-[133px] h-[156px]  rounded-md border border-gray-300 p-4 flex flex-col items-center justify-center ">
        category
      </div>
    </button>
  );
};

export default CategoryCard;
