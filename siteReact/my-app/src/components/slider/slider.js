import { useEffect, useState } from 'react';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import './slider.css';

export const Slider = ({ data }) => {

  const { info, imgClass, slideInfo, slideHeaderText, slideMediumText, slideFooterText, sliderMobile} = data;


  const [slide, setSlide] = useState(info);
  const [index, setIndex] = useState(0);


  useEffect (() => {
    const lastIndex = slide.length - 1;
    if (index < 0) {
      setIndex(lastIndex)

    }
    if (index > lastIndex) {
      setIndex(0)

    }
  }, [index, slide]);
  

  useEffect (() => {
    let sliderInterval = setInterval(() => {
      setIndex(prevState => prevState + 1)
    },6000);
    return () => (
      clearInterval(sliderInterval)
    )
  }, [index]);

    return (
      <>
        <div className={sliderMobile} >
          {
            slide.map((slide, slideIndex)=> {
              const {id, label, title, img, data} = slide;

              let position = 'nexSlide';
              if(slideIndex === index) {
                position = 'activeSlide';
              }

              if (slideIndex === slideIndex - 1 || (index === 0 && slideIndex === slide.length - 1 )) {
                position = "lastSlide";

              }
              
              return (
                <article className={position} key={id}>
                  <img src={img} alt={`Slide ${id}`} className={imgClass} />
                  <div className={slideInfo}>
                    <div className={slideHeaderText}>{data}</div>
                    <div className={slideMediumText}>{label}</div>
                    <div className={slideFooterText}>{title}</div>
                  </div>
                </article>
              )
            })
          }
          <button className='prev' onClick={() => setIndex(prevState => prevState - 1)}>
              <FiChevronLeft/>
          </button>
          <button className='next' onClick={() => setIndex(prevState => prevState + 1)}>
              <FiChevronRight/>
          </button>
        </div>
          
      </>
    )}