import Styled from "styled-components";
import "./header.css";

const HeaderDiv = Styled.div`

`;
export default function Header() {
  return (
    <>
      <div className="headerdiv">
        <div className="logodiv">
          <img src="/icons/logo.svg" />
        </div>
        <div className="navdiv">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SHARE KNOWLEDGE</li>
          </ul>
        </div>
      </div>
    </>
  );
}
