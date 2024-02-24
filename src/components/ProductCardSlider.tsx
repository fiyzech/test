import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { prefix } from "@fortawesome/free-brands-svg-icons";

interface Product {
  id: number;
  name: string;
  price: number;
  discountPercentage: number;
  rating: number;
  imageSrc: string;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 9",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/i/ko/hg/c99981764e0bb5e85129454867ac97a4-263x277.webp",
    quantity: 1,
  },
  {
    id: 2,
    name: "iPhone 10",
    price: 649,
    discountPercentage: 10.96,
    rating: 4.79,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/i/lc/go/cdb5c108ffd2306c2ae762498671b2d1-263x277.webp",
    quantity: 1,
  },
  {
    id: 3,
    name: "iPhone 11",
    price: 749,
    discountPercentage: 8.96,
    rating: 4.89,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/cover/415445-101-263x277.webp",
    quantity: 1,
  },
  {
    id: 4,
    name: "КРОСІВКИ NIKE AIR MONARCH IV WHITE/BLACK-VARSITY RED 415445-101-263x277.webp",
    price: 849,
    discountPercentage: 6.96,
    rating: 4.99,
    imageSrc: "https://yesoriginal.com.ua/image/cache/catalog/i/ko/hg/c99981764e0bb5e85129454867ac97a4-263x277.webp",
    quantity: 1,
  },
];

const Slides: React.FC = ({onAddToCart}:any) => {
  const splideOptions = {
    type: "loop",
    focus: 0,
    gap: "1rem",
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  };

  const sliderStyle: React.CSSProperties = {
    maxWidth: "1080px",
    marginLeft: "365px",
  };

  const productCardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    cursor: "pointer",
    position: "relative",
  };

  const productImageStyle: React.CSSProperties = {
    height: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const nameStyle: React.CSSProperties = {
    color: "black",
    fontSize: "10px",
    marginBottom: "5px",
  };

  const priceContainerStyle: React.CSSProperties = {
    color: "darkslategray",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "5px",
  };

  const priceStyle: React.CSSProperties = {
    marginRight: "5px",
  };

  const buttonContainerStyle: React.CSSProperties = {
    marginLeft: "5px", // Додано відступ для кнопки
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "gray", // змінено колір тексту на сірий
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "color 0.3s ease",
    fontSize: "12px",
    marginBottom: "20px",
  };

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [basketItems, setBasketItems] = useState<Product[]>([])



  const [basket, setBasket] = useState<Product[]>([]);
  const addToBasket = (product: Product) => {
    setBasketItems([...basket, product]);
    console.log(basket);
    
  }; 

  const handleSlideClick = (productId: number) => {
    console.log("Clicked on product with ID:", productId);
  };




  

  return (
    <section className="splide-container" style={sliderStyle}>
      <Splide options={splideOptions}>
        {products.map((product) => (
          <SplideSlide
            key={product.id}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              style={productCardStyle}
              className="product-card"
              onClick={() => handleSlideClick(product.id)}
            >
              <div
                style={{
                  ...productImageStyle,
                  backgroundImage: `url(${product.imageSrc})`,
                }}
              />
              <div className="product-details">
                <p className="product-name" style={nameStyle}>
                  {product.name}
                </p>
                <div className="product-price" style={priceContainerStyle}>
                  <span style={priceStyle}>{product.price} грн</span>
                  <div style={buttonContainerStyle}>
                  <button onClick={() => addToBasket(product)}
                    className="add-to-cart-button"
                    style={{
                      ...buttonStyle,
                      color: hoveredId === product.id ? "black" : "gray",
                    }}
                  >
                    ДОБАВИТИ В КОРЗИНУ
                  </button>
              

                  </div>
                </div>
                <p className="product-quantity">({product.quantity})</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Slides;
