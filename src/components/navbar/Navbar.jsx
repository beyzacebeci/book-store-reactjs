import React from "react";
import BookLogo from "./book.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  const navigate = useNavigate();
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

          <div onClick={() => navigate("/cart")} className="cartDiv">
            <span className="items">0</span>
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
