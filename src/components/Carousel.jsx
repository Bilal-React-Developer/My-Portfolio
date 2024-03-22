import React, { useState, useEffect } from 'react';

import html_logo from "../components/assets/html_logo.png";
import css3_logo from "../components/assets/css3_logo.jpg";
import bootstrap_logo from "../components/assets/bootstrap_logo.png";
import Tailwind_logo from "../components/assets/Tailwind_logo.png";
import javascript_logo from "../components/assets/javascript_logo.png";
import react_logo from "../components/assets/react_logo.svg"
import NextJs_logo from "../components/assets/NextJs_logo.png";


// const images = [
//   { img: 'react_logo', title: 'Caption one' },
//   { src: 'NextJs_logo', title: 'Caption Two' }
//   { src: 'javascript_logo', title: 'Caption Three' },
//   { src: 'Tailwind_logo', title: 'Caption Four' },
//   { src: 'bootstrap_logo', title: 'Caption Five' },
//   { src: 'css3_logo', title: 'Caption Six' },
//   { src: 'html_logo', title: 'Caption Seven' },
// ]
const images = [
  { src: 'react_logo.svg', title: 'Caption one' },
  { src: 'NextJs_logo.png', title: 'Caption Two' }
];

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="relative">
        {images.map((image, index) => (
          <div key={index} className={`mySlides fade ${slideIndex === index ? 'block' : 'hidden'}`}>
            <div className="numbertext">{index + 1} / {images.length}</div>
            <img src={image.src} alt={image.title} className="w-full" />
            <div className="text">{image.title}</div>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 w-full text-center">
          {images.map((_, index) => (
            <span key={index} className={`dot ${slideIndex === index ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
