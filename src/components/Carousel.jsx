import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    console.log("goToPrevious");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    console.log("goToNext");
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="arrow left-arrow" onClick={goToPrevious}>
        &#8592;
      </button>
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="arrow right-arrow" onClick={goToNext}>
        &#8594;
      </button>
      <div className="carousel-indicator">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;
