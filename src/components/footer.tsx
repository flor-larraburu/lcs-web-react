import React from 'react';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../styles/_footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
          <p className="footer__text">© {currentYear} La Casita de Sabino Valencia.</p>
          <p className="footer__text">All rights reserved.</p>
        </div>
        
        <div>
          <p className="footer__text">
            <a href="https://goo.gl/maps/YourGoogleMapsLink" target="_blank" rel="noopener noreferrer" className="footer__link">
              <FaMapMarkerAlt style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              C/ Ejemplo, 12, 46001 Valencia
            </a>
          </p>
          <p className="footer__text">
            <a href="tel:+34963743999" className="footer__link">
              +34 963 74 39 99
            </a>
          </p>
        </div>
        
        <div>
          <p className="footer__text">
            <a href="mailto:info@lacasitadesabino.com" className="footer__link">
              <MdEmail style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              info@lacasitadesabino.com
            </a>
          </p>
          <p className="footer__text">
            Diseño por{" "}
            <a href="https://" target="_blank" rel="noopener noreferrer" className="footer__link">
              Florencia Larraburu
            </a>
          </p>
        </div>

        <div className="footer__social">
          <a 
            href="https://www.instagram.com/casitasabinovlc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__icon"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/CasitaSabinoVLC" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__icon"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;