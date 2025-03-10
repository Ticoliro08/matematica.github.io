import React, { useState } from "react";

import './slideShow.css'
const Slideshow = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = [
    { img: "matematica/src/assets/imagem1.jpg", caption: "Caption Text" },
    { img: "matematica/src/assets/imagem2.jpg", caption: "Caption Two" },
    { img: "matematica/src/assets/imagem3.jpg", caption: "Caption Three" },
  ];

  const plusSlides = (n) => {
    let newIndex = currentSlideIndex + n;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    setCurrentSlideIndex(newIndex);
  };

  const currentSlide = (index) => {
    setCurrentSlideIndex(index - 1);
  };

  return (
    <article className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentSlideIndex ? "active" : ""}`}
        >
          <div className="numbertext">{index + 1} / {slides.length}</div>
          <img src={slide.img} alt={slide.caption} style={{ width: "100%" }} />
          <div className="text">{slide.caption}</div>
        </div>
      ))}
      
      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>

      <br />
      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlideIndex ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </article>
  );
};

export default Slideshow;
