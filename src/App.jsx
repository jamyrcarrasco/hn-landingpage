import React, { useState, useEffect, useCallback } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/Header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    if (window?.dataLayer) {
      window.dataLayer.push({ event: "cta_whatsapp_click" });
    }
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido principal
      </a>
      <Navigation />
      <main id="contenido-principal" className="site-main" role="main">
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <section className="cta" aria-labelledby="cta-heading">
          <div className="cta__inner">
            <h2 id="cta-heading">¿Listo para transformar tu espacio?</h2>
            <p>
              Cuéntanos qué necesitas y prepararemos una propuesta personalizada en piedra
              artificial o piscinas a medida.
            </p>
            <a
              className="btn btn-custom btn-lg"
              href="https://wa.me/+34644508702?text=Hola%20estoy%20interesado%20en%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar presupuesto
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <small>
            © {new Date().getFullYear()} HN Piedra Artificial · Artesanos en acabados duraderos de piedra y piscinas.
          </small>
        </div>
      </footer>
      <a
        href="https://wa.me/+34644508702?text=Hola%20estoy%20interesado%20en%20sus%20servicios"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          loading="lazy"
          decoding="async"
          width="56"
          height="56"
        />
        <span className="whatsapp-tooltip">¡Contáctanos!</span>
      </a>
    </>
  );
};

export default App;
