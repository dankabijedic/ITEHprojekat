import "./App.css";
import Courses from "./Components/Courses";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import axios from "axios";
import AddCourse from "./Components/Admin/AddCourse";
import EditCourse from "./Components/Admin/EditCourse";
import AddPost from "./Components/Admin/AddPost";
import EditPost from "./Components/Admin/EditPost";


function App() {
  const [cartNum, setCartNum] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [token, setToken] = useState();
  const [cartCourses, setCartCourses] = useState([]);

  
  const [courses, setCourses] = useState();
  useEffect(() => {
    if (courses == null) {
      axios.get("api/courses").then((res) => {
        setCourses(res.data);
      });
      console.log(courses);
    }
  }, [courses]);

  const updateCart = (course) => {
    console.log(cartCourses);
    console.log(course);
    if(cartCourses == null) {
      console.log("Ovde  je");
      setCartCourses([course]); 
    } else {
    if(!cartCourses.includes(course)) {
    setCartCourses([...cartCourses, course]);
    }
  }
    calcPrice(cartCourses);
  }

  const refreshCart = (course_id) => {
    setCartCourses((current) => {
      current.filter((removeCourse) => removeCourse.id != course_id)});
    setCartNum(cartNum  - 1);
    calcPrice();
  };

  function addToken(auth_token) {
    setToken(auth_token);
  }  

  const addToCart = (id) => {
    let kolicina = 1;
     courses.map((course) => {
    if(course.id === id) {

    let isAdded = false;


  
    if(cartCourses == null ){
      isAdded = false;
    } else {
    cartCourses.map((oneCartCourse) => {
      if(oneCartCourse.id === course.id) {
        isAdded = true;
      }
    })};

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
        updateCart(course);
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


const deleteCartItem = (course, e) => {

  cart.map((oneCart) => {
    if(oneCart.course_id == 
      course.id 
      && oneCart.user_id == 
      currentUser.data.id) {
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
      thisClicked.closest("DIV.card-body").remove();
      refreshCart(oneCart.course_id);
    } else if (res.data.status === 404) {
      alert("Error", res.data.message, "error");
      thisClicked.innerText = "Remove";
    }
  });
}
});
};


const[currentUser, setCurrentUser] = useState();
function getCurrentUser() {
// if(token != null) {
  var config = {
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };
 
  axios.get(`api/profile`, config).then((res) => {
      setCurrentUser(res);
    })
  // }
};

const [cart, setCart] = useState({});

const getUserCart = () => {
  {console.log(currentUser)};
  getCurrentUser();
  let isMounted = true;
  var config = {
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  let count = 0; 
  axios.get(`api/cart`, config).then((res) => {
    if (isMounted) {
     if(count === 0) {
      console.log(currentUser);
      console.log(res.data.cart);
        setCart(res.data.cart);
        setCartNum(res.data.cart.length);
        isMounted = false;
        count = 1;
    }
  }});
  return () => {
    isMounted = false;
  };
};


function getCourses() {
  console.log(currentUser);
  getCurrentUser();
  console.log(currentUser);
  getUserCart();
  let exists = false;
    cart.map((newCartItem) => {
      if (newCartItem.user_id == currentUser.data.id) {
       axios.get("api/courses/" + newCartItem.course_id).then((res) => {
      if(cartCourses!= null) {
        cartCourses.map((courseHelp) => {
          if(courseHelp.id === newCartItem.course_id) {
            exists = true;
          }
        })
        if(exists === false){
        setCartCourses([...cartCourses, res.data]);
        }
      }
      });
    }
  });
};


let totalCartPrice = 0;
function calcPrice() {
  if(token != null ) {
  console.log("Ovde je doslo");
  console.log(cartCourses);
  if(cartCourses == null) {
    setTotalPrice(0);
  } else {
  cartCourses.map((oneC) => {
    console.log("A ovde");
    console.log(oneC);
    totalCartPrice += oneC.cena;
    setTotalPrice(totalCartPrice);
    console.log("Uslo.")
  });
}
  console.log("Proslo");
  console.log(totalPrice);
}
}

useEffect(()=> {
  calcPrice();
}, [cartCourses]);




  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Navbar token={token} addToken={addToken} cartNum={cartNum} currentUser={currentUser} getCourses={getCourses}/>}>
         <Route path="courses" element={<Courses onAdd={addToCart} courses={courses} token={token} currentUser={currentUser} setCourses={setCourses}/>} />
         <Route path="posts" element={<Posts token={token} currentUser={currentUser}/>} />
        <Route path="cart" element={<Cart cartCourses={cartCourses} cartNum={cartNum} totalPrice={totalPrice} token={token} currentUser={currentUser} onDelete={deleteCartItem}/>} />
        </Route>
        <Route path="/login" element={<LoginForm addToken={addToken} getCurrentUser={getCurrentUser} currentUser={currentUser} token={token} 
        calcPrice={calcPrice} 
        getUserCart={getUserCart}/>} />
        <Route path="/register" element={<RegisterForm/>} /> 
        <Route path="/add-course" element={<AddCourse token={token} setCourses={setCourses}/>} />
        <Route path="/update-course/:id" element={<EditCourse setCourses={setCourses}/>} />
        <Route path="/add-post" element={<AddPost token={token} />} />
        <Route path="/update-post/:id" element={<EditPost />} />  
      </Routes>
    </BrowserRouter>

  
   
  );
}

export default App;
