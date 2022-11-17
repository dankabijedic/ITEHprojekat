import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartCourses, cartNum, totalPrice, token, onDelete }) => {
  const [converter, setConverter] = useState();
  const [currency, setCurrency] = useState("RSD");
  const [newPrice, setNewPrice] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/latest?base=RSD&symbols=EUR,BAM`)
      .then((response) => {
        setConverter(response.data);
        console.log(response);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (cartCourses != null) {
      const changeCurrency = (type) => {
        var types = {
          RSD: "RSD",
          EUR: "EUR",
          BAM: "BAM",
        };

        if (type == "RSD") {
          setNewPrice(totalPrice * 1);
        } else if (type == "EUR") {
          setNewPrice(totalPrice * converter.rates.EUR);
        } else if (type == "BAM") {
          setNewPrice(totalPrice * converter.rates.BAM);
        }
      };
      changeCurrency(currency);
    }
  }, [currency]);

  // const checkOut = (e) => {
  //   e.preventDefault();
  //   cartCourses.map((oneC) => {
  //     onDelete(oneC, e);
  //   });
  // };

  return (
    <div className="cart-container">
      {token == null ? (
        <h1>Ulogujte se da biste mogli da proizvode dodate u korpu.</h1>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Ovo je vasa korpa.</h1>

          <div className="cart">
            {console.log(cartCourses)}
            {cartCourses != null ? (
              <div className="cart-items" style={{ display: "grid" }}>
                {cartCourses.map((cartItem) => (
                  <CartItem item={cartItem} onDelete={onDelete} />
                ))}
              </div>
            ) : (
              <div></div>
            )}
            <div className="cart-footer">
              <div className="cart-amount">
                Broj proizvoda u korpi je: {cartNum}
              </div>
              <div>
                <h3> Izaberite valutu: </h3>
                <select
                  style={{}}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="RSD">RSD</option>
                  <option value="EUR">EUR</option>
                  <option value="BAM">BAM</option>
                </select>
              </div>
              <div className="cart-amount">
                {newPrice == 0 ? (
                  <h3>Ukupna cena je: {totalPrice}</h3>
                ) : (
                  <h3 style={{ lineHeight: "2.75rem" }}>
                    Ukupna cena je: {newPrice} {currency}
                  </h3>
                )}
              </div>
              <a
                className="btn"
                // onClick={(e) => checkOut(e)}
              >
                Kupite
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
