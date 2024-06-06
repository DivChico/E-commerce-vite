import React, { useEffect, useState } from "react";
import { Section } from "../components";
import { CustomButton } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  actDeleteItem,
  actGetCartItems,
  actGetProductsFullInfo,
} from "../store/cart/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const { items, productsFullInfo, loading, error } = useSelector(
    (state) => state.cart
  );
  const [shouldRender, setSetshouldRender] = useState(false);

  useEffect(() => {
    dispatch(actGetProductsFullInfo());
  }, [dispatch, items]);

  console.log(productsFullInfo);

  return (
    <Section header={"cart"} title={"Cart items"}>
      <div className="space-y-5">
        <div className="flex flex-row shadow items-center justify-between p-3 border border-gray-300">
          <p className="flex-1 ">product</p>
          <p className="flex-1">price</p>
          <p className="flex-1">quantity</p>
          <p className="flex-1">subtotal</p>
        </div>
        {productsFullInfo &&
          productsFullInfo.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-row shadow items-center justify-between p-3 border border-gray-300"
              >
                <div className="flex-1">
                  <p>{item.title}</p>
                  <CustomButton
                    title={"remove"}
                    className={"text-xs p-1"}
                    onClick={() => {
                      setSetshouldRender(!shouldRender);
                      dispatch(
                        actDeleteItem(
                          items.filter((product) => {
                            return product.item.productId == item.id;
                          })[0].id
                        )
                      );
                    }}
                  />
                </div>
                <p className="flex-1">${(+item.price).toFixed(2)}</p>
                <p className="flex-1">{item.quantity || 1}</p>
                <p className="flex-1">
                  ${(+item.price * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>
            );
          })}
      </div>
      <div className="flex flex-row justify-between mt-4">
        <div className="bg-white p-1 shadow-md mt-2 flex flex-row h-10  rounded-sm border-black border w-fit">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your coupon code"
            className="text-black flex-1 w-[250px] bg-white p-2 text-xs rounded-lg outline-none border-none "
          />
          <CustomButton title={"Applay Coupon"} className={"text-xs p-1"} />
        </div>
        <div className="w-[430px]  border-2 rounded-sm border-black shadow p-4 flex flex-col">
          <p className="font-bold tracking-wide text-sm ">Cart Total </p>
          <div className="flex flex-row justify-between border-b py-5">
            <p className="text-xs font-semibold">Subtotal:</p>
            <p className="text-xs font-semibold"> $150</p>
          </div>
          <div className="flex flex-row justify-between border-b py-5">
            <p className="text-xs font-semibold">Shipping:</p>
            <p className="text-xs font-semibold"> Free</p>
          </div>
          <div className="flex flex-row justify-between py-5">
            <p className="text-xs font-semibold">Total:</p>
            <p className="text-xs font-semibold"> $150</p>
          </div>
          <CustomButton
            title={"Procees to checkout"}
            className={"text-xs py-3 px-7 self-center"}
          />
        </div>
      </div>
    </Section>
  );
};

export default Cart;
