import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigation} from '../util/navigate/index'

const HeroCarousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

 const { navigateToDetail } = useNavigation();
  return (
    <Slider {...settings} className="relative"> 
      {slides.map((slide) => (
        <div className="flex" key={slide.id}>
          <div
            className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center md:justify-start 
                     bg-cover bg-center px-6 md:px-16"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="absolute inset-0  max-md:backdrop-blur-sm md:backdrop-blur-md" />
            <div className="relative z-10 text-white max-w-lg text-center md:text-left">
              <h2 className=" text-2xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              {/* <p className="mb-6 text-sm md:text-base">{slide.description}</p> */}
              <button onClick={() => navigateToDetail(slide.id)} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 cursor-pointer">
                {slide.buttonText}
              </button>
            </div>
            {slide.charactersImage && (
              <img
                src={slide.charactersImage}
                alt="characters"
                className="absolute bottom-0 max-md:bottom-10 h-[80%] object-contain hidden md:inline-block md:right-0"
              />
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroCarousel;
