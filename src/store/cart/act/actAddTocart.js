import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const actAddToCart = createAsyncThunk(
  "cart/actAddToCart",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(`http://localhost:5005/cart`, {
        item,
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actAddToCart;
