import "./App.css";
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Posts from "./Components/Posts";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import axios from "axios";
import AddCourse from "./Components/Admin/AddCourse";
import EditCourse from "./Components/Admin/EditCourse";


function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [token, setToken] = useState();
  useEffect(()=> {
    calcPrice();
  }, [cartItems]);

  const [courses, setCourses] = useState();
  useEffect(() => {
    if (courses == null) {
      axios.get("api/courses").then((res) => {

        console.log(res.data);
        setCourses(res.data);
      });
    }
  }, [courses]);


  const updateCart = (course) => {
    if(!cartCourses.includes(course)) {
    setCartCourses([...cartCourses, course]);
    calcPrice();
    console.log(cartCourses);
    } else {
 //     alert("Ovaj kurs ste vec dodali u korpu!");
     refreshCart();
    }
  }

  const refreshCart = () => {
    const newItems = courses.filter((course) => course.amount > 0);
    setCartCourses(newItems);
  }

  const calcPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].cena;
    }
    setTotalPrice(totalPrice);
  }

  function addToken(auth_token) {
    setToken(auth_token);
  }  

  const addToCart = (id) => {
    let kolicina = 1;
     courses.map((course) => {
    if(course.id === id) {

    let isAdded = false;
     for(var i = 0; i< cartCourses.length; i++) {
      if(cartCourses[i].id === course.id) {
        isAdded = true;
        break;
      }
    };

    if(isAdded === false) {
        const data = {
          course_id: course.id,
          kolicina: kolicina,
        };
        var config = {
          headers: {
            Authorization:
              "Bearer " + window.sessionStorage.getItem("auth_token"),
          },
        };
  
        axios.post(`/api/add-to-cart`, data, config).then((res) => {
          if (res.data.status === 201) {
            alert("Success", res.data.message, "success");
          }
        });


        const a = cartNum + 1;
        setCartNum(a);
        updateCart(course);
        kolicina = kolicina + 1;
        getUserCart();
      };
     
          
        if(isAdded === false) {
          alert("Uspesno ste dodali kurs u korpu!");
        } else {
          alert("Ovaj kurs ste vec dodali u korpu!");
          isAdded = false;
        }
  };
}
     )};


const deleteCartItem = (e, course) => {

  cart.map((oneCart) => {
    console.log(oneCart);
    console.log(course);
    console.log(currentUser);
    if(oneCart.course_id === 
      course.id 
      && oneCart.user_id === 
      currentUser.id) {
 
  e.preventDefault();
  var config = {
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };
  const thisClicked = e.currentTarget;
  thisClicked.innerText = "Removing";
  axios.delete(`/api/delete-cartitem/${oneCart.id}`, config).then((res) => {
    if (res.data.status === 200) {
      alert("Success", res.data.message, "success");
      thisClicked.closest("tr").remove();
    } else if (res.data.status === 404) {
      alert("Error", res.data.message, "error");
      thisClicked.innerText = "Remove";
    }
  });
}
});
};


const[currentUser, setCurrentUser] = useState({});
function getCurrentUser() {

  var config = {
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };
 
  axios.get(`api/profile`, config).then((res) => {
      setCurrentUser(res);
      console.log(res);
      console.log(currentUser);
    })
  };

const [cart, setCart] = useState({});
var totalCartPrice = 0;

const getUserCart = () => {
  getCurrentUser();
  let isMounted = true;
  var config = {
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  let count = 0; 
  axios.get(`api/cart`, config).then((res) => {
    console.log(res);
    if (isMounted) {
      console.log(res);
     if(count === 0) {
        console.log(res);
        setCart(res.data.cart);
        isMounted = false;
        count = 1;
    }
  }});

  console.log(cart);

  return () => {
    isMounted = false;
  };
};

const [cartCourses, setCartCourses] = useState([]);

function getCourses() {
    getCurrentUser();
    console.log(currentUser);
    getUserCart();
    console.log(cart);
    cart.map((newCartItem) => {
      console.log(newCartItem);
      console.log(currentUser);
      if (newCartItem.user_id == currentUser.data.id) {
       axios.get("api/courses/" + newCartItem.course_id).then((res) => {
        console.log(res);
        setCartCourses([res.data]);
      });
    }
  });
  console.log(cartCourses);
};

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Navbar token={token} />}>
         <Route path="courses" element={<Courses onAdd={addToCart} courses={courses} token={token} currentUser={currentUser}/>} />
        <Route path="posts" element={<Posts token={token} />} />
        <Route path="cart" element={<Cart cartCourses={cartCourses} cartNum={cartNum} totalPrice={totalPrice} token={token} currentUser={currentUser} onDelete={deleteCartItem}/>} />
        </Route>
        <Route path="/login" element={<LoginForm addToken={addToken} getCurrentUser={getCurrentUser} getCourses={getCourses}/>} />
        <Route path="/register" element={<RegisterForm/>} /> 
        <Route path="/add-course" element={<AddCourse token={token} />} />
        {/* <Route path="/edit-course" element={<EditCourse />} /> */}
        
        
      </Routes>
    </BrowserRouter>

  
   
  );
}

export default App;
