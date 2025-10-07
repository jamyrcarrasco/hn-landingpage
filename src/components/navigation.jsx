import React from "react";

export const Navigation = () => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      aria-label="Navegación principal"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-principal"
            aria-controls="navbar-principal"
            aria-expanded="false"
            aria-label="Abrir menú de navegación"
          >
            <span className="sr-only">Mostrar navegación</span>
            <span className="icon-bar" aria-hidden="true"></span>
            <span className="icon-bar" aria-hidden="true"></span>
            <span className="icon-bar" aria-hidden="true"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            HN Piedra Artificial
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-principal">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Ventajas
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galería
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
