import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-principal"
          >
            <span className="sr-only">Mostrar navegación</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
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
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Opiniones
              </a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">
                Nuestro Equipo
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
