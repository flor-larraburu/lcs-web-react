import { motion } from 'framer-motion';
import { Phone, Clock, MessageCircle, Star, ChefHat } from 'lucide-react';
import '../styles/pages/_contact.scss';

const ContactSection = () => {
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
      {/* Hero Section con Imagen de Fondo */}
      <motion.section 
        className="hero-section contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="hero-text"
          >
            <motion.div variants={fadeInUp} className="hero-icon">
              <Phone className="icon" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="hero-title">
              Ponte en <span className="accent-text">Contacto</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-subtitle">
              Estamos aquí para hacer de tu experiencia algo inolvidable
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Grid Section */}
      <motion.section 
        className="services-section contact-grid-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="services-grid contact-methods"
          >
            <motion.div variants={scaleIn} className="service-item contact-card primary">
              <div className="service-icon">
                <Phone className="icon" />
              </div>
              <h3 className="service-title">Reservas</h3>
              <p className="service-description">
                Llámanos para reservar tu mesa y garantizar tu lugar en nuestra mesa
              </p>
              <div className="contact-action">
                <a href="tel:+34963743999" className="btn-contact">
                  +34 963 74 39 99
                </a>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="service-item contact-card">
              <div className="service-icon">
                <Clock className="icon" />
              </div>
              <h3 className="service-title">Horarios</h3>
              <p className="service-description">
                Planifica tu visita conociendo nuestros horarios de atención
              </p>
              <div className="contact-action">
                <div className="schedule">
                  <div className="schedule-item">
                    <strong>Miércoles - Viernes</strong><br />
                    13:30-17:00, 20:30-24:00
                  </div>
                  <div className="schedule-item">
                    <strong>Sábado</strong><br />
                    13:30-17:00, 20:30-24:00
                  </div>
                  <div className="schedule-item">
                    <strong>Domingo</strong><br />
                    13:30-17:00
                  </div>
                  <div className="schedule-item closed">
                    <strong>Lunes y Martes</strong><br />
                    Cerrado
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="about-section map-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="map-container"
          >
            <motion.div variants={fadeInUp} className="section-header">
              <h2 className="section-title">¿Cómo llegar?</h2>
              <div className="section-divider" />
              <p className="section-description">
                Nos encontramos en una ubicación privilegiada en el centro de Valencia, 
                fácilmente accesible en transporte público y con opciones de aparcamiento cercanas.
              </p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.1877672819205!2d-0.37422102352755604!3d39.4650866130083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048ca767bba71%3A0xb1bd43670a719aad!2sRestaurante!5e0!3m2!1ses!2ses!4v1738696050871!5m2!1ses!2ses"
                loading="lazy"
                title="Ubicación del restaurante"
                className="map-iframe"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="specialties-section features-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              ¿Por qué <span className="accent-text">elegirnos</span>?
            </motion.h2>
            <motion.div variants={fadeInUp} className="section-divider" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="specialties-grid features-grid"
          >
            <motion.div variants={scaleIn} className="specialty-card feature-item">
              <div className="card-content">
                <div className="feature-icon">
                  <ChefHat className="icon" />
                </div>
                <h3 className="card-title">Productos Frescos</h3>
                <p className="card-description">
                  Pescados y mariscos frescos del Cantábrico, seleccionados diariamente
                </p>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="specialty-card feature-item">
              <div className="card-content">
                <div className="feature-icon">
                  <Star className="icon" />
                </div>
                <h3 className="card-title">Experiencia Única</h3>
                <p className="card-description">
                  Ambiente acogedor con un servicio personalizado y atención al detalle
                </p>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="specialty-card feature-item">
              <div className="card-content">
                <div className="feature-icon">
                  <MessageCircle className="icon" />
                </div>
                <h3 className="card-title">Atención Personalizada</h3>
                <p className="card-description">
                  Nuestro equipo está siempre disponible para hacer tu visita especial
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="contact-section cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="cta-content"
          >
            <motion.h2 variants={fadeInUp} className="section-title light">
              ¿Listo para una experiencia <span className="accent-text">inolvidable</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="cta-description">
              Reserva tu mesa y déjanos sorprenderte con los auténticos sabores del Cantábrico
            </motion.p>
            <motion.div variants={fadeInUp} className="cta-actions">
              <a href="tel:+34963743999" className="btn-primary">
                <Phone className="btn-icon" />
                Reservar Ahora
              </a>
              <a href="/menu" className="btn-secondary" >
                Ver Nuestra Carta
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactSection;