import "./App.css";
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [cartNum, setCartNum] = useState(0);

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

  const addToCart = (id) => {
    courses.map((course) => {
      if (course.id === id) {
        course.amount = course.amount + 1;

        if (course.amount > 1) {
          alert("Ovaj kurs ste vec dodali u korpu!");
        } else {
          const a = cartNum + 1;
          setCartNum(a);

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

  return (
    <BrowserRouter>
      <Navbar cartNum={cartNum} />
      <Routes>
        <Route
          path="/"
          element={<Courses courses={courses} onAdd={addToCart} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar cartNum={cartNum} />
    //   <Courses courses={courses} onAdd={addToCart} />
    //   <Cart />
    // </div>
    // <BrowserRouter>
    //   <Navbar cartNum={cartNum} />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={[
    //         //        <Header title="Dobrodosli u" subtitle="Piceriju Palermo" />,
    //         <Courses courses={courses} onAdd={addToCart} />,
    //       ]}
    //     />
    //     <Route
    //       path="/cart"
    //       element={
    //         <Cart
    //           cartItems={cartItems}
    //           cartNum={cartNum}
    //           //s             totalPrice={totalPrice}
    //         />
    //       }
    //     />
    //     {/* <Route path="/about" element={<About />} />
    //   <Route path="/meni" element={<Items items={items} onOrder={order} />} />
    //   <Route path="/contact" element={<Contact />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
