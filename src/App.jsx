import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Authors } from "./pages/Authors";
import { Books } from "./pages/Books";
import { Contact } from "./pages/Contact";
import ShowOneAuthorInfo from "./components/ShowOneAuthorInfo";
import Cart from "./pages/Cart";
import WrongPath from "./components/WrongPath";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/authors" exact element={<Authors />} />
        <Route path="/books" exact element={<Books />} />{" "}
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/oneAuthorInfo" exact element={<ShowOneAuthorInfo />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="*" exact element={<WrongPath />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
