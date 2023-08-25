import axios from "axios";
import React, { useEffect } from "react";

import "../styles/Books.css";

import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, fetchBooks } from "../store/slices/bookSlice";
import BookSearch from "../components/BookSearch";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // const books = useSelector((state) => state.bookSlice.booksData);

  const { books } = useSelector(
    ({
      authorSlice,
      bookSlice: { booksData, loading, error, searchTerm },
      categorySlice,
    }) => {
      const filteredBooks = booksData.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        books: filteredBooks,
      };
    }
  );

  const loading = useSelector((state) => state.bookSlice.loading);
  const error = useSelector((state) => state.bookSlice.error);

  return (
    <div className="all-books">
      <BookSearch />
      <table className="table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Kitap</th>
            <th>Fiyat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>Loading..</td>
            </tr>
          )}

          {!loading && books.error ? (
            <tr>
              <td>Error: {books.error}</td>
            </tr>
          ) : null}

          {!loading && books.length
            ? books.map((book, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {/* <img
                        className="bookImage"
                        src={`data:image/png;base64,${book.image}`}
                      /> */}{" "}
                      foto
                    </td>
                    <td>{book.title}</td>
                    <td>{book.price} TL</td>
                    <td>
                      <button className="btn btn-primary">Sepete Ekle</button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};
