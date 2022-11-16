import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OneCourse from "./OneCourse";

function Courses({ onAdd, courses, token, currentUser }) {
  const [data, setData] = useState(courses);
  const [sortType, setSortType] = useState("naziv1");
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  let filteredData = "";
  if (courses != null) {
    filteredData = [...courses].filter((course) => {
      if (inputText === "") {
        return course;
      } else {
        console.log(inputText);
        return course.naziv.toLowerCase().includes(inputText);
      }
    });
  }
  useEffect(() => {
    if (courses != null) {
      const sort = (type) => {
        const types = {
          naziv1: "naziv",
          naziv2: "naziv",
          cena1: "cena",
          cena2: "cena",
        };
        const sortProperty = types[type];
        console.log(type);
        if (type == "naziv1") {
          const sorted = [...courses].sort((a, b) =>
            a.naziv > b.naziv ? 1 : -1
          );

          setData(sorted);
        } else if (type == "cena1") {
          console.log("Uslo ovde");
          const sorted = [...courses].sort(
            (b, a) => b[sortProperty] - a[sortProperty]
          );
          console.log(sorted);
          setData(sorted);
        } else if (type == "naziv2") {
          const sorted = [...courses].sort((a, b) =>
            a.naziv < b.naziv ? 1 : -1
          );
          setData(sorted);
        } else if (type == "cena2") {
          console.log("Ipak uslo ovde");
          const sorted = [...courses].sort(
            (a, b) => b[sortProperty] - a[sortProperty]
          );
          console.log(sorted);
          setData(sorted);
        }
      };

      sort(sortType);
    }
  }, [sortType]);

  return (
    <div style={{ background: "#43C59E", alignItems: "flex-end" }}>
      <div>
        <h3>Search</h3>
        <div className="search">
          <input
            className="search"
            label="Search"
            onChange={inputHandler}
          ></input>
        </div>
      </div>
      <div style={{ position: "relative", float: "right" }}>
        <h3>Sortirajte prema:</h3>
        <select
          style={{ position: "inherit" }}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="naziv1">Nazivu(rastuce)</option>
          <option value="naziv2">Nazivu(opadajuce)</option>
          <option value="cena1">Ceni(rastuce)</option>
          <option value="cena2">Ceni(opadajuce)</option>
        </select>
      </div>
      <div className="all-courses">
        {courses == null ? (
          <></>
        ) : data == null ? (
          courses.map((course) => (
            <OneCourse
              course={course}
              key={course.id}
              onAdd={onAdd}
              token={token}
              currentUser={currentUser}
            />
          ))
        ) : inputText != "" ? (
          filteredData.map((course) => (
            <OneCourse
              course={course}
              key={course.id}
              onAdd={onAdd}
              token={token}
              currentUser={currentUser}
            />
          ))
        ) : (
          data.map((course) => (
            <OneCourse
              course={course}
              key={course.id}
              onAdd={onAdd}
              token={token}
              currentUser={currentUser}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Courses;
