import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/Home";
import { Authors } from "./pages/Authors";
import { Books } from "./pages/Books";
import { Contact } from "./pages/Contact";
import ShowOneAuthorInfo from "./components/author/ShowOneAuthorInfo";
import Cart from "./pages/Cart";
import WrongPath from "./components/WrongPath";
import { useState } from "react";
useState;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" exact element={<Books />} />{" "}
        <Route path="/contact" exact element={<Contact />} />
        <Route
          path="/oneAuthorInfo/:id"
          exact
          element={<ShowOneAuthorInfo />}
        />
        <Route path="/authors" exact element={<Authors />}></Route>
        <Route path="/cart" exact element={<Cart />} />
        <Route path="*" exact element={<WrongPath />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
