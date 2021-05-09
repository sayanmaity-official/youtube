import React from "react";

import "./Navbar.css";
import "../../common.css";

const Navbar = () => {
  return (
    <header className="d-flex align-items-center justify-content-between">
      <div className="title d-flex align-items-center">
        <i className="fab fa-youtube fa-2x" style={{ color: "red" }}></i>
        <h1>YouTube</h1>
      </div>
      <div className="search-div">
        <input
          className="search-query"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
        <div className="search-icon">
          <i
            className="fas fa-search yt-text-secondary"
            style={{ fontSize: "1.5rem" }}
          ></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
