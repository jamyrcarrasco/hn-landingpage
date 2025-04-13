import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>
            Una muestra de nuestros proyectos de piedra artificial, piscinas, encimeras
            y acabados personalizados. Cada detalle refleja nuestro compromiso con la calidad.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data ? (
              props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4 ">
                  <div className="hover-bg">
                    <img
                      src={d.smallImage}
                      alt={d.title}
                      className="gallery-img img-responsive"
                    />
                    <div className="hover-text">
                      <h4>{d.title}</h4>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Cargando galería...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
