import React from "react";
import "./ProductCard.css";

export default function ProductCard(product) {
  return (
    <div className="card">
      <img src={product.img} alt="" className="productImg" />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}
