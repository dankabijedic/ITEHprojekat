import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [postInput, setPost] = useState({
    naslov: "",
    sadrzaj: "",
  });

  let navigate = useNavigate();

  function handleInput(e) {
    let newPostData = postInput;
    newPostData[e.target.name] = e.target.value;
    console.log(newPostData);
    setPost(newPostData);
    console.log(postInput);
  }

  function submitPost(e) {
    e.preventDefault();
    var config = {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios
      .post("api/add-post", postInput, config)
      .then((res) => {
        console.log(postInput);
        console.log(res.data);
        navigate("/posts");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="container-fluid px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>Unesite objavu</h4>
        </div>
        <div className="card-body">
          <form onSubmit={submitPost}>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Naslov
              </label>
              <input
                type="text"
                name="naslov"
                onChange={handleInput}
                className="form-control"
                id="exampleInputPassword1"
              />
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
                id="exampleInputPassword1"
              />
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

export default AddPost;
