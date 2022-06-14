import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import "./home.css";
import Searchcomponent from "./searchcomponent";
import Body from "./Body";
import NewBody from "./NewBody";
// import styled from 'styled-components'
export default function Home() {
  return (
    <>
      <Searchcomponent />
      <Body />
      <NewBody />
    </>
  );
}
