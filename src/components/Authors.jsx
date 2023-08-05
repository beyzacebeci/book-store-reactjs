import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Authors.css";
import { useContext } from "react";
import BookStoreContext from "../context/storeContext";

export const Authors = () => {
  const { fetchAuthors, authors } = useContext(BookStoreContext);

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div className="authors">
      <div class="input-group">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Bir yazar ara"
          />
        </div>
        <button type="button" class="btn btn-secondary">
          <SearchIcon />
        </button>
      </div>
      <div className="author-list">
        {authors.map((author, index) => {
          return (
            <div className="author-container">
              <h4 key={index}>{author.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
