import "./App.css";
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";


function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [token, setToken] = useState();
  useEffect(()=> {
    calcPrice();
  }, [cartItems]);
  const [courses] = useState([
    {
      id: 1,
      title: "Programiranje 1",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
      price: 10000,
    },
    {
      id: 2,
      title: "OIKT",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
      price: 7000,
    },
    {
      id: 3,
      title: "Matematika 1",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
      price: 8000,
    },
  ]);

  const [posts] = useState([
    {
      id: 1,
      title: "Programiranje 1",
      content:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      attachment: "none"
    },
    {
      id: 2,
      title: "Neki predmet",
      content:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      attachment: "none"
    },
    {
      id: 3,
      title: "JOs jasa",
      content:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      attachment: "none"
    }
  ]);

  const addToCart = (id) => {
    courses.map((course) => {
      if (course.id === id) {
        course.amount = course.amount + 1;

        if (course.amount > 1) {
          alert("Ovaj kurs ste vec dodali u korpu!");
        } else {
          const a = cartNum + 1;
          setCartNum(a);

          if(course.amount === 1) {
            updateCart(course);
          } else {
            refreshCart();
          }

          console.log(
            "course id=",
            course.id,
            "price=",
            course.price,
            course.amount
          );
        }
      }
    });
  };

  const updateCart = (course) => {
    setCartItems([...cartItems, course]);
    calcPrice();
  }

  const refreshCart = () => {
    const newItems = courses.filter((course) => course.amount > 0);
    setCartItems(newItems);
  }

  const calcPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price * cartItems[i].amount;
    }
    setTotalPrice(totalPrice);
  }

  function addToken(auth_token) {
    setToken(auth_token);
  }
  return (
    <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={[<Navbar token={token}></Navbar>,<Courses courses={courses} onAdd={addToCart} />]}
        />
        <Route path="/cart" element={[<Navbar></Navbar>, <Cart cartItems={cartItems} cartNum={cartNum} totalPrice={totalPrice}/>]} />
        <Route path="/posts" element={[<Navbar></Navbar>, <Posts posts={posts}/>]} />
        <Route path="/login" element={<LoginForm addToken={addToken}/>} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </BrowserRouter>

  
   
  );
}

export default App;
