import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
