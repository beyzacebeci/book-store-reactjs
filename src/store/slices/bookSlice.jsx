import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  booksData: [],
  loading: false,
  error: "",
  searchTerm: "",
};
export const fetchBooks = createAsyncThunk("fetchBook", async () => {
  const res = await axios.get(
    "https://localhost:7142/api/books?pageNumber=1&pageSize=15"
  );
  return res.data;
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },

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
      state.error = "action.error.message";
      state.loading = false;
    });
  },
});

export const { changeSearchTerm } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
