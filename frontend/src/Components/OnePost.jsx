import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function OnePost({ post, token, currentUser }) {
  function onDelete(post) {
    var config = {
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };
    if (currentUser.data.role == "1") {
      console.log(currentUser.data.role);
      axios.delete(`/api/delete-post/${post.id}`, config).then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Materijal je uspesno obrisan.");
        } else {
          alert("Brisanje nije uspelo.", res.data.message, "error");
        }
      });
    }
  }
  return (
    <div className="post" key={post.id}>
      <article className="blog-card">
        <div className="blog-card__background">
          <div className="card__background--wrapper">
            <div
              className="card__background--main"
              //   style="background-image: url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg');"
            >
              <div className="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div className="blog-card__head">
          <span className="date__box">
            <span className="date__day">11</span>
            <span className="date__month">JAN</span>
          </span>
        </div>
        <div className="blog-card__info">
          <h5>{post.sadrzaj}</h5>
          <p>
            <a href="download.php?file=sample">Download</a>
          </p>
          <p>{post.datoteka}</p>
          <a href="#" className="btn btn--with-icon">
            <i className="btn-icon fa fa-long-arrow-right"></i>READ MORE
          </a>

          {token == null ? (
            <div></div>
          ) : currentUser != null && currentUser.data.role == "1" ? (
            <div>
              <div className="btn">
                <Link to={`/update-post/${post.id}`}>Izmeni materijal</Link>
              </div>
              <div className="btn" onClick={(e) => onDelete(post)}>
                Obrisi materijal
              </div>
            </div>
          ) : (
            <div></div>
            // <button className="btn" onClick={() => onAdd(course.id)}>
            //   <BsFillCartPlusFill />
            //   <h2> Dodaj u korpu</h2>
            // </button>
          )}
        </div>
      </article>
    </div>
  );
}

export default OnePost;
