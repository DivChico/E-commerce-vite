import { useEffect, useState } from "react";
import { Hero, ProductCard, Section } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const { productsByCatPrefix, loading, error } = useSelector(
    (state) => state.products
  );
  const [flashSales, setFlashSales] = useState([1, 5, 2, 5, 2, 5]);

  return (
    <>
      <Hero />
      <Section title="Flash Sales" IsBtn={true} header={"Today's "}>
        <div className="flex flex-row space-x-4 overflow-hidden">
          {productsByCatPrefix &&
            productsByCatPrefix.map((product, idx) => {
              return <ProductCard product={product} key={idx} />;
            })}
        </div>
      </Section>
      <Section title="Flash Sales" IsBtn={true} header={"Today's "}>
        <div className="flex flex-row space-x-4 overflow-hidden">
          {productsByCatPrefix &&
            productsByCatPrefix.map((product, idx) => {
              return <ProductCard product={product} key={idx} />;
            })}
        </div>
      </Section>{" "}
      <Section title="Flash Sales" IsBtn={true} header={"Today's "}>
        <div className="flex flex-row space-x-4 overflow-hidden">
          {productsByCatPrefix &&
            productsByCatPrefix.map((product, idx) => {
              return <ProductCard product={product} key={idx} />;
            })}
        </div>
      </Section>{" "}
      <Section title="Flash Sales" IsBtn={true} header={"Today's "}>
        <div className="flex flex-row space-x-4 overflow-hidden">
          {productsByCatPrefix &&
            productsByCatPrefix.map((product, idx) => {
              return <ProductCard product={product} key={idx} />;
            })}
        </div>
      </Section>
    </>
  );
}

export default Home;
