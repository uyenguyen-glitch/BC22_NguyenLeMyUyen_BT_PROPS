import React from "react";

export default function ProductItem({ product, setStateModal }) {
  return (
    <div
      className="card"
      style={{ margin: "5px 0" }}
      width="100%"
      height="100%"
    >
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="card-img"
          width="100%"
          height="100%"
        />
      </div>

      <div
        className="card-body"
        style={{ textAlign: "left", fontSize: "20px" }}
      >
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#product-item"
          onClick={() => setStateModal(product)}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
