import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartCourses, cartNum, totalPrice, token, onDelete }) => {
  const [converter, setConverter] = useState();
  const [currency, setCurrency] = useState();
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
            <div className="cart-amount">
              {newPrice == 0 ? (
                <h3>Ukupna cena je: {totalPrice}</h3>
              ) : (
                <h3>Ukupna cena je: {newPrice}</h3>
              )}

              <div style={{ position: "relative", float: "right" }}>
                <h3> Izaberite valutu: </h3>
                <select
                  style={{ position: "inherit" }}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="RSD">RSD</option>
                  <option value="EUR">EUR</option>
                  <option value="BAM">BAM</option>
                </select>
              </div>
            </div>
            <a className="btn">Kupite</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
