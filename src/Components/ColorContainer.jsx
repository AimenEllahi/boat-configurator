import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { GrPrevious, GrNext } from "react-icons/gr";

function ColorContainer() {
    const modelParts = [
        "Primary Fence",
        "Secondary Fence",
        "Primary Hull",
        "Secondary Hull",
    ];

    const colorOptions = [
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Black",
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

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
                                <div onClick={handlePrev} style={{cursor: "pointer"}} >
                                <GrPrevious className='color-card-icon' />
                                </div>
                                <span>{part}</span>
                                <div onClick={handleNext} style={{cursor: "pointer"}}>
                                <GrNext className='color-card-icon' />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='colors-div'>
                <div className='color-inner-div'>
                    {colorOptions.map((color, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div
                                className='color-box'
                                style={{
                                    backgroundColor: color,
                                    height: "45px",
                                    width: "100px",
                                    borderRadius: "5px",
                                }}
                            ></div>
                            <span
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "550",
                                }}
                            >
                                {color}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ColorContainer;
