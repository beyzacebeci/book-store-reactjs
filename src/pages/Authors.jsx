import SearchIcon from "@mui/icons-material/Search";
import "../styles/Authors.css";
import ShowAllAuthors from "../components/ShowAllAuthors";

export const Authors = () => {
  return (
    <div className="authors">
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Bir yazar ara"
          />
        </div>
        <button type="button" className="btn btn-secondary">
          <SearchIcon />
        </button>
      </div>
      <ShowAllAuthors />
    </div>
  );
};
