import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>Kitap Foto</h3>
        </div>
        <div>
          <h3>Yazar Foto</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
