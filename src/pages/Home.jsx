import React from "react";
import "../styles/Home.css";
import { ShowAllCategories } from "../components/ShowAllCategories";

export const Home = () => {
  return (
    <div className="home">
      <ShowAllCategories />
    </div>
  );
};
