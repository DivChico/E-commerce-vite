import { useState } from "react";
import { Section, CategoryCard } from "../components";

function Categories() {
  const [categories, setCategories] = useState([1, 2, 3, 5, 5]);
  return (
    <div className="min-h-[600px]">
      <Section title={"Browse By Category"} header={"categories"}>
        <div className="flex flex-row flex-wrap items-center space-x-5 ">
          {categories &&
            categories.map((_, idx) => {
              return <CategoryCard key={idx} />;
            })}
        </div>
      </Section>
    </div>
  );
}

export default Categories;
