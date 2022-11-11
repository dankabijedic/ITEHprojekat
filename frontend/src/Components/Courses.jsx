import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneCourse from "./OneCourse";

function Courses({ onAdd, courses, token, currentUser }) {
  return (
    <div className="all-courses">
      {courses == null ? (
        <></>
      ) : (
        courses.map((course) => (
          <OneCourse
            course={course}
            key={course.id}
            onAdd={onAdd}
            //onAdd={addToCart}
            token={token}
            currentUser={currentUser}
          />
        ))
      )}
    </div>
  );
}

export default Courses;
