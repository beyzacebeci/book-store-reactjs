import axios from "axios";
import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Books.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../store/slices/bookSlice";

export const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.bookSlice.booksData);
  const loading = useSelector((state) => state.bookSlice.loading);
  const error = useSelector((state) => state.bookSlice.error);

  return (
    <div className="all-books">
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Bir kitap ara"
          />
        </div>

        <button type="button" className="btn btn-secondary">
          <SearchIcon />
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Kitap</th>
            <th>Kategori</th>
            <th>Yazar</th>
            <th>Fiyat</th>
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
                      <img
                        className="bookImage"
                        src={`data:image/png;base64,${book.image}`}
                      />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.categoryName}</td>
                    <td>{book.authorName}</td>
                    <td>{book.price}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};
