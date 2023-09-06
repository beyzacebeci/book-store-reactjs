import React, { useState } from "react";
import "../styles/Home.css";
import { ShowAllCategories } from "../components/category/ShowAllCategories";
import CategorySearch from "../components/category/CategorySearch";
import BooksOfCategory from "../components/category/BooksOfCategory";

export const Home = () => {
  const [category, setCategory] = useState("");
  // debugger;

  return (
    <div className="category-container">
      <CategorySearch />
      <div className="category-book-container">
        <ShowAllCategories setCategory={setCategory} />
        <BooksOfCategory category={category} />
      </div>
    </div>
  );
};
