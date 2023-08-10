import React from "react";
import BookLogo from "../assets/book.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BookLogo} alt="" />
        <h4>Book Store</h4>
        <div className="mainLink">
          <Link to="/">Home</Link>
          <Link to="/authors"> Authors</Link>
          <Link to="/books">All Books</Link>
          <Link to="/contact">Contact</Link>
          <div className="cartDiv">
            <span className="items">0</span>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
