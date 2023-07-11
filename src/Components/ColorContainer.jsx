import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import {GrPrevious, GrNext} from "react-icons/gr"

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

    const handlePrev = () => {
        //functionality to move to prev array item
        
    }

    const handleNext = () => {
     
    }

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
            >
                {modelParts.map((part, index) => (
                    <div key={index} className='color-card'>
                        
                        <div className='color-card-title'>
                            <GrPrevious onClick={handlePrev} className='color-card-icon'/>
                            <span>{part}</span>
                            <GrNext onClick={handleNext} className='color-card-icon'/>
                        </div>
            
                    </div>
                ))}    
            </Slider>
        </div>

        <div className='colors-div' >
            <div className='color-inner-div'>
                {colorOptions.map((color, index) => (
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <div key={index} className='color-box' style={{
                        backgroundColor: color,
                        height: "45px",
                        width: "100px",
                        borderRadius: "5px",
                    }}>
                    </div>
                    <span style={{
                        fontSize: "16px",
                        fontWeight: "550",
                    }}>{color}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ColorContainer;