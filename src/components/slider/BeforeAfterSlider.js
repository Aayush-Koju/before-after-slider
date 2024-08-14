import React, { useState, useRef } from "react";
import "./BeforeAfterSlider.css";

export default function BeforeAfterSlider() {
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  const handleBeforeImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBeforeImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAfterImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAfterImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <h1>Before After Comparision Slider </h1>
      <div className="comparision-container">
        <div className="input-container">
          <h2>Enter files you want to compare</h2>

          <label for="upload-before-image">Before Image</label>
          <input
            type="file"
            id="upload-before-image"
            onChange={handleBeforeImageUpload}
            hidden
          ></input>

          <label for="upload-after-image">After Image</label>
          <input
            type="file"
            id="upload-after-image"
            onChange={handleAfterImageUpload}
            hidden
          ></input>
        </div>
        <div className="container" ref={containerRef}>
          <div
            className="before-image"
            style={{
              backgroundImage: `url(${beforeImage})`,
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          ></div>
          <div
            className="after-image"
            style={{ backgroundImage: `url(${afterImage})` }}
          ></div>
          <input
            type="range"
            className="slider"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
          ></input>
          <div
            className="slider-line"
            style={{ left: `calc(${sliderPosition}%)` }}
          >
            <div className="slider-button"></div>
          </div>
        </div>
      </div>
    </>
  );
}
