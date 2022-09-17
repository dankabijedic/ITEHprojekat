import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar({ cartNum }) {
  return (
    <div className="navBar">
      <div className="btn">
        <Link to="/">Kursevi</Link>
      </div>
      <div className="btn">
        <Link to="/posts">Materijali</Link>
      </div>
      <div className="btn">
        <Link to="/cart" className="cart-items">
          <ImCart />
          <div className="cart-num">{cartNum}</div>
        </Link>
      </div>

      <div
        className="links"
        style={{
          top: 0,
          marginLeft: "auto",
          flexDirection: "column",
        }}
      ></div>
    </div>
  );
}

export default Navbar;
