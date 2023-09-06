import React from "react";
import "../../styles/Home.css";
import SearchIcon from "@mui/icons-material/Search";

function CategorySearch() {
  return (
    <div>
      {" "}
      <div className="input-group mb-3">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Bir kategori ara"
          />
        </div>
        <button type="button" className="btn btn-secondary">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default CategorySearch;
