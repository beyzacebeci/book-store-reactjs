import React from "react";
import { useNavigate } from "react-router-dom";
import SliderComp from "../components/cart/SliderComp";
import Sorting from "../components/cart/Sorting";

function Cart() {
  return (
    <div>
      {/* <SliderComp /> */}
      <Sorting />
    </div>
  );
}

export default Cart;
