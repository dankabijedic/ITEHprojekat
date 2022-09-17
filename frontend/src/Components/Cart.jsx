import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, cartNum, totalPrice }) => {
  return (
    <div className="cart-container">
      <h1>Ovo je vasa korpa.</h1>
      {/* <div className="cart-items">
        {cartItems.map((course) => (
          <CartItem key={course.id} item={course} />
        ))}
      </div> */}
      <div className="cart-footer">
        <div className="cart-amount">Broj proizvoda u korpi je: {cartNum}</div>
        <div className="cart-amount">Ukupna cena je: {totalPrice}</div>
        {/* <a className="btn">
          Naruci
          <button className="btn" style={{ size: 10 }}>
            <IoIosAddCircleOutline />
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default Cart;
