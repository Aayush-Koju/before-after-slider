import React, { useState, useRef, useEffect } from "react";
import "./BeforeAfterSlider.css";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="container" ref={containerRef}>
      <div
        className="before-image"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      ></div>
      <div className="after-image"></div>
      <input
        type="range"
        className="slider"
        value={sliderPosition}
        onChange={handleSliderChange}
      ></input>
    </div>
  );
}
