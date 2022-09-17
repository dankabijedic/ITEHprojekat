import React from "react";

function CartItem({ item }) {
  return (
    <div id="cart-item" className="card">
      <div className="card-body">
        <div className="photo-container">
          <a className="remove">
            <img
              className="card-img-top"
              src="https://picsum.photos/200"
              alt="Neka slika"
            />
            <h3>Remove product</h3>
          </a>
        </div>
        <div className="content">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
          <footer className="content">
            <h5 className="price">Cena: {item.price}</h5>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
