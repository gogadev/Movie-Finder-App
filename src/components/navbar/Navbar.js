import React from "react";

import icon from "../../assets/popcorn.svg";
import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1>
        Movie{" "}
        <span>
          {" "}
          <img src={icon} alt="" />
        </span>{" "}
        Time
      </h1>
    </nav>
  );
};

export default Navbar;
