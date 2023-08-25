import { useEffect, useState } from "react";
import React from "react";
import "../styles/Home.css";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { fetchCategories } from "../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import CategorySearch from "./CategorySearch";

export const ShowAllCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categorySlice.categoriesData);
  const loading = useSelector((state) => state.categorySlice.loading);
  const error = useSelector((state) => state.categorySlice.error);

  return (
    <div className="category-list">
      {loading && <div>Loading..</div>}
      {!loading && categories.error ? (
        <div>Error: {categories.error}</div>
      ) : null}
      {!loading && categories.length
        ? categories.map((category, index) => {
            return (
              <div key={index} className="category-and-books">
                <div className="category-name fs-6">
                  <span className="me-3">
                    <DoubleArrowIcon className="fs-4" />
                  </span>
                  {category.categoryName}
                </div>

                <div className="category-books">
                  {category.books.map((book) => (
                    <h5 key={book.id}>{book.title}</h5>
                  ))}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
