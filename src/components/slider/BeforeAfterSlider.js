import React, { useState, useRef } from "react";
import "./BeforeAfterSlider.css";

export default function BeforeAfterSlider() {
  const [beforeImage, setBeforeImage] = useState("/images/castle.jpg");
  const [afterImage, setAfterImage] = useState("/images/london.jpg");
  const [fileName, setFileName] = useState({
    before: "No File Choosen",
    after: "No File Choosen",
  });
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
    setFileName({ before: file.name, after: fileName.after });
  };

  const handleAfterImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAfterImage(reader.result);
    };
    reader.readAsDataURL(file);
    setFileName({ before: fileName.before, after: file.name });
  };

  return (
    <>
      <h1>Before After Comparision Slider </h1>
      <div className="comparision-container">
        <h3>Enter files you want to compare</h3>
        <div className="input-container">
          <div className="upload-before-image-container">
            <label htmlFor="upload-before-image">Before Image</label>
            <input
              type="file"
              id="upload-before-image"
              onChange={handleBeforeImageUpload}
              hidden
            ></input>
            <span> {fileName.before}</span>
          </div>

          <div className="upload-before-image-container">
            <label htmlFor="upload-after-image">After Image</label>
            <input
              type="file"
              id="upload-after-image"
              onChange={handleAfterImageUpload}
              hidden
            ></input>
            <span> {fileName.after}</span>
          </div>
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
