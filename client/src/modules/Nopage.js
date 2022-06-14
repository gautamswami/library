import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
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
    </div>
  );
}
