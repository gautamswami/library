import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../header";
import "./upload.css";
import { useState } from "react";
const NotesButton = styled.button`
  width: 173px;
  height: 60px;
  background: #99daea;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 34px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: white;
`;
const Button = styled.button`
  border-radius: 34px;
  /* width: 173px; */
  padding: 0 35px 0 35px;
  background: transparent;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #99daea;
  /*   
  height: 60px;
  background: #99daea;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 34px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: white; */
`;
const ToggleButton = styled.div`
  width: 801px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 34px;
`;

export default function NotesForm() {
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

        <ToggleButton>
          <Button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            Notes
          </Button>
          <Button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            Lab Manual
          </Button>
          <Button
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
          >
            Papers or solutions
          </Button>
        </ToggleButton>
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
