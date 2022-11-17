import React from "react";
import { ImCart } from "react-icons/im";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar({ cartNum, token, addToken, currentUser, getCourses }) {
  const navigate = useNavigate();
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
        addToken(response.data.access_token);
        navigate("/courses");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  var AuthButtons = "";
  if (token == null) {
    AuthButtons = (
      <div className="navBar">
        <div className="btn">
          <Link to="/courses">Kursevi</Link>
        </div>
        <div className="btn">
          <Link to="/posts">Blog</Link>
        </div>
        <div className="btn">
          <Link to="/login">Login</Link>
        </div>
        <div className="btn">
          <Link to="/register">Registrujte se</Link>
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
  } else if (currentUser != null && currentUser.data.role == "1") {
    AuthButtons = (
      <div className="navBar">
        <div className="btn">
          <Link to="/courses">Kursevi</Link>
        </div>
        <div className="btn">
          <Link to="/posts">Blog</Link>
        </div>
        <div className="btn">
          <Link to="/add-course">Dodaj kurs</Link>
        </div>
        <div className="btn">
          <Link to="/add-post">Dodaj materijal</Link>
        </div>
        <div className="btn" onClick={handleLogout}>
          <Link to="/logout">Logout</Link>
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
  } else {
    AuthButtons = (
      <div className="navBar">
        <div className="btn">
          <Link to="/courses">Kursevi</Link>
        </div>
        <div className="btn">
          <Link to="/posts">Blog</Link>
        </div>
        <div className="btn" onClick={getCourses}>
          <Link to="/cart" className="cart-items">
            <ImCart />
            <div className="cart-num">{cartNum}</div>
          </Link>
        </div>
        <div className="btn" onClick={handleLogout}>
          <Link to="/logout">Logout</Link>
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

  return (
    <div>
      {AuthButtons}
      <Outlet />
    </div>
  );
}

export default Navbar;
