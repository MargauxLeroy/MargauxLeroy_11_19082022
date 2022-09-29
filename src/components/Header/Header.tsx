import React from "react";
import { Link, NavLink } from "react-router-dom";

import src from "../../assets/logo.svg";

import "./Header.scss";

const navlinkStyle = (isActive: boolean) =>
  isActive ? "navlink-active" : "navlink-inactive";

function Header() {
  return (
    <header className="content-layout">
      <Link to="/">
        <img src={src} alt="Logo Kaza" />
      </Link>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => navlinkStyle(isActive)}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => navlinkStyle(isActive)}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
