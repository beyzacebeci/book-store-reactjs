import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

const initialState = {
  books: [],
  booksOfCategory: [],
  booksStatus: STATUS.IDLE,
  bookDetail: [],
  bookDetailStatus: STATUS.IDLE,
};

export const getBooks = createAsyncThunk("getBooks", async () => {
  const response = await fetch(
    "https://localhost:7142/api/books?PageNumber=1&PageSize=30"
  );
  const data = await response.json();
  // debugger;
  return data;
});

// export const getDetailBook = createAsyncThunk("getDetailBook", async (id) => {
//   const response = await fetch(`https://localhost:7142/api/books/${id}`);
//   const data = await response.json();
//   return data;
// });

export const getBooksOfCategory = createAsyncThunk(
  "getBooksOfCategory",
  async (category) => {
    const response = await fetch(
      `https://localhost:7142/api/categories/?searchTerm=${category}`
    );
    const data = await response.json();
    return data;
  }
);

const booksOfCategorySlice = createSlice({
  name: "booksOfCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.booksStatus = STATUS.LOADING;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.booksStatus = STATUS.SUCCESS;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.booksStatus = STATUS.FAIL;
      })

      // .addCase(getDetailBook.pending, (state, action) => {
      //   state.bookDetailStatus = STATUS.LOADING;
      // })
      // .addCase(getDetailBook.fulfilled, (state, action) => {
      //   state.bookDetailStatus = STATUS.SUCCESS;
      //   state.bookDetail = action.payload;
      // })
      // .addCase(getDetailBook.rejected, (state, action) => {
      //   state.bookDetailStatus = STATUS.FAIL;
      // })

      .addCase(getBooksOfCategory.pending, (state, action) => {
        state.booksStatus = STATUS.LOADING;
      })
      .addCase(getBooksOfCategory.fulfilled, (state, action) => {
        state.booksStatus = STATUS.SUCCESS;
        state.booksOfCategory = action.payload;
      })
      .addCase(getBooksOfCategory.rejected, (state, action) => {
        state.booksStatus = STATUS.FAIL;
      });
  },
});

export const booksOfCategoryReducer = booksOfCategorySlice.reducer;
