import React from "react";

export const Gallery = (props) => {
  return (
    <section id="portfolio" className="text-center" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-title">
          <h2 id="gallery-heading">Galería</h2>
          <p>
            Una muestra de nuestros proyectos de piedra artificial, piscinas, encimeras y acabados personalizados. Cada detalle
            refleja nuestro compromiso con la calidad.
          </p>
        </div>
        <ul className="row portfolio-items">
          {props.data ? (
            props.data.map((item, index) => (
              <li key={`${item.title}-${index}`} className="col-sm-6 col-md-4 col-lg-4">
                <figure className="portfolio-figure" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <img
                    src={item.smallImage}
                    alt={item.alt}
                    className="gallery-img img-responsive"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <h4>{item.title}</h4>
                    {item.description ? <p>{item.description}</p> : null}
                  </figcaption>
                </figure>
              </li>
            ))
          ) : (
            <li className="col-xs-12">Cargando galería...</li>
          )}
        </ul>
      </div>
    </section>
  );
};
