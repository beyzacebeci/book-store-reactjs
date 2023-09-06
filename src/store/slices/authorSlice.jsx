import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import axios from "axios";

const initialState = {
  authorsData: [],
  authorsStatus: STATUS.IDLE,

  clickedAuthorData: {},
  clickedAuthorStatus: STATUS.IDLE,

  searchTerm: "",
};

export const fetchAuthors = createAsyncThunk("fetchAuthor", async () => {
  const res = await axios.get("https://localhost:7142/api/authors");
  return res.data;
});

export const fetchAuthorById = createAsyncThunk(
  "fetchAuthorById",
  async (id) => {
    const res = await axios.get(`https://localhost:7142/api/authors/${id}`);
    return res.data;
  }
);

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state, action) => {
        state.authorsStatus = STATUS.LOADING;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.authorsStatus = STATUS.SUCCESS;
        state.authorsData = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.authorsStatus = STATUS.FAIL;
      })

      .addCase(fetchAuthorById.pending, (state, ation) => {
        state.authorsStatus = STATUS.LOADING;
      })
      .addCase(fetchAuthorById.fulfilled, (state, action) => {
        state.authorsStatus = STATUS.SUCCESS;
        state.clickedAuthorData = action.payload;
      });
    builder.addCase(fetchAuthorById.rejected, (state, action) => {
      state.authorsStatus = STATUS.FAIL;
    });
  },
});

export const { changeSearchTerm } = authorSlice.actions;
export const authorReducer = authorSlice.reducer;
