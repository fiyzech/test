import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

// Створення стилізованої компоненти для контейнера слайдера
const SliderContainer = styled.div`
  margin-left: 364px;
  margin-right: 420px;
  position: relative;
`;

// Створення стилізованої компоненти для зображень слайдів
const SlideImage = styled.img`
  width: 100%;
  height: 400px;
`;

const PrevNextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;

const PrevNextButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const SimpleSlider: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    infinite: true,
    speed: 200,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Slider ref={sliderRef} {...settings}>
        <div>
          <SlideImage
            src="https://lishop.store/image/cache/webp/catalog/potteby-1400x568.webp"
            alt="Фото 1"
          />
        </div>
        <div>
          <SlideImage
            src="https://lishop.store/image/cache/webp/catalog/znyjky-1400x568.webp"
            alt="Фото 2"
          />
        </div>
        <div>
          <SlideImage
            src="https://lishop.store/image/cache/webp/catalog/slider/airforcehigh-1400x568.webp"
            alt="Фото 3"
          />
        </div>
      </Slider>
      {hovered && (
        <PrevNextContainer>
          <PrevNextButton onClick={handlePrev}>{"<"}</PrevNextButton>
          <PrevNextButton onClick={handleNext}>{">"}</PrevNextButton>
        </PrevNextContainer>
      )}
    </SliderContainer>
  );
};

export default SimpleSlider;
