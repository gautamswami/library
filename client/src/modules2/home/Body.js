import React from "react";
import { Link } from "react-router-dom";
export default function Body() {
  return (
    <>
      <div className="typeDiv">
        <Link to="/notesform">
          {" "}
          <div className="tyclickdiv"> NOTES </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="tyclickdiv"> LAB MANUALS </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="tyclickdiv"> PAST PAPERS </div>{" "}
        </Link>
      </div>

      <div className="courseDiv">
        <Link to="/notes">
          {" "}
          <div className="crclickdiv"> B.TECH </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="crclickdiv"> BBA </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="crclickdiv"> B.Pharma </div>{" "}
        </Link>
      </div>

      <div className="courseDiv">
        <Link to="/notes">
          {" "}
          <div className="crclickdiv"> CSE </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="crclickdiv"> ME </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="crclickdiv"> CE </div>{" "}
        </Link>
      </div>
      <div className="courseDiv semdiv">
        <Link to="/notes">
          {" "}
          <div className="smclickdiv"> SEMESTER 1 </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="smclickdiv"> SEMESTER 2 </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="smclickdiv"> SEMESTER 3 </div>{" "}
        </Link>
        <Link to="/notes">
          {" "}
          <div className="smclickdiv"> SEMESTER 4 </div>{" "}
        </Link>
      </div>
    </>
  );
}
