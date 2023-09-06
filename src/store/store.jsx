import { configureStore } from "@reduxjs/toolkit";
import { authorReducer } from "./slices/authorSlice";
import { bookReducer } from "./slices/bookSlice";
import { categoryReducer } from "./slices/categorySlice";
import { booksOfCategoryReducer } from "./slices/booksOfCategorySlice";

export const store = configureStore({
  reducer: {
    authorSlice: authorReducer,
    bookSlice: bookReducer,
    categorySlice: categoryReducer,
    booksOfCategorySlice: booksOfCategoryReducer,
  },
});
