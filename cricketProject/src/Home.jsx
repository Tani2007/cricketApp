import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cricket from "./Cricket";
import { ImMenu } from "react-icons/im";
import "./Home.css";
import { News } from "./News";
const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <div className="home-container">
        <div className="home-grid navbar-grid">
          <div className="home-logo">
            <h1>Tanishq</h1>
          </div>
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to={"/news"}>NEWS</NavLink>
              </li>
              <li>
                <NavLink to={"/cricket"}>Cricket</NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <ImMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
