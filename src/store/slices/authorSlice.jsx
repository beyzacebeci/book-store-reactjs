import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  authorsData: [],
  clickedAuthorData: [],
  loading: false,
  error: "",
  searchTerm: "",
  // authorSearched:[],
};

export const fetchAuthors = createAsyncThunk("fetchAuthor", async () => {
  const res = await axios.get("https://localhost:7142/api/authors");
  debugger;
  return res.data;
});

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAuthors.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.authorsData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAuthors.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { changeSearchTerm } = authorSlice.actions;
export const authorReducer = authorSlice.reducer;
