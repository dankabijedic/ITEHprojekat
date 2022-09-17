import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

function OneCourse({ course, onAdd }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-description">{course.description}</p>
        <p className="card-price">{course.price}</p>
        <button className="btn" onClick={() => onAdd(course.id)}>
          <BsFillCartPlusFill />
        </button>
      </div>
    </div>
  );
}

export default OneCourse;
