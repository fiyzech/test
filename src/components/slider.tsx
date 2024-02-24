import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const products = [
  {
    id: 1,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/new-balance-100x100.webp",
  },
  {
    id: 2,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/asics-100x100.webp",
  },
  {
    id: 3,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/converse-100x100.webp",
  },
  {
    id: 4,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/gap-100x100.webp",
  },
  {
    id: 5,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/levis-100x100.webp",
  },
  {
    id: 6,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/nike-100x100.webp",
  },
  {
    id: 7,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/puma-100x100.webp",
  },
  {
    id: 8,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/reebok-100x100.webp",
  },
  {
    id: 9,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/yesoriginal/brand/timbarland-100x100.webp",
  },
];

const Slider = () => {
  const splideOptions = {
    type: "loop",
    gap: 0,
    autoWidth: true,
    perPage: 1, // Показувати лише 6 слайдів
    autoplay: true, // Увімкнути автовідтворення
    interval: 2000, // Час затримки між кожним слайдом у мілісекундах
  };

  const containerStyle: React.CSSProperties = {
    marginLeft: "363px",
    marginRight: "420px", 
    marginTop: '30px',
    marginBottom: '40px'
  };

  const slideStyle: React.CSSProperties = {
    maxWidth: "100%",
    height: "auto",
    backgroundSize: 'cover',
    paddingRight: '40px',
    backgroundPosition:'center'
  };

  return (
    <div style={containerStyle}>
      <Splide options={splideOptions} className="splide">
        {products.map((product) => (
          <SplideSlide key={product.id} className="custom-slide">
            <img
              src={product.imageSrc}
              alt={`Product ${product.id}`}
              style={slideStyle}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;



