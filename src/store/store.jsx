import { configureStore } from "@reduxjs/toolkit";
import { authorReducer } from "./slices/authorSlice";
import { bookReducer } from "./slices/bookSlice";

export const store = configureStore({
  reducer: {
    authorSlice: authorReducer,
    bookSlice: bookReducer,
  },
});
