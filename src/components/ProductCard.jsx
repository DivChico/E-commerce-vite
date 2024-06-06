import { useDispatch, useSelector } from "react-redux";
import { actAddToCart, actGetCartItems } from "../store/cart/cartSlice";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      {/* product image and add to cart */}
      <div className="w-[250px] h-[215px] rounded-sm border flex flex-col overflow-hidden">
        <div className="h-[177px] bg-gray-100 relative flex justify-center items-center ">
          <img
            src={product.img || ""}
            alt={product.title || "product img"}
            className="h-full contain-content"
          />
          <button className="absolute top-2 right-2 ">
            <AddShoppingCartIcon />
          </button>
          <button className="absolute top-10  right-2">
            <VisibilityIcon />
          </button>
          <p className="absolute top-2 left-2 bg-red-500 rounded-sm px-4 py-1 text-white text-xs ">
            -40%
          </p>
        </div>
        <div className="h-[38px] bg-black w-full flex justify-center items-center ">
          <button
            className="flex justify-center w-full items-center"
            onClick={() => {
              dispatch(
                actAddToCart({
                  productId: product.id,
                  quantity: 1,
                  title: product.title,
                })
              );
            }}
          >
            <p className="font-semibold text-white text-sm tracking-wide text-center">
              Add to cart
            </p>
          </button>
        </div>
      </div>
      {/* product price and reviwes */}
      <div className="text-sm font-semibold tracking-wide space-y-2 mt-2">
        <p>{product.title}</p>
        <div className="flex flex-row justify-start gap-2">
          <p className="text-red-500">${product.price || 100}</p>
          <p className="text-gray-500 line-through">
            ${+product.price + 100 || 100}
          </p>
        </div>
        <div>{/* star library */}</div>
      </div>
    </div>
  );
};

export default ProductCard;
