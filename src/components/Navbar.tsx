import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-wrap">
        {/* <img
          className="icon"
          src={`${process.env.PUBLIC_URL}/icon.png`}
          alt="twomabo icon"
        /> */}
        <div className="title">이마보 TWOMABO</div>
      </div>
    </div>
  );
}
