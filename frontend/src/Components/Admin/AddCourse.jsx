import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [courseInput, setCourse] = useState({
    naziv: "",
    broj_casova: "",
    cena: "",
    opis: "",
    predmet_id: "",
  });

  let navigate = useNavigate();

  function handleInput(e) {
    let newCourseData = courseInput;
    newCourseData[e.target.name] = e.target.value;
    console.log(newCourseData);
    setCourse(newCourseData);
    console.log(courseInput);
  }

  function submitCourse(e) {
    e.preventDefault();
    var config = {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios
      .post("api/add-course", courseInput, config)
      .then((res) => {
        console.log(courseInput);
        console.log(res.data);
        navigate("/courses");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="container-fluid px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>Unesite kurs</h4>
        </div>
        <div className="card-body">
          <form onSubmit={submitCourse}>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Naziv
              </label>
              <input
                type="text"
                name="naziv"
                onChange={handleInput}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Broj casova
              </label>
              <input
                type="text"
                name="broj_casova"
                onChange={handleInput}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Cena
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="cena"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Opis
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="opis"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Predmet id
              </label>
              <input
                type="text"
                name="predmet_id"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleInput}
              />
            </div>

            <button type="submit" className="btn btn-primary px-4 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;