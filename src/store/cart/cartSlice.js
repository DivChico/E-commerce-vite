import { createSlice } from "@reduxjs/toolkit";
import actAddToCart from "./act/actAddTocart";
import actGetCartItems from "./act/actGetCartItems";
import actGetProductsFullInfo from "./act/actGetProductsFullInfo";
import actDeleteItem from "./act/actDeleteItem";
const initialState = {
  items: [],
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add to cart
    builder.addCase(actAddToCart.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAddToCart.fulfilled, (state, action) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAddToCart.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // delete from cart
    builder.addCase(actDeleteItem.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actDeleteItem.fulfilled, (state, action) => {
      state.loading = "succeeded";

      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    });
    builder.addCase(actDeleteItem.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    // get cart items
    builder.addCase(actGetCartItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCartItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(actGetCartItems.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    // get cart items fullinfo
    builder.addCase(actGetProductsFullInfo.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsFullInfo.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductsFullInfo.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actAddToCart, actGetCartItems, actGetProductsFullInfo, actDeleteItem };
export default cartSlice.reducer;
