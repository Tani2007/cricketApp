import React from "react";
import "./Error.css";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className="errorPage">
      <div className="errorContainer">Error 404 Server is On Maintainence</div>
      <img
        className="imageError"
        src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
        alt=""
      />
      <button className="errorGoBack">
        <NavLink className="errGoBack" to={"/"}>
          GO BACK
        </NavLink>
      </button>
    </div>
  );
};

export default Error;
