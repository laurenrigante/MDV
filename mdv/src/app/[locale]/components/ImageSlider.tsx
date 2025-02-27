import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true, 
    autoplaySpeed: 4000, 
  };

  return (
    <div className="px-4 sm:px-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto object-contain " 
            />
          </div>
        ))}
      </Slider>
    </div>
);
};

export default ImageSlider;
