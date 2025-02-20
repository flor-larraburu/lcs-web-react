import '../styles/_footer.scss';
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© 2025 La Casita de Sabino Valencia. All rights reserved.</p>
        
        <p className="footer__text">
          Made by{" "}
          <a href="https://" target="_blank" rel="noopener noreferrer" className="footer__link">
            Florencia Larraburu
          </a>
        </p>

        <p className="footer__text">
          Contact:{" "}
          <a href="tel:+123456789" className="footer__link">
            +1 234 567 89
          </a>
        </p>

        <div className="footer__social">
          <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="footer__icon">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer" className="footer__icon">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
