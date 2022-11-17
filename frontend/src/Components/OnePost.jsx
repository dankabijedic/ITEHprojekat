import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react";

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
            <div className="card__background--main">
              <div className="card__background--layer"></div>
            </div>
          </div>
        </div>

        {/* <div className="blog-card__info"> */}
        <div>
          <h1>{post.naslov}</h1>
          {/* <h5>{post.sadrzaj}</h5> */}

          <ReadMoreReact
            text={post.sadrzaj}
            max={200}
            readMoreText="procitajte vise"
          />

          {token === null ? (
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
          )}
          {/* </div> */}
        </div>
      </article>
    </div>
  );
}

export default OnePost;
