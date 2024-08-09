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
        className="before"
        //    style={{ width: `${sliderPosition}%` }}
      ></div>
      <div className="after"></div>
      <input
        type="range"
        className="slider"
        value={sliderPosition}
        onChange={handleSliderChange}
      ></input>
    </div>
  );
}
