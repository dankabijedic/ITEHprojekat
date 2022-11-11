import React from "react";

function OnePost({ post }) {
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
            <a href="#" className="icon-link mr-3">
              <i className="fa fa-pencil-square-o"></i> Tony Jahson
            </a>
            <a href="#" className="icon-link">
              <i className="fa fa-comments-o"></i> 150
            </a>
          </p>
          <p>{post.datoteka}</p>
          <a href="#" className="btn btn--with-icon">
            <i className="btn-icon fa fa-long-arrow-right"></i>READ MORE
          </a>
        </div>
      </article>
    </div>
  );
}

export default OnePost;
