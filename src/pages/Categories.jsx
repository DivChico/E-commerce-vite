import { useState } from "react";
import { Section, CategoryCard } from "../components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Categories() {
  const navigate = useNavigate();
  const { records } = useSelector((state) => state.categories);
  const [categories, setCategories] = useState([1, 2, 3, 5, 5]);
  return (
    <div className="min-h-[600px]">
      <Section title={"Browse By Category"} header={"categories"}>
        <div className="flex flex-row flex-wrap items-center space-x-5 ">
          {records &&
            records.map((category, idx) => {
              return (
                <CategoryCard
                  key={idx}
                  category={category}
                  onClick={() => {
                    navigate(`/categories/products/${category.title}`);
                  }}
                />
              );
            })}
        </div>
      </Section>
    </div>
  );
}

export default Categories;
