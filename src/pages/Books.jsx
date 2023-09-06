import ShowAllBooks from "../components/book/ShowAllBooks";
import BookSearch from "../components/book/BookSearch";
import BookSort from "../components/book/BookSort";
import { useState } from "react";

export const Books = () => {
  const [sort, setSort] = useState("");
  return (
    <div>
      <div className="search-sort-container">
        <BookSearch />
        <BookSort />
      </div>
      <div className="show-books-container">
        <ShowAllBooks />
      </div>
    </div>
  );
};
