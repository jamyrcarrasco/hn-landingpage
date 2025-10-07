import React from "react";

export const About = (props) => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <figure className="about-figure">
              <img
                src="img/contratista.png"
                className="img-responsive"
                alt="Equipo de HN Piedra Artificial trabajando en un proyecto"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="sr-only">Nuestros artesanos especializados en acabados de piedra.</figcaption>
            </figure>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 id="about-heading">Sobre Nosotros</h2>
              <p>{props.data ? props.data.paragraph : "Cargando información..."}</p>

              <h3>¿Por qué Elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "Cargando..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "Cargando..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
