import React from "react";
import { ImCart } from "react-icons/im";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar({ cartNum, token }) {
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
        navigate("/courses");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  var AuthButtons = "";
  if (token == null) {
    AuthButtons = (
      <div className="btn">
        <Link to="/login">Login</Link>
      </div>
    );
  } else {
    AuthButtons = (
      <div className="btn" onClick={handleLogout}>
        <Link to="/courses">Logout</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="navBar">
        <div className="btn">
          <Link to="/courses">Kursevi</Link>
        </div>
        <div className="btn">
          <Link to="/posts">Materijali</Link>
        </div>
        {AuthButtons}
        <div
          className="btn"
          // onClick={() => getCourses()}
        >
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
      <Outlet />
    </div>
  );
}

export default Navbar;
