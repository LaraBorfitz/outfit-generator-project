import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="nc-newsletter-section">
      <h2 className="nc-newsletter-title">JOIN OUR NEWSLETTER</h2>
      <p className="nc-newsletter-description">
        Suscríbete para recibir actualizaciones sobre nuevas colecciones y
        ofertas exclusivas.
      </p>
      <div className="nc-newsletter-form">
        <input
          type="email"
          placeholder="Your email address"
          className="nc-newsletter-input"
        />
        <button className="nc-newsletter-button">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Newsletter;
