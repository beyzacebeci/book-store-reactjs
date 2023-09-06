import React from "react";
import "./BooksOfCategory.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBooks,
  getBooksOfCategory,
} from "../../store/slices/booksOfCategorySlice";

import Loading from "../Loading";
useDispatch;

const BooksOfCategory = ({ category }) => {
  const dispatch = useDispatch();
  const { booksOfCategory, booksStatus } = useSelector(
    (state) => state.booksOfCategorySlice
  );

  useEffect(() => {
    if (category) {
      dispatch(getBooksOfCategory(category));
    } else {
      //bir sorun var
      dispatch(getBooks());
    }
  }, [dispatch, category]);

  return (
    <div>
      {booksStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div>
          {booksOfCategory?.map((category) => (
            <div key={category.categoryId}>
              <div className="category-books">
                {category.books.map((book) => (
                  <div className="bookContainer" key={book.id}>
                    <div className="img-area mb-4 mt-5">
                      <img
                        className="bookImage"
                        src={`data:image/jpg;base64,${book.image}`}
                      />
                    </div>
                    {book.title}
                    {/* <button className="btn btn-primary">Sepete Ekle</button> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksOfCategory;
