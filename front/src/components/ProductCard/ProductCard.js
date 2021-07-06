import React from "react";
import "./ProductCard.css";
import NavLink from "react-router-dom";

export default function ProductCard(product) {
  return (
    <div className="card">
      <img src={product.img} alt="" className="productImg" />
      <NavLink to="">{product.name}</NavLink>
      <p>{product.price}</p>
    </div>
  );
}
