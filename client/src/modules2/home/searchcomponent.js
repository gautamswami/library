import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Searchcomponent() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="searchdiv">
        <input
          placeholder="SEARCH"
          onChange={(event) => {
            setSearchTerm(`${event.target.value}`);
          }}
        />
        <FaSearch
          color="white"
          style={{
            fontSize: "22px",
            background: "black",
            height: "30px",
            padding: "5px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px"
          }}
        />
      </div>
    </>
  );
}
