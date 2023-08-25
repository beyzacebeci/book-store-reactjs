import React from "react";
import "../styles/Home.css";
import { ShowAllCategories } from "../components/ShowAllCategories";
import CategorySearch from "../components/CategorySearch";

export const Home = () => {
  return (
    <div className="category-and-books">
      <div className="category-container">
        <CategorySearch />
        <ShowAllCategories />
      </div>
    </div>
  );
};
