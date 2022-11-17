import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [postInput, setPost] = useState({
    naslov: "",
    sadrzaj: "",
  });

  const post_id = useParams();
  console.log(post_id.id);
  const handleInput = (e) => {
    e.persist();
    setPost({ ...postInput, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();
  var config = {
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  function getPost() {
    axios.get("/api/edit-post/${post.id}", config).then((res) => {
      if (res.data.status === 200) {
        setPost(res.data);
        console.log(res.data);
      } else if (res.data.status === 404) {
        alert("Error", res.data.message, "error");
      }
    });
  }

  useEffect(() => {
    getPost();
  }, []);

  const updatePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("naslov", postInput.naslov);
    formData.append("sadrzaj", postInput.sadrzaj);

    var config = {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios
      .post(`/api/update-post/${post_id.id}`, formData, config)
      .then((res) => {
        if (res.data.status === 200) {
          alert("Post je uspesno izmenjen.");
        } else if (res.data.status === 422) {
          alert("Sva polja su neophodna.", "", "error");
        } else if (res.data.status === 404) {
          alert("Error", res.data.message, "error");
        }
        navigate("/posts");
      });
  };
  return (
    <div className="container-fluid px-4">
      <div className="card mt-4">
        <div className="card-header"></div>
        <div className="card-body">
          <form id="" onSubmit={updatePost}>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Naslov
              </label>
              <input
                type="text"
                name="naslov"
                onChange={handleInput}
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Sadrzaj
              </label>
              <input
                type="text"
                name="sadrzaj"
                onChange={handleInput}
                className="form-control"
              ></input>
              <span></span>
            </div>

            <button type="submit" className="btn btn-primary px-4 mt-2">
              Sacuvaj
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
