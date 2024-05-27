import React, { useState, useEffect } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

// import image1 from './one.jpg'; 
// import image2 from './two.jpg';
// import image3 from './three.jpg';

import image1 from './ch1.png'
import image2 from './ch2.png'
import image3 from './ch1.png'


const images = [image1, image2, image3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-container relative w-full h-screen overflow-hidden">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-800 text-white px-3 py-3 rounded-full  hover:bg-gray-700 focus:outline-none ml-4 opacity-50"
        onClick={handlePreviousImage}
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-400 text-white px-3 py-3 rounded-full  hover:bg-gray-700 focus:outline-none mr-4 opacity-50"
        onClick={handleNextImage}
      >
        <FaAngleRight />
      </button>
      <div className="carousel-content absolute top-0 left-0 w-full h-full">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;