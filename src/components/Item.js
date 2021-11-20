import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = new useState(false)

  function handleClick(){
    setIsInCart(!isInCart)
  }
  const cartStatus = isInCart ? "in-cart": "";
  const cartButtonText = isInCart ? "Remove From Cart":"Add to Cart"

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartButtonText}</button>
    </li>
  );
}

export default Item;
