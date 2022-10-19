import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm({ addToken }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleInput(e) {
    console.log(e);
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          window.sessionStorage.setItem("auth_token", res.data.access_token);
          addToken(res.data.access_token);
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    // <section className="vh-100 gradient-custom">
    //   <div className="container py-5 h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    //         <div
    //           className="card bg-dark text-white"
    //           //         style={{borderRadius: 1 rem}}
    //         >
    //           <div className="card-body p-5 text-center">
    //             <div className="mb-md-5 mt-md-4 pb-5">
    //               <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    //               <p className="text-white-50 mb-5">
    //                 Please enter your login and password!
    //               </p>
    //               <form onSubmit={handleLogin}>
    //                 <div className="form-outline form-white mb-4">
    //                   <input
    //                     type="email"
    //                     id="typeEmailX"
    //                     className="form-control form-control-lg"
    //                     name="email"
    //                     onInput={handleInput}
    //                   />
    //                   <label
    //                     className="form-label"
    //                     // for="typeEmailX"
    //                   >
    //                     Email
    //                   </label>
    //                 </div>

    //                 <div className="form-outline form-white mb-4">
    //                   <input
    //                     type="password"
    //                     id="typePasswordX"
    //                     className="form-control form-control-lg"
    //                     name="password"
    //                     onInput={handleInput}
    //                   />
    //                   <label
    //                     className="form-label"
    //                     // for="typePasswordX"
    //                   >
    //                     Password
    //                   </label>
    //                 </div>

    //                 <p className="small mb-5 pb-lg-2">
    //                   <a className="text-white-50" href="#!">
    //                     Forgot password?
    //                   </a>
    //                 </p>

    //                 <button
    //                   className="btn btn-outline-light btn-lg px-5"
    //                   type="submit"
    //                 >
    //                   Login
    //                 </button>
    //               </form>
    //               <div className="d-flex justify-content-center text-center mt-4 pt-1">
    //                 <a href="#!" className="text-white">
    //                   <i className="fab fa-facebook-f fa-lg"></i>
    //                 </a>
    //                 <a href="#!" className="text-white">
    //                   <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
    //                 </a>
    //                 <a href="#!" className="text-white">
    //                   <i className="fab fa-google fa-lg"></i>
    //                 </a>
    //               </div>
    //             </div>

    //             <div>
    //               <p className="mb-0">
    //                 Don't have an account?{" "}
    //                 <a href="#!" className="text-white-50 fw-bold">
    //                   Sign Up
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={handleLogin}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      onInput={handleInput}
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      onInput={handleInput}
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 center"
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const mapStateToProps = (state) => ({
//   error: state.auth.errors, //iz reducera, isLoggedIn
// });

//export default connect(mapStateToProps, { loginUser })(LoginPage);
export default LoginForm;
