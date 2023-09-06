import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store/slices/bookSlice";

function BookSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.bookSlice.searchTerm;
  });
  return (
    <div className="book-search">
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Bir kitap ara"
            onChange={(event) => {
              dispatch(changeSearchTerm(event.target.value));
            }}
            value={searchTerm}
          />
        </div>

        <button type="button" className="btn btn-secondary">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default BookSearch;
