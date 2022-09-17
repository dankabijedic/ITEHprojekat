import React from "react";
import OnePost from "./OnePost";

function Posts({ posts }) {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {posts.map((post) => (
              <OnePost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      <section className="detail-page">
        <div className="container mt-5"></div>
      </section>
    </div>
  );
}

export default Posts;
