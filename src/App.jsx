import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';

const products = [
  {
    id: 1,
    name: 'Керамическая кружка',
    category: 'Керамика · ручная работа',
    price: 1290,
    image: '☕',
    tone: 'clay',
    label: 'Хит недели',
  },
  {
    id: 2,
    name: 'Ароматическая свеча',
    category: 'Сандал · 35 часов горения',
    price: 890,
    image: '🕯️',
    tone: 'sage',
    label: 'Для уюта',
  },
  {
    id: 3,
    name: 'Ваза «Утро»',
    category: 'Керамика · матовая глазурь',
    price: 2150,
    image: '🏺',
    tone: 'blue',
    label: 'Мало осталось',
  },
];

export default function App() {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="Тихая полка — на главную">
          <span className="brand-mark" aria-hidden="true">т.</span>
          <span>тихая полка</span>
        </a>
        <a className="cart-link" href="#products">
          Корзина <span className="cart-count">{totalItems}</span>
        </a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> МАЛЕНЬКИЕ РАДОСТИ КАЖДЫЙ ДЕНЬ</p>
          <h1>Дом начинается<br />с <em>деталей.</em></h1>
          <p className="hero-description">
            Вещи, которые помогают замедлиться, выдохнуть и почувствовать себя дома.
          </p>
          <a className="hero-link" href="#products">Выбрать свою вещь <span aria-hidden="true">↘</span></a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun-disc" />
          <div className="hero-vase"><span /></div>
          <div className="hero-leaf hero-leaf--one" />
          <div className="hero-leaf hero-leaf--two" />
          <div className="hero-stem" />
          <div className="hero-caption">коллекция<br />«медленное утро»</div>
          <span className="hero-star">✳</span>
        </div>
        <div className="hero-side-note">ПРЕДМЕТЫ С ХАРАКТЕРОМ · С 2024</div>
      </header>

      <section className="catalog" id="products" aria-labelledby="catalog-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">НАШ ВЫБОР</p>
            <h2 id="catalog-title">Вещи с теплом</h2>
          </div>
          <p className="catalog-note">Три маленьких повода<br />порадовать себя сегодня.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onQuantityChange={(change) => {
                setTotalItems((currentTotal) => currentTotal + change);
              }}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>✳</span> Сделано с теплом <span className="footer-dot">·</span> учебный проект на React
      </footer>
    </main>
  );
}
