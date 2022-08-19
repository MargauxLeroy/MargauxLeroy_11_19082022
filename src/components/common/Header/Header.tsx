import React from "react";

import src from "../../../assets/logo.svg";

import "./Header.scss";

function Header() {
  return (
    <header className="content-layout">
      <img src={src} alt="Logo Kaza" />
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
