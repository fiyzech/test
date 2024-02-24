
import React, { useState } from 'react';
import SimpleSlider from './HeadeHeroSlider';
import FooterAdvancedExample from './footer';
import ScrollToTopButton from './UpButton';
import Slider from './slider';
import Slides from './ProductCardSlider';
import DrawerWithTransition from './basket';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // State to store items in the cart
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Function to add a product to the cart and open the drawer
  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setIsDrawerOpen(true); // Open the drawer when adding a product
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <main className="bg-white dark:bg-gray-100 dark:text-white relative overflow-hidden min-h-screen">
      <header className="h-24 sm:h-30 flex items-center z-50 w-full fixed top-0 bg-black dark:bg-gray-100 text-white dark:text-black">
        <div className="bg-slate-200 h-0.5 absolute bottom-0 left-0 right-0"></div>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase font-black text-3xl ml-44">
            <a href="#" onClick={scrollToTop}>Dress me.</a>
          </div>
          <div className="flex items-center ml-2">
            <nav className="font-sans uppercase text-lg lg:flex items-center hidden mr-96">
              <a href="#" className="py-2 px-4 flex text-sm sm:text-base">
                Чоловіче
              </a>
              <a href="#" className="py-2 px-4 flex text-sm sm:text-base">
                Жіноче
              </a>
              <a href="#" className="py-2 px-4 flex text-sm sm:text-base">
                Аксесуари
              </a>
              <a href="#" className="py-2 px-4 flex text-sm sm:text-base" onClick={openDrawer}>
                Корзина
              </a>
              <a href="#" className="py-2 px-4 flex text-sm sm:text-base">
                Кабінет
              </a>
            </nav>
            <div className="flex items-center ml-6">
              <FaUser className="icon icon-user" />
              <button className="icon icon-cart" onClick={openDrawer}>
                <FaShoppingCart />
              </button>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-white dark:bg-black mb-1"></span>
                <span className="w-6 h-1 bg-white dark:bg-black mb-1"></span>
                <span className="w-6 h-1 bg-white dark:bg-black mb-1"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <DrawerWithTransition isOpen={isDrawerOpen} onClose={closeDrawer} onAddToCart={addToCart} />
      <div className="bg-black dark:bg-gray-100 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16 items-center justify-center">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 dark:bg-black mb-12 ml-44"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-black text-gray-100 ml-44">
              Будь
              <span className="text-5xl sm:text-7xl">На стилі</span>
            </h1>
            <p className="text-sm sm:text-base text-black dark:text-black ml-44">
              Відчуйте магію стилю з нашим ексклюзивним одягом. Кожен елемент нашої колекції - це прояв сили, впевненості та елегантності. Дозвольте собі бути в центрі уваги, вибираючи найкраще для себе.
            </p>
            <div className="flex mt-8">
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-black-500 border-2-black border-transparent text-black text-md mr-4 hover:bg-black-400 ml-40 ">
                Розпочнімо!
              </a>
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black-500 dark:text-black hover:bg-black-500 hover:text-black text-md ">
                Трішки про нас
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img src="https://i.ibb.co/XZNZTBq/hanger.png" className="max-w-xl md:max-w-xxl m-auto ml-64" alt="Illustration"/>
          </div>
        </div>
      </div>
      
      <SimpleSlider />
      <Slider />
      <h3 className='Hashka text-white'>ХІТИ ПРОДАЖІВ</h3> 
      <Slides onAddToCart={addToCart} />
      <FooterAdvancedExample />
      <ScrollToTopButton />
      <style>
      {`
          .icon {
            color: black;
            margin-right: 15px;
            cursor: pointer;
            font-size: 24px;
          }

          .icon:hover {
            color: gray;
          }

          .icon-cart {
            margin-right: 15px;
          }

          .icon-user {
            margin-right: 15px;
          }

          .ml-6 {
            margin-right: 90px;
          }
        `}
      </style>
    </main>
  );
};

export default App;
