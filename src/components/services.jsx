import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Servicios</h2>
          <p>
            Especialistas en piedra artificial, construcción de piscinas y
            acabados duraderos. Calidad garantizada en cada proyecto.
          </p>
        </div>
        <div className="row">
          {props.data ? (
            props.data.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-sm-6 col-md-6"
               
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <i
                  className={d.icon}
                  style={{ fontSize: "36px", marginBottom: "10px", color: "#2c3e50" }}
                ></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando servicios...</p>
          )}
        </div>
      </div>
    </div>
  );
};
