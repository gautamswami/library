import React from "react";
import { Link, Outlet } from "react-router-dom";
import Searchcomponent from "../home/searchcomponent";

export default function Notes() {
  const data = [
    {
      type: "NOTES",
      subjectname: "DATA STRUCTURE",
      facultyname: "TARUNA",
      unit: 2,
      year: 2015,
      classYear: "2year",
      course: "B.tech",
      branch: "CSE"
    },
    {
      type: "NOTES",
      subjectname: "DATA STRUCTURE",
      facultyname: "TARUNA",
      unit: 2,
      year: 2015,
      classYear: "2year",
      course: "B.tech",
      branch: "CSE"
    },
    {
      type: "NOTES",
      subjectname: "DATA STRUCTURE",
      facultyname: "TARUNA",
      unit: 2,
      year: 2015,
      classYear: "2year",
      course: "B.tech",
      branch: "CSE"
    }
  ];

  return (
    <div>
      <Link
        to="/"
        style={{
          padding: "6px",
          textDecoration: "none",
          color: "gray",
          fontSize: "20px"
        }}
      >
        {" "}
        GO BACK
      </Link>
      <br />
      <br />
      <br />
      <Searchcomponent />
      {data.map((tate) => {
        return (
          <>
            <span> {tate.type}</span>

            <span style={{ color: "red" }}>
              {tate.subjectname}

              {tate.facultyname}
            </span>
            <span>
              {" "}
              <Link to="/pdfpage"> hi</Link>{" "}
            </span>
            {/* <Outlet/> */}
            <span> {tate.unit}</span>
            <span> {tate.year}</span>
            <span> {tate.classYear}</span>
            <span> {tate.course}</span>
            <span> {tate.branch}</span>
            <br />
          </>
        );
      })}
    </div>
  );
}
