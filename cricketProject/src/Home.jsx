import React from "react";
import { NavLink } from "react-router-dom";
import Cricket from "./Cricket";
import "./Home.css";
const Home = () => {
  return (
    <div className="bodyHome">
      <NavLink to={"/news"}>NEWS</NavLink>
      <NavLink to={"/cricket"}>CRICKET</NavLink>
    </div>
  );
};

export default Home;
