import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ addToken, getCurrentUser, currentUser, token }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((res) => {
        if (res.data.success === true) {
          window.sessionStorage.setItem("auth_token", res.data.access_token);
          addToken(res.data.access_token);
          getCurrentUser();
          // getCourses();
          console.log("Dal se uopste ulogovalo");
          navigate("/courses");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Koisnicko ime ili lozinka nisu validni!");
      });
  }

  useEffect(() => {
    if (token != null) {
      getCurrentUser();
    }
  }, [currentUser]);

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Dobrodosli
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              Ukoliko nemate vec nalog
              <Link to="/register" style={{ color: "hsl(218, 81%, 75%)" }}>
                {" "}
                registrujte se
              </Link>
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
