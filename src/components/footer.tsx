import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import '../styles/footer.scss';

const Footer = () => {
  return (
    // Footer
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
        <div className="footer__container">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="footer__text">© 2024 La Casita de Sabino Valencia.</p>
            <p className="footer__text">All rights reserved.</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="footer__text">
              <a href="https://goo.gl/maps/YourGoogleMapsLink" target="_blank" rel="noopener noreferrer" className="footer__link">
                <MapPin size={16} style={{ marginRight: '6px', display: 'inline' }} />
                C/ Ejemplo, 12, 46001 Valencia
              </a>
            </p>
            <p className="footer__text">
              <a href="tel:+34963743999" className="footer__link">
                <Phone size={16} style={{ marginRight: '6px', display: 'inline' }} />
                +34 963 74 39 99
              </a>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="footer__text">
              <a href="mailto:info@lacasitadesabino.com" className="footer__link">
                <Mail size={16} style={{ marginRight: '6px', display: 'inline' }} />
                info@lacasitadesabino.com
              </a>
            </p>
            <p className="footer__text">
              Diseño por{" "}
              <a href="https://" target="_blank" rel="noopener noreferrer" className="footer__link">
                Florencia Larraburu
              </a>
            </p>
          </motion.div>

          <motion.div 
            className="footer__social"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 1,
              type: "spring",
              stiffness: 200
            }}
          >
            <motion.a 
              href="https://www.instagram.com/casitasabinovlc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__icon"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/CasitaSabinoVLC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__icon"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook size={20} />
            </motion.a>
          </motion.div>
        </div>
      </motion.footer>
  );
};

export default Footer;
