import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Nuestras Ventajas</h2>
          <p className="intro_feature">Lo que nos diferencia en cada proyecto de obra, piedra y piscina.</p>

        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`}       className="col-xs-12 col-sm-6 col-md-3 feature-item"
              data-aos="fade-up"
              data-aos-delay={i * 100}>
                <i className={d.icon + " feature-icon"}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
          ) : (
            <p>Cargando características...</p>
          )}
        </div>
      </div>
    </div>
  );
};
