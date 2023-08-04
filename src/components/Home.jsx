import React from "react";
import "../styles/Home.css";
import { ShowAllCategories } from "./ShowAllCategories";

export const Home = () => {
  return (
    <div className="home">
      <ShowAllCategories />
    </div>
  );
};
