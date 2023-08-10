import React from "react";
import BookLogo from "../assets/book.png";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BookLogo} alt="" />
        <h4>Book Store</h4>
        <div className="mainLink">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/authors"> Authors</NavLink>
          <NavLink to="/books">All Books</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="cartDiv">
            <span className="items">0</span>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
