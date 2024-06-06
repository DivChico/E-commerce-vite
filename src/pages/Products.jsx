import { useEffect, useState } from "react";
import { ProductCard, Section } from "../components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actGetProductsByCatPrefix } from "../store/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { productsByCatPrefix, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix));

    return () => {
      // dispatch(productsCleanUp());
    };
  }, [dispatch, params]);
  return (
    <Section header={params.prefix} title={params.prefix}>
      <div className="flex flex-row flex-wrap   gap-10 justify-center">
        {productsByCatPrefix &&
          productsByCatPrefix.map((product, idx) => {
            return <ProductCard key={idx} product={product} />;
          })}
      </div>
    </Section>
  );
};

export default Products;
