import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="content-layout page-flex error-404">
      <p>404</p>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;
