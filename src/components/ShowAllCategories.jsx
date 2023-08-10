import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "../styles/Home.css";
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { fetchCategories } from "../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";

export const ShowAllCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categorySlice.categoriesData);
  const loading = useSelector((state) => state.categorySlice.loading);
  const error = useSelector((state) => state.categorySlice.error);

  return (
    <div className="all-categories">
      <div className="input-group mb-3">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Bir kategori ara"
          />
        </div>
        <button type="button" className="btn btn-secondary">
          <SearchIcon />
        </button>
      </div>

      <div className="category-list">
        {loading && <div>Loading..</div>}
        {!loading && categories.error ? (
          <div>Error: {categories.error}</div>
        ) : null}
        {!loading && categories.length
          ? categories.map((category, index) => {
              return (
                <div key={index} className="category-name">
                  <div className="me-3">
                    <AutoStoriesIcon className="fs-4" />
                  </div>
                  <div className="fs-6">{category.name}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
