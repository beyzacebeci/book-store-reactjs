import React from "react";
import BookLogo from "../assets/book-icon.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BookLogo} alt="" />
        <div className="mainLink">
          <Link to="/">Home</Link>
          <Link to="/authors"> Authors</Link>
          <Link to="/books">All Books</Link>

          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Log Out</Link>
        </div>
      </div>
    </div>
  );
};
