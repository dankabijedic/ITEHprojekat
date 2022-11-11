import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = ({ cartCourses, cartNum, totalPrice, token, onDelete }) => {
  // const navigate = useNavigate();
  // const handleDecrement = (cart_id) => {
  //   setCart((cart) =>
  //     cart.map((item) =>
  //       cart_id === item.id
  //         ? { ...item, kolicina: item.kolicina - (item.kolicina > 1 ? 1 : 0) }
  //         : item
  //     )
  //   );
  //   updateCartQuantity(cart_id, "dec");
  // };

  // const handleIncrement = (cart_id) => {
  //   setCart((cart) =>
  //     cart.map((item) =>
  //       cart_id === item.id
  //         ? { ...item, kolicina: item.kolicina + (item.kolicina < 10 ? 1 : 0) }
  //         : item
  //     )
  //   );
  //   updateCartQuantity(cart_id, "inc");
  // };

  // function updateCartQuantity(cart_id, scope) {
  //   var config = {
  //     headers: {
  //       Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
  //     },
  //   };
  //   axios
  //     .put("api/cart-updateCartQuantity/${cart_id}/${scope}", config)
  //     .then((res) => {
  //       if (res.data.status === 200) {
  //         alert("Success", res.data.message, "success");
  //       }
  //     });
  // }

  // const deleteCartItem = (e, cart_id) => {
  //   e.preventDefault();
  //   var config = {
  //     headers: {
  //       Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
  //     },
  //   };
  //   const thisClicked = e.currentTarget;
  //   thisClicked.innerText = "Removing";
  //   axios.delete(`/api/delete-cartitem/${cart_id}`, config).then((res) => {
  //     if (res.data.status === 200) {
  //       alert("Success", res.data.message, "success");
  //       thisClicked.closest("tr").remove();
  //     } else if (res.data.status === 404) {
  //       alert("Error", res.data.message, "error");
  //       thisClicked.innerText = "Remove";
  //     }
  //   });
  // };

  // const [cartCourses, setCartCourses] = useState();
  // useEffect(() => {
  //   if (cartCourses == null) {
  //     axios.get("api/courses").then((res) => {
  //       setCartCourses((res) =>
  //         res.map((course) =>
  //           course.id == item.course_id
  //             ? setCartCourses([...cartCourses, course])
  //             : course
  //         )
  //       );
  //       console.log(res.data);
  //       setCourses(res.data);
  //     });
  //   }
  // }, [courses]);

  // const [cart, setCart] = useState([]);
  // var totalCartPrice = 0;
  // if (!window.sessionStorage.getItem("auth_token")) {
  //   navigate("/");
  //   alert("Warning", "Login to go to Cart Page", "error");
  // }

  // useEffect(() => {
  //   let isMounted = true;
  //   var config = {
  //     headers: {
  //       Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
  //     },
  //   };

  //   axios.get(`/api/cart`, config).then((res) => {
  //     if (isMounted) {
  //       if (res.data.status === 200) {
  //         console.log(res.data);
  //         setCart(res.data.cart);
  //         setLoading(false);
  //       } else if (res.data.status === 401) {
  //         navigate("/");
  //         BsArrowLeftShort("Warning", res.data.message, "error");
  //       }
  //     }
  //   });
  //   return () => {
  //     isMounted = false;
  //   };
  // });

  // const [cartItems, setCartItems] = useState();
  // useEffect(() => {
  //   if (cartItems == null) {
  //     axios.get("api/cart").then((res) => {
  //       console.log(res.data);
  //       setCartItems(res.data);
  //     });
  //   }
  // }, [cartItems]);
  // const [cartCourses, setCartCourses] = useState([]);
  // useEffect(() => {
  //   setCartCourses((cart) =>
  //     cart.map((item) =>
  //       axios.get("api/courses/" + item.course_id).then((res) => {
  //         if (res.data.status === 200) {
  //           setCartCourses(res);
  //           alert("Success", res.data.message, "success");
  //         } else {
  //           console.log(cart);
  //         }
  //       })
  //     )
  //   ),

  // }[cartCourses]);

  // const getCourses = () => {
  //   console.log(cart);
  //   cart.map((newCartItem) => {
  //     if (newCartItem.user_id == currentUser.data.id) {
  //       axios.get("api/courses/" + newCartItem.course_id).then((res) => {
  //         console.log(res);
  //         setCartCourses([...cartCourses, res]);
  //         console.log(cartCourses);
  //       });
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getCourses();
  // }, [set]);

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
