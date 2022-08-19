import React from "react";

import "./Error404.scss";

function Error404() {
  return (
    <div className="content-layout page-flex error-404">
      <p>404</p>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <a href="#">Retourner sur la page d’accueil</a>
    </div>
  );
}

export default Error404;
