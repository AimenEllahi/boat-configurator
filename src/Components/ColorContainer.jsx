import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import useColorStore from "../Utils/store";

const modelParts = [
  "Primary Fence",
  "Secondary Fence",
  "Flooring Option",
  "Primary Interior Vinyl",
  "Secondary Interior Vinyl",
  "Console Color",
];

const colorOptions = {
  "Primary Fence": [
    {
      name: "Pearl",
      hex: "#E3E6D5",
    },
    { name: "Meriot", hex: "#821B21" },
    {
      name: "Steel Blue",
      hex: "#3B4750",
    },
    {
      name: "Deep Blue",
      hex: "#0D3A66",
    },
    {
      name: "Charcoal",
      hex: "#424142",
    },
    {
      name: "Midnight Black",
      hex: "#000000",
    },
  ],
  "Secondary Fence": [
    {
      name: "Pearl",
      hex: "#E3E6D5",
    },
    { name: "Meriot", hex: "#821B21" },
    {
      name: "Steel Blue",
      hex: "#3B4750",
    },
    {
      name: "Deep Blue",
      hex: "#0D3A66",
    },
    {
      name: "Charcoal",
      hex: "#424142",
    },
    {
      name: "Midnight Black",
      hex: "#000000",
    },
  ],
  "Flooring Option": [
    {
      name: "Wooden",
      hex: "#B06309",
    },
    {
      name: "Metal Flooring",
      hex: "#D5E2E6",
    },
  ],
  "Primary Interior Vinyl": [
    {
      name: "Tan Vinyl Series",
      hex: "#B8AB9E",
    },
    {
      name: "Grey Vinyl Series",
      hex: "#909399",
    },
  ],
  "Secondary Interior Vinyl": [
    {
      name: "Tan Vinyl Series",
      hex: "#B8AB9E",
    },
    {
      name: "Grey Vinyl Series",
      hex: "#909399",
    },
  ],
  "Console Color": [
    {
      name: "Tan Vinyl Series",
      hex: "#B8AB9E",
    },
    {
      name: "Grey Vinyl Series",
      hex: "#909399",
    },
  ],
};

function ColorContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const setColor = useColorStore((state) => state.setColor);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className='color-container'>
      <div className='slider-color'>
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          centerMode={true}
          centerPadding={"0px"}
          className='slider'
          ref={sliderRef}
          initialSlide={activeIndex}
          afterChange={(index) => setActiveIndex(index)}
        >
          {modelParts.map((part, index) => (
            <div key={index} className='color-card'>
              <div className='color-card-title'>
                <div onClick={handlePrev} style={{ cursor: "pointer" }}>
                  <GrPrevious className='color-card-icon' />
                </div>
                <span>{part}</span>
                <div onClick={handleNext} style={{ cursor: "pointer" }}>
                  <GrNext className='color-card-icon' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='colors-div'>
        <div className='color-inner-div'>
          {colorOptions[modelParts[activeIndex]] &&
            colorOptions[modelParts[activeIndex]].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <div
                  className='color-box'
                  style={{
                    backgroundColor: item.hex,
                    height: "45px",
                    width: "100px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setColor({ part: modelParts[activeIndex], hex: item.hex });
                  }}
                ></div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "550",
                    marginLeft: "10px",
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ColorContainer;
