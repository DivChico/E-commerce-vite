import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductsFullInfo = createAsyncThunk(
  "cart/actGetProductsFullInfo",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkAPI;

    const response = await axios.get("http://localhost:5005/cart");
    let itemsId = response.data.map((item) => {
      return item.item.productId;
    });

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      let response = await axios.get(
        `http://localhost:5005/products?${concatenatedItemsId}`,
        {
          signal,
        }
      );

      response.data = response.data.filter((item) => {
        return itemsId.includes(item.id);
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetProductsFullInfo;
