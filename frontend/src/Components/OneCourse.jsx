import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

function OneCourse({ course, onAdd }) {
  return (
    <div className="card">
      <div className="photo-container">
        <img
          className="card-img-top"
          src="https://picsum.photos/200"
          alt="Neka slika"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-price">{course.price}</p>
        <p className="card-description">{course.description}</p>

        <button className="btn" onClick={() => onAdd(course.id)}>
          <BsFillCartPlusFill />
          <h2> Dodaj u korpu</h2>
        </button>
      </div>
    </div>
  );
}

export default OneCourse;
