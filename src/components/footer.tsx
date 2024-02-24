import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white py-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Колонка "Про нас" */}
        <div>
          <h3 className="text-base font-semibold mb-2">Про нас</h3>
          <p className="text-sm">Ми мультибрендовий інтернет-магазин, де представлене оригінальне взуття, одяг і аксесуари від світових брендів: Adidas, Nike, New Balance, Native, Ellesse, Jordan, Stussy, Patagonia, Dr. Martens, Yeezy, The North Face, Arcteryx, Converse, Gap, Levis та інші.</p>
        </div>

        {/* Колонка "Контакти" */}
        <div>
          <h3 className="text-base font-semibold mb-2">Контакти</h3>
          <p className="text-sm">м. Львів, пр. В. Чорновола 67г, ТЦ "Інтерсіті"</p>
          <p className="text-sm"><a href="mailto:sale@lishop.store">sale@lishop.store</a></p>
          <p className="text-sm"><a href="tel:+380982596313">+38 (098) 259-63-13</a></p>
          <p className="text-sm">Працюємо: ПН-ПТ: 10:00-18:00, СБ-НД: Вихідний</p>
        </div>

        {/* Колонка з посиланнями */}
        <div>
          <h3 className="text-base font-semibold mb-2">Інформація</h3>
          <ul className="list-disc list-inside">
            <li><a href="/about" className="text-sm">Про нас</a></li>
            <li><a href="/payment-and-delivery" className="text-sm">Оплата і доставка</a></li>
            <li><a href="/custom-order" className="text-sm">Товари під замовлення</a></li>
            <li><a href="/returns-and-exchanges" className="text-sm">Повернення та обмін</a></li>
            <li><a href="/help" className="text-sm">Допомога</a></li>
            <li><a href="/contacts" className="text-sm">Контакти</a></li>
            <li><a href="/sitemap" className="text-sm">Карта сайту</a></li>
          </ul>
        </div>
      </div>
      
      {/* Соціальні мережі */}
      <div className="mt-8 text-center text-gray-400">
        <a href="/" className="mx-2 hover:text-white"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="/" className="mx-2 hover:text-white"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="/" className="mx-2 hover:text-white"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </footer>
  );
};

export default Footer;
