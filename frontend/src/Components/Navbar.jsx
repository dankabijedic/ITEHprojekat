import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar({ cartNum, token }) {
  function handleLogout() {
    var config = {
      method: "post",
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="navBar">
      <div className="btn">
        <Link to="/">Kursevi</Link>
      </div>
      <div className="btn">
        <Link to="/posts">Materijali</Link>
      </div>
      {token == null ? (
        <div className="btn">
          <Link to="/login">Login</Link>
        </div>
      ) : (
        <div className="btn" onClick={handleLogout}>
          <Link to="/">Logout</Link>
        </div>
      )}
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
