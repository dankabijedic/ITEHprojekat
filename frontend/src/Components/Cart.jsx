import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartCourses, cartNum, totalPrice, token, onDelete }) => {
  return (
    <div className="cart-container">
      {token == null ? (
        <h1>Ulogujte se da biste mogli da proizvode dodate u korpu.</h1>
      ) : (
        <div className="cart-items">
          <h1>Ovo je vasa korpa.</h1>
          <div className="cart-items">
            {cartCourses.map((cartItem) => (
              <CartItem item={cartItem} onDelete={onDelete} />
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-amount">
              Broj proizvoda u korpi je: {cartNum}
            </div>
            <div className="cart-amount">Ukupna cena je: {totalPrice}</div>
            <a className="btn">Kupite</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
