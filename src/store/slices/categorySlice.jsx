import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categoriesData: [],
  // categoriesBookData: [],
  // loading: false,
  // error: "",
};

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const res = await fetch("https://localhost:7142/api/categories");
  const data = res.json();
  return data;
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // builder.addCase(fetchCategories.pending, (state) => {
    //   state.loading = true;
    //   state.error = "";
    // });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoriesData = action.payload;
      state.loading = false;
    });
    // builder.addCase(fetchCategories.rejected, (state, action) => {
    //   state.error = action.error.message;
    //   state.loading = false;
    // });
  },
});

export const categoryReducer = categorySlice.reducer;
