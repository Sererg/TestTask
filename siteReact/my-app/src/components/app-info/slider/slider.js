import { useState } from 'react';
import './slider.css';

export const Slider = ({ data }) => {

    return (
        <div className="formCard">
           {data.map((slide, idx) => (
          <div className="card1">
            <img src={slide.img} alt={`Slide ${idx + 1}`} className="icon" />
            <div className="slide__info">
              <div className="infoHeaderCardText">{slide.label}</div>
              <div className="infoMediumCardText">{slide.title}</div>
            </div>
          </div>
                
            ))}
            
        </div>
    
    )}