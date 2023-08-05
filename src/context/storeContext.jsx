import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const BookStoreContext = createContext();

function Provider({ children }) {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  const fetchAuthors = () => {
    axios
      .get("https://localhost:7142/api/authors")
      .then((res) => setAuthors(res.data))
      .catch((err) => console.log(err));
  };
  const fetchBooks = () => {
    axios
      .get("https://localhost:7142/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  const sharedValuesAndMethods = {
    authors,
    fetchAuthors,
    books,
    fetchBooks,
  };

  return (
    <BookStoreContext.Provider value={sharedValuesAndMethods}>
      {children}
    </BookStoreContext.Provider>
  );
}

export { Provider };
export default BookStoreContext;
