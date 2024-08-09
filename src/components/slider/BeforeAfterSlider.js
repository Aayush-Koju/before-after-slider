import "./BeforeAfterSlider.css";

export default function BeforeAfterSlider() {
  return (
    <div className="container">
      <div className="before"></div>
      <div className="after"></div>
      <input
        type="range"
        // min="1"
        // max="100"
        // value="50"
        className="slider"
      ></input>
    </div>
  );
}
