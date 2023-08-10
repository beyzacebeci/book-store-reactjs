import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  booksData: [],
  loading: false,
  error: "",
};
export const fetchBooks = createAsyncThunk("fetchBook", async () => {
  const res = await axios.get("https://localhost:7142/api/books");
  return res.data;
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.booksData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const bookReducer = bookSlice.reducer;
