import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Wine, Phone, MapPin, Clock, Star, Users, Award } from 'lucide-react';
import '../styles/main.scss';

// Custom SEO component
const SEOHead = () => {
  React.useEffect(() => {
    document.title = "Restaurante - Gastronomía marinera del Cantábrico en Valencia";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      (metaDesc as HTMLMetaElement).content = "Disfruta de la auténtica gastronomía marinera del Cantábrico en Valencia. Especialidad en lubina salvaje, merluza del Cantábrico y rodaballo.";
    } else {
      const metaElement = document.createElement('meta');
      metaElement.name = "description";
      metaElement.content = "Disfruta de la auténtica gastronomía marinera del Cantábrico en Valencia. Especialidad en lubina salvaje, merluza del Cantábrico y rodaballo.";
      document.head.appendChild(metaElement);
    }
  }, []);
  
  return null;
};

const images = [
  '/images/DSC02849.JPG',
  '/images/DSC02856.JPG',
];

const HomePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="restaurant-home">
      <SEOHead />
      
      {/* Hero Section */}
      <section className="hero-section">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="hero-background"
          >
            <img 
              src={images[currentImage]} 
              alt="Restaurante elegante" 
              className="hero-image"
            />
            <div className="hero-overlay" />
          </motion.div>
        </AnimatePresence>
        
        <div className="hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="hero-text"
          >
            <motion.h1 variants={fadeInUp} className="hero-title">
              La esencia del <span className="accent-text">Cantábrico</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtitle">
              A orillas del Mediterráneo
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-cta">
              <a href="tel:+34963743999" className="btn-primary">
                <Phone className="btn-icon" />
                Reservar Mesa
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="stats-grid"
          >
            <motion.div variants={scaleIn} className="stat-item">
              <Star className="stat-icon" />
              <h3 className="stat-number">4.8</h3>
              <p className="stat-label">Valoración</p>
            </motion.div>
            <motion.div variants={scaleIn} className="stat-item">
              <Users className="stat-icon" />
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Clientes satisfechos</p>
            </motion.div>
            <motion.div variants={scaleIn} className="stat-item">
              <Award className="stat-icon" />
              <h3 className="stat-number">15</h3>
              <p className="stat-label">Años de experiencia</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="specialties-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              Especialidades del <span className="accent-text">Mar</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="section-divider" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="specialties-grid"
          >
            {[
              { 
                name: 'Lubina Salvaje', 
                desc: 'Capturada en las aguas del Cantábrico, preparada con técnicas tradicionales que realzan su sabor natural.',
                price: 'Desde 28€'
              },
              { 
                name: 'Merluza del Cantábrico', 
                desc: 'Fresca del día, con todo el sabor auténtico del mar del norte, cocida a la perfección.',
                price: 'Desde 32€'
              },
              { 
                name: 'Rodaballo Salvaje', 
                desc: 'Pescado noble de textura única, preparado para destacar su delicadeza y sabor excepcional.',
                price: 'Desde 45€'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="specialty-card"
              >
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{item.name}</h3>
                    <span className="card-price">{item.price}</span>
                  </div>
                  <p className="card-description">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="about-content"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              Tradición <span className="accent-text">Marinera</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="about-text">
              Traemos los sabores auténticos del Cantábrico al corazón de Valencia. 
              Cada plato cuenta una historia de tradición, calidad y pasión por la gastronomía marinera.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="services-grid"
          >
            <motion.div variants={scaleIn} className="service-item">
              <div className="service-icon">
                <BookOpen className="icon" />
              </div>
              <h3 className="service-title">Nuestra Carta</h3>
              <p className="service-description">
                Descubre nuestra cuidada selección de pescados y mariscos frescos, 
                preparados con técnicas que respetan y realzan el sabor del mar.
              </p>
              <a href="/menu" className="service-link">
                Explorar Carta
              </a>
            </motion.div>
            
            <motion.div variants={scaleIn} className="service-item">
              <div className="service-icon">
                <Wine className="icon" />
              </div>
              <h3 className="service-title">Bodega Selecta</h3>
              <p className="service-description">
                Explora nuestra cuidada selección de vinos que complementan 
                perfectamente los sabores del mar y la tradición gastronómica.
              </p>
              <a href="/wines" className="service-link">
                Ver Vinos
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp} className="section-title light">
              Visítanos
            </motion.h2>
            <motion.div variants={fadeInUp} className="section-divider light" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="contact-grid"
          >
            <motion.div variants={scaleIn} className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.1877672819205!2d-0.37422102352755604!3d39.4650866130083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048ca767bba71%3A0xb1bd43670a719aad!2sRestaurante!5e0!3m2!1ses!2ses!4v1738696050871!5m2!1ses!2ses"
                loading="lazy"
                title="Ubicación del restaurante"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="contact-info">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div className="info-content">
                  <h3>Dirección</h3>
                  <p>
                    Calle de Gregori Mayans, 5<br />
                    L'Eixample, 46005 València
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" />
                <div className="info-content">
                  <h3>Teléfono</h3>
                  <a href="tel:+34963743999">+34 963 74 39 99</a>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="info-icon" />
                <div className="info-content">
                  <h3>Horario</h3>
                  <div className="schedule">
                    <p><strong>Mié-Vie:</strong> 13:30-17:00, 20:30-24:00</p>
                    <p><strong>Sábado:</strong> 13:30-17:00, 20:30-24:00</p>
                    <p><strong>Domingo:</strong> 13:30-17:00</p>
                    <p><strong>Lun-Mar:</strong> Cerrado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;