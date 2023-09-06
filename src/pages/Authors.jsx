import "../styles/Authors.css";
import ShowAllAuthors from "../components/author/ShowAllAuthors";
import AuthorSearch from "../components/author/AuthorSearch";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ShowOneAuthorInfo from "../components/author/ShowOneAuthorInfo";

export const Authors = ({ setAuthor }) => {
  return (
    <div className="authors">
      <AuthorSearch />
      <ShowAllAuthors setAuthor={setAuthor} />
    </div>
  );
};
