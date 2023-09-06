import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store/slices/authorSlice";

function AuthorSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.authorSlice.searchTerm;
  });

  return (
    <div>
      {" "}
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            className="form-control"
            placeholder="Bir yazar ara"
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

export default AuthorSearch;
