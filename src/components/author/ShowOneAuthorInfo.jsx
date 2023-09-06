import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthorById, fetchAuthors } from "../../store/slices/authorSlice";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

function ShowOneAuthorInfo() {
  const dispatch = useDispatch();

  const params = useParams();
  const authorId = params.id;

  useEffect(() => {
    dispatch(fetchAuthorById(authorId));
  }, [dispatch, authorId]);

  const clickedAuthor = useSelector(
    (state) => state.authorSlice.clickedAuthorData
  );

  const books = clickedAuthor.books;
  console.log(books);

  return (
    <div className="oneAuthorInfo">
      <div className="ps-5">
        {
          /* {authors.map((author) => (
          <div key={author.authorId}>
            <h2>{author.authorName}</h2>
            {author.books.map((book) => (
              <div key={book.id}>
                <h3>{book.title}</h3>
                <p>Price:${book.price}</p>
              </div>
            ))}
          </div>
        ))} */

          // books.map((book) => (
          //   <div key={book.id}>
          //     <h3>{book.title}</h3>
          //     <p>Price:${book.price}</p>
          //   </div>
          // ))

          clickedAuthor.authorName
        }
      </div>
    </div>
  );
}

export default ShowOneAuthorInfo;
