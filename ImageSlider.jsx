import React, { useState } from "react";
import data from "./data.json";
import "./index.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handlenext = () => {
    // Ensure the index doesn't exceed the length of the data array
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div>
      <h1>ImageSlider</h1>
      <div className="container">
        <img
          className="slider-img"
          src={data[index]?.download_url}
          alt={`Slide ${index + 1}`}
        />
        <div className="right-btn" onClick={handlenext}>
          {">"}
        </div>
        <div className="left-btn" onClick={handlenext}>
          {"<"}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
