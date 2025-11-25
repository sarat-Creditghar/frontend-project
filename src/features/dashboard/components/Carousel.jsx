import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carouselData from "../data/carouselData.json";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { slides } = carouselData;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {/* Carousel Images */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-semibold text-purple-300 mb-2 uppercase tracking-wider">
                {slide.category}
              </p>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">
                {slide.title}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-2">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots - Top Left */}
      <div className="absolute top-6 left-6 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex
                ? "bg-purple-300 w-2"
                : "bg-white/50 hover:bg-white/75 w-2"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Top Right */}
      <div className="absolute top-6 right-6 flex gap-2 z-10">
        <button
          onClick={goToPrevious}
          className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-white/20 text-white backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-white/20 text-white backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
