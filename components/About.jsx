import "./About.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nc-about-section">
        <div className="nc-about-container">
          <div className="nc-about-title">SOBRE NOSOTROS</div>
          <div className="nc-about-features">
            <span className="nc-about-feature">Envíos a todo el país</span>
            <span className="nc-feature-divider">•</span>
            <span className="nc-about-feature">
              Productos de edición limitada
            </span>
            <span className="nc-feature-divider">•</span>
            <span className="nc-about-feature">Cambios fáciles</span>
            <span className="nc-feature-divider">•</span>
            <span className="nc-about-feature">Pagá en cuotas sin interés</span>
          </div>
          <div className="nc-outfit-generator">
            <div className="nc-outfit-question">¿No sabés qué ponerte?</div>
            <a
              href="/closet"
              className="nc-outfit-button"
              onClick={() => navigate("/closet")}
            >
              PROBÁ NUESTRO GENERADOR DE OUTFITS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
