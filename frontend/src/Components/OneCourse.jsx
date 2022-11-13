import axios from "axios";
import React, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function OneCourse({ course, onAdd, token, currentUser }) {
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
        <h3 className="card-title">{course.naziv}</h3>
        <p className="card-price">{course.cena}</p>
        <p className="card-description">{course.opis}</p>
        {/* <p className="card-something">{currentUser.data}</p> */}
        {token == null ? (
          <div></div>
        ) : currentUser != null && currentUser.data.role == "1" ? (
          <div className="btn">
            <Link to={`/update-course/${course.id}`}>Izmeni kurs</Link>
          </div>
        ) : (
          <button className="btn" onClick={() => onAdd(course.id)}>
            <BsFillCartPlusFill />
            <h2> Dodaj u korpu</h2>
          </button>
        )}
      </div>
    </div>
  );
}

export default OneCourse;
