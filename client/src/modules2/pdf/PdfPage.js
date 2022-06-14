import React from "react";
import { Link } from "react-router-dom";
export default function PdfPage() {
  const lin = [
    {
      link:
        "https://drive.google.com/file/d/10JvXYIhop4k87pK3IuGZB60kCQZiK5dX/preview"
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

      <iframe
        src={lin.map((like) => {
          return like.link;
        })}
        width="860"
        height="680"
        allow="autoplay"
      ></iframe>
      <br />
      <hr />
      {/* <embed src={lin.map((like)=>{return(like.link)})}  */}
      {/* width="860"
               height="500"></embed> */}
    </div>
  );
}
