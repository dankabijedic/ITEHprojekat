import React from "react";

function CartItem({ item, onDelete }) {
  return (
    <div id="cart-item" className="card">
      <div className="card-body">
        <div className="photo-container">
          <button className="btn" onClick={(e) => onDelete(item, e)}>
            <img
              className="card-img-top"
              src="https://picsum.photos/200"
              alt="Neka slika"
            />
            <h3>Remove product</h3>
          </button>
        </div>
        <div className="content">
          <h3 className="card-title">{item.naziv}</h3>
          <p className="card-text">{item.opis}</p>
          <footer className="content">
            <h5 className="price">Cena: {item.cena}</h5>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
