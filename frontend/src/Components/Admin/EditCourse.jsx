import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCourse({ setCourses }) {
  const [courseInput, setCourse] = useState({
    naziv: "",
    broj_casova: "",
    cena: "",
    opis: "",
    predmet_id: "",
  });

  const course_id = useParams();
  const handleInput = (e) => {
    e.persist();
    setCourse({ ...courseInput, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  var config = {
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  function getCourse() {
    axios.get(`/api/edit-course/${course_id.id}`, config).then((res) => {
      if (res.data.status === 200) {
        setCourse(res.data);
        console.log(res.data);
      } else if (res.data.status === 404) {
        alert("Error", res.data.message, "error");
      }
    });
  }

  useEffect(() => {
    getCourse();
  }, []);

  const updateCourse = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("naziv", courseInput.naziv);
    formData.append("broj_casova", courseInput.broj_casova);
    formData.append("cena", courseInput.cena);
    formData.append("opis", courseInput.opis);

    var config = {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios
      .post(`/api/update-course/${course_id.id}`, formData, config)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Kurs je uspesno izmenjen.");
          axios.get("api/courses").then((result) => {
            setCourses(result.data);
          });
        } else if (res.status === 422) {
          alert("Sva polja su neophodna.", "", "error");
        } else if (res.status === 404) {
          alert("Error", res.data.message, "error");
        }
        navigate("/courses");
      });
  };

  return (
    <div className="container-fluid px-4">
      <div className="card mt-4">
        <div className="card-header"></div>
        <div className="card-body">
          <form id="" onSubmit={updateCourse}>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Naziv
              </label>
              <input
                type="text"
                name="naziv"
                onChange={handleInput}
                className="form-control"
              ></input>
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
              ></input>
              <span></span>
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

            <button type="submit" className="btn btn-primary px-4 mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
