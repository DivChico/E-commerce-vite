import { useDispatch, useSelector } from "react-redux";
import { actGetCategories } from "../store/categories/categoriesSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { records, loading, error } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(actGetCategories());
  }, []);
  console.log(records);

  return (
    <div className="flex flex-row px-10">
      {/* categories */}
      <div className="w-1/4 p-1 border-r py-4">
        <ul className="space-y-2 w-full">
          {records &&
            records.map((category, idx) => {
              return (
                <button
                  key={idx}
                  className="flex  flex-row justify-between items-center space-x-10 w-20"
                  onClick={() => {
                    navigate(`/categories/products/${category.title}`);
                  }}
                >
                  <li>
                    <p className="text-lg font-semibold">{category.title}</p>
                  </li>
                </button>
              );
            })}
        </ul>
      </div>
      {/* carousel */}
      <div className="w-3/4 flex items-center justify-center"> </div>
    </div>
  );
};

export default Hero;
