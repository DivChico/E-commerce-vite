import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCartItems = createAsyncThunk(
  "cart/actGetCartItems",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:5005/cart");
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

export default actGetCartItems;
