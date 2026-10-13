import React, { useState } from 'react';

/** Карточка получает данные товара через props. */
export default function ProductCard({
  name,
  category,
  price,
  image,
  tone,
  label,
  onQuantityChange,
}) {
  const [quantity, setQuantity] = useState(0);

  function addToCart() {
    setQuantity((currentQuantity) => currentQuantity + 1);
    onQuantityChange(1);
  }

  function removeFromCart() {
    setQuantity((currentQuantity) => Math.max(0, currentQuantity - 1));
    onQuantityChange(-1);
  }

  return (
    <article className="product-card">
      <div className={`product-art product-art--${tone}`} aria-label={`Иллюстрация: ${name}`} role="img">
        <span className="product-label">{label}</span>
        <span className="product-emoji" aria-hidden="true">{image}</span>
        <span className="art-spark art-spark--one" aria-hidden="true">✳</span>
        <span className="art-spark art-spark--two" aria-hidden="true">✳</span>
      </div>

      <div className="product-info">
        <p className="product-category">{category}</p>
        <div className="product-heading">
          <h2>{name}</h2>
          <span className="price">{price.toLocaleString('ru-RU')} ₽</span>
        </div>

        <div className="card-footer">
          <div className="card-actions">
            <button className="add-button" type="button" onClick={addToCart}>
              <span aria-hidden="true">＋</span> Добавить в корзину
            </button>
            <button
              className="remove-button"
              type="button"
              onClick={removeFromCart}
              disabled={quantity === 0}
            >
              Убрать
            </button>
          </div>
          <p className="quantity" aria-live="polite">
            В корзине: <strong>{quantity}</strong>
          </p>
        </div>
      </div>
    </article>
  );
}
