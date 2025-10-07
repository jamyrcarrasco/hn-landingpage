import React from "react";

export const Services = (props) => {
  return (
    <section id="services" className="text-center" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="services-heading">Servicios</h2>
          <p>
            Especialistas en piedra artificial, construcción de piscinas y acabados duraderos. Calidad garantizada en cada
            proyecto.
          </p>
        </div>
        <ul className="row service-list">
          {props.data ? (
            props.data.map((d, i) => (
              <li key={`${d.name}-${i}`} className="col-sm-6 col-md-6">
                <article className="service-card" data-aos="fade-up" data-aos-delay={i * 100}>
                  <span className="service-icon" aria-hidden="true">
                    <i className={d.icon} />
                  </span>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </article>
              </li>
            ))
          ) : (
            <li className="col-xs-12">Cargando servicios...</li>
          )}
        </ul>
      </div>
    </section>
  );
};
