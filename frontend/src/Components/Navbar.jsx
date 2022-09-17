import React from "react";
import { ImCart } from "react-icons/im";

function Navbar({ cartNum }) {
  return (
    <div className="navBar">
      <a>Kursevi</a>
      <a className="cart-items">
        <ImCart style={{ marginLeft: 10 }} />
        <div className="cart-num">{cartNum}</div>
      </a>
    </div>
  );
}

export default Navbar;
