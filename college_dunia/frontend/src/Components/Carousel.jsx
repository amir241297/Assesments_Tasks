import React, { useState } from 'react';
import '../Styles/carousel.css'; // Make sure to create this CSS file

const Carousel = () => {
  let images=[
    "https://images.collegedunia.com/public/asset/img/homepage-new/banner/4.webp?mode=stretch",
    "https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642574463.webp?mode=stretch",
    "https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642574875.webp?mode=stretch"

  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="arrow left-arrow">
        &#9664;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`carousel-image-${currentImageIndex}`}
        className="carousel-image"
      />
      <button onClick={nextImage} className="arrow right-arrow">
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
