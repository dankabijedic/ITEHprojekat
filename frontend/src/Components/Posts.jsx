import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OnePost from "./OnePost";

function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    if (posts == null) {
      axios.get("api/posts").then((res) => {
        console.log(res.data);
        setPosts(res.data);
      });
    }
  }, [posts]);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {posts == null ? (
              <></>
            ) : (
              posts.map((post) => <OnePost post={post} key={post.id} />)
            )}
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
