import React from "react";

function CartItem({ item }) {
  return (
    <div className="card " style={{ margin: 10, borderStyle: "solid" }}>
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">Sastojci: {item.description}</p>
        <h5 className="price">Cena: {item.price}</h5>
        <h5 className="amount">{item.amount}</h5>
      </div>
    </div>
  );
}

export default CartItem;
