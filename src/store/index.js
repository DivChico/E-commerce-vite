import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";
export const store = configureStore({
  reducer: { categories, products, cart },
});

export default store;
