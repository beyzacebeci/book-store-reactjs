import React from "react";
import { useEffect } from "react";
import "../../styles/Home.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { fetchCategories } from "../../store/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";

export const ShowAllCategories = ({ setCategory }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categorySlice.categoriesData);
  const loading = useSelector((state) => state.categorySlice.loading);
  const error = useSelector((state) => state.categorySlice.error);

  return (
    <div className="all-categories me-5">
      {categories.map((category, index) => {
        return (
          <div onClick={() => setCategory(category.categoryName)} key={index}>
            <div className="category-name fs-6">
              <span className="me-3">
                <DoubleArrowIcon className="fs-4" />
              </span>
              {category.categoryName}
            </div>
          </div>
        );
      })}
    </div>
  );
};
