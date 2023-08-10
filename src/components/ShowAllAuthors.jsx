import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../store/slices/authorSlice";

function ShowAllAuthors() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  const authors = useSelector((state) => state.authorSlice.authorsData);
  const loading = useSelector((state) => state.authorSlice.loading);
  const error = useSelector((state) => state.authorSlice.error);
  return (
    <div className="author-list">
      {loading && <div>Loading..</div>}
      {!loading && authors.error ? <div>Error: {authors.error}</div> : null}
      {!loading && authors.length
        ? authors.map((author, index) => {
            return (
              <div className="author-container" key={index}>
                <div className="img-area">
                  <img
                    className="authorImage"
                    src={`data:image/png;base64,${author.image}`}
                  />
                </div>
                <div className="authorName">
                  {" "}
                  <h6>{author.name}</h6>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ShowAllAuthors;
