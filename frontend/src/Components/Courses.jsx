import React from "react";
import OneCourse from "./OneCourse";

function Courses({ courses, onAdd }) {
  return (
    <div className="all-courses">
      {courses.map((course) => (
        <OneCourse key={course.id} course={course} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default Courses;
