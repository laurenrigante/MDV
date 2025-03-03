import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    if (images.length > 0) {
      const img = new Image();
      img.src = images[0];
      img.onload = () => {
        setDimensions({ width: img.width, height: img.height });
      };
    }
  }, [images]);

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
          <div
            key={index}
            className="flex justify-center items-center overflow-hidden"
          >
            {dimensions ? (
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto max-h-[500px] object-cover sm:max-h-[400px] lg:max-h-[500px]"
                style={{ width: dimensions.width, height: dimensions.height }}
              />
            ) : (
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto"
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
