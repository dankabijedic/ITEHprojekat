import React from "react";

function CartItem({ item, onDelete }) {
  return (
    <div id="cart-item" className="card" style={{ marginTop: "3rem" }}>
      <div
        id={item.id}
        className="card-body"
        style={{ display: "inline-flex" }}
      >
        <div className="photo-container">
          <button className="btn" onClick={(e) => onDelete(item, e)}>
            <img
              className="card-img-top"
              src="https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg?w=2000"
              alt="Neka slika"
            />
            <h3>Remove product</h3>
          </button>
        </div>
        <div className="content">
          <h3 className="card-title">{item.naziv}</h3>
          <p className="card-text">{item.opis}</p>
          <footer className="content">
            <h5 className="price">Cena: {item.cena} RSD</h5>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
