import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../modules/header";
import "./home.css";
import { useState } from "react";

export default function NewBody() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  return (
    <>
      {/* <Link to='/'> GO BACK</Link> */}
      <div>
        <Header />
        <div className="contentdiv">
          <p className="hellotext">Hello, what can we help you find?</p>
          <p className="findtext">
            Find your subject notes, lab manuals, previous year papers and all
            other content that will guide you through your semester.{" "}
          </p>
          <input
            className="searchfield"
            placeholder="Search what you want to learn today"
          />
          <div className="disp">
            <div className="bigcard">
              card
              <img src="icons/notes.svg" />
            </div>
            <div className="bigcard">
              card
              <img src="icons/book.svg" />
            </div>
            <div className="bigcard">
              card
              <img src="icons/paper.svg" />
            </div>
          </div>
          <div className="disp">
            <div className="smallcard">btech</div>
            <div className="smallcard">bba</div>
            <div className="smallcard">pharma</div>
            <div className="smallcard">pharma</div>
          </div>
          <div className="disp">
            <div className="smallcard">cse</div>
            <div className="smallcard">ece</div>
            <div className="smallcard">civil</div>
            <div className="smallcard">me</div>
          </div>
          <div className="disp">
            <div className="smallcard">sem 1</div>
            <div className="smallcard">sem 2</div>
            <div className="smallcard">sem 3</div>
            <div className="smallcard">sem 4</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Notes
          </button>
          <button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            Lab Manual
          </button>
          <button
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
          >
            Papers or solutions
          </button>
        </div>
      </div>
      {activeTab === "tab1" ? (
        <h1>hello</h1>
      ) : activeTab === "tab2" ? (
        <h1>hello2</h1>
      ) : (
        <h1>hello3</h1>
      )}
    </>
  );
}
