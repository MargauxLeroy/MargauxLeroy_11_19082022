import React from "react";
import { Link, NavLink } from "react-router-dom";

import src from "../../../assets/logo.svg";

import "./Header.scss";

function Header() {
  return (
    <header className="content-layout">
      <Link to="/">
        <img src={src} alt="Logo Kaza" />
      </Link>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-inactive"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navlink-active" : "navlink-inactive"
            }
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
