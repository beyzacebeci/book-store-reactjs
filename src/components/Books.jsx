import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Books.css";

export const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7142/api/books")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="all-books">
      <div class="input-group">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Bir kitap ara"
          />
        </div>
        <button type="button" class="btn btn-secondary">
          <SearchIcon />
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Kitap</th>

            <th>Kategori</th>
            <th>Yazar</th>
            <th>Fiyat</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book, index) => {
            return (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.categoryName}</td>
                <td>{book.authorName}</td>
                <td>{book.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};