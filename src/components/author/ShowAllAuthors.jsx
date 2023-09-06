import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../../store/slices/authorSlice";
import Loading from "../Loading";

function ShowAllAuthors() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  const { authors, authorsStatus } = useSelector(
    ({ authorSlice: { authorsData, searchTerm } }) => {
      const filteredAuthors = authorsData.filter((author) =>
        author.authorName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        authors: filteredAuthors,
      };
    }
  );

  return (
    <>
      {authorsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div className="author-list">
          {authors.map((author, index) => {
            return (
              <a
                key={index}
                href={`/oneAuthorInfo/${author.authorId}`}
                className="author-container"
              >
                <div className="img-area">
                  <img
                    className="authorImage"
                    src={`data:image/jpg;base64,${author.image}`}
                  />
                </div>
                <div className="authorName">
                  {" "}
                  <h6>{author.authorName}</h6>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ShowAllAuthors;
