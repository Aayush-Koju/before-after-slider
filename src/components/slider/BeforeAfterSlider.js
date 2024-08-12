import React, { useState, useRef } from "react";
import "./BeforeAfterSlider.css";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <>
      <h1>Before After Comparision Slider </h1>
      <div className="container" ref={containerRef}>
        <div
          className="before-image"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        ></div>
        <div className="after-image"></div>
        <input
          type="range"
          className="slider"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
        ></input>
        <div
          className="slider-button"
          style={{ left: `calc(${sliderPosition}%)` }}
        ></div>
      </div>
    </>
  );
}
