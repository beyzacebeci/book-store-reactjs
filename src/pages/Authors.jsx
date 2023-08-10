import "../styles/Authors.css";
import ShowAllAuthors from "../components/ShowAllAuthors";
import AuthorSearch from "../components/AuthorSearch";

export const Authors = () => {
  return (
    <div className="authors">
      <AuthorSearch />
      <ShowAllAuthors />
    </div>
  );
};
