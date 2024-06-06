import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actDeleteItem = createAsyncThunk(
  "cart/actDeleteItem",
  async (itemId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(
        `http://localhost:5005/cart/${itemId}`
      );
      console.log(`http://localhost:5005/cart/${itemId}`);
      return itemId;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actDeleteItem;
