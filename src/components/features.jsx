import React from "react";

export const Features = (props) => {
  return (
    <section id="features" className="text-center" aria-labelledby="features-heading">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 id="features-heading">Nuestras Ventajas</h2>
          <p className="intro_feature">
            Lo que nos diferencia en cada proyecto de obra, piedra y piscina.
          </p>
        </div>
        <ul className="row feature-list">
          {props.data ? (
            props.data.map((d, i) => (
              <li
                key={`${d.title}-${i}`}
                className="col-xs-12 col-sm-6 col-md-3 feature-item"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="feature-icon-wrapper" aria-hidden="true">
                  <i className={`${d.icon} feature-icon`}></i>
                </span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </li>
            ))
          ) : (
            <li className="col-xs-12">Cargando características...</li>
          )}
        </ul>
      </div>
    </section>
  );
};
