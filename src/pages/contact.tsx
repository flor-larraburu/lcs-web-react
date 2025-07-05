import { motion } from 'framer-motion';
import { Phone, MapPin, Clock,  MessageCircle, Star, ChefHat } from 'lucide-react';

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
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
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
      </section>

      {/* Contact Grid Section */}
      <section className="contact-grid-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="contact-methods"
          >
            <motion.div variants={scaleIn} className="contact-card primary">
              <div className="card-icon">
                <Phone className="icon" />
              </div>
              <h3 className="card-title">Reservas</h3>
              <p className="card-description">
                Llámanos para reservar tu mesa y garantizar tu lugar en nuestra mesa
              </p>
              <div className="card-action">
                <a href="tel:+34963743999" className="btn-contact">
                  +34 963 74 39 99
                </a>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="contact-card">
              <div className="card-icon">
                <MapPin className="icon" />
              </div>
              <h3 className="card-title">Ubicación</h3>
              <p className="card-description">
                Encuéntranos en el corazón de Valencia, en L'Eixample
              </p>
              <div className="card-action">
                <div className="address">
                  <strong>Calle de Gregori Mayans, 5</strong><br />
                  L'Eixample, 46005 València
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="contact-card">
              <div className="card-icon">
                <Clock className="icon" />
              </div>
              <h3 className="card-title">Horarios</h3>
              <p className="card-description">
                Planifica tu visita conociendo nuestros horarios de atención
              </p>
              <div className="card-action">
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
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="map-container"
          >
            <motion.div variants={fadeInUp} className="map-header">
              <h2 className="section-title">¿Cómo llegar?</h2>
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
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              ¿Por qué elegirnos?
            </motion.h2>
            <motion.div variants={fadeInUp} className="section-divider" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="features-grid"
          >
            <motion.div variants={scaleIn} className="feature-item">
              <div className="feature-icon">
                <ChefHat className="icon" />
              </div>
              <h3 className="feature-title">Productos Frescos</h3>
              <p className="feature-description">
                Pescados y mariscos frescos del Cantábrico, seleccionados diariamente
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="feature-item">
              <div className="feature-icon">
                <Star className="icon" />
              </div>
              <h3 className="feature-title">Experiencia Única</h3>
              <p className="feature-description">
                Ambiente acogedor con un servicio personalizado y atención al detalle
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="feature-item">
              <div className="feature-icon">
                <MessageCircle className="icon" />
              </div>
              <h3 className="feature-title">Atención Personalizada</h3>
              <p className="feature-description">
                Nuestro equipo está siempre disponible para hacer tu visita especial
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="cta-content"
          >
            <motion.h2 variants={fadeInUp} className="cta-title">
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
              <a href="/menu" className="btn-secondary">
                Ver Nuestra Carta
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .contact-page {
          --primary: #1e3a5f;
          --accent: #4a90a4;
          --light-accent: #87ceeb;
          --text-primary: #2c3e50;
          --text-secondary: #64748b;
          --background: #fefefe;
          --light-bg: #f8fafc;
          --dark-bg: #1a2332;
          --border: #e2e8f0;
          --overlay: rgba(26, 35, 50, 0.6);
          --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          --shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.12);
          
          min-height: 100vh;
          background-color: var(--background);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text-primary);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--light-bg) 0%, #e8f4f8 100%);
          padding: 8rem 0 6rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(74, 144, 164, 0.1) 0%, transparent 70%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .hero-icon {
          width: 5rem;
          height: 5rem;
          background: linear-gradient(135deg, var(--light-accent), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 8px 30px rgba(74, 144, 164, 0.3);
        }

        .hero-icon .icon {
          width: 2.5rem;
          height: 2.5rem;
          color: white;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: var(--primary);
          line-height: 1.1;
          margin: 0;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--text-secondary);
          font-weight: 300;
          margin: 0;
          opacity: 0.9;
        }

        .accent-text {
          color: var(--accent);
          font-style: italic;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Contact Grid Section */
        .contact-grid-section {
          padding: 6rem 0;
          background: white;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--light-accent));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-hover);
        }

        .contact-card:hover::before {
          transform: scaleX(1);
        }

        .contact-card.primary {
          border-color: var(--accent);
          background: linear-gradient(135deg, rgba(74, 144, 164, 0.05) 0%, rgba(135, 206, 235, 0.02) 100%);
        }

        .card-icon {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, var(--light-accent), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }

        .contact-card:hover .card-icon {
          transform: scale(1.1);
        }

        .card-icon .icon {
          width: 1.75rem;
          height: 1.75rem;
          color: white;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .card-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .card-action {
          margin-top: auto;
        }

        .btn-contact {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, var(--accent), var(--primary));
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 500;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }

        .btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(74, 144, 164, 0.4);
        }

        .address {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .address strong {
          color: var(--primary);
          font-weight: 600;
        }

        .schedule {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .schedule-item {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .schedule-item strong {
          color: var(--primary);
          font-weight: 600;
        }

        .schedule-item.closed {
          opacity: 0.7;
        }

        /* Map Section */
        .map-section {
          padding: 6rem 0;
          background: var(--light-bg);
        }

        .map-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 300;
          color: var(--primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .map-wrapper {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-hover);
          border: 1px solid var(--border);
        }

        .map-iframe {
          width: 100%;
          height: 450px;
          border: none;
        }

        /* Features Section */
        .features-section {
          padding: 6rem 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-divider {
          width: 4rem;
          height: 2px;
          background: var(--accent);
          margin: 1rem auto 0;
          border-radius: 1px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-item {
          text-align: center;
          padding: 2rem;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
          background: var(--light-bg);
        }

        .feature-icon {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, var(--light-accent), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
        }

        .feature-item:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-icon .icon {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 0.75rem;
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--dark-bg) 0%, var(--primary) 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 300;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, var(--accent) 0%, var(--light-accent) 100%);
          color: white;
          font-weight: 500;
          font-size: 1.1rem;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(74, 144, 164, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(74, 144, 164, 0.4);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2.5rem;
          border: 2px solid var(--light-accent);
          color: var(--light-accent);
          text-decoration: none;
          border-radius: 50px;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: var(--light-accent);
          color: var(--primary);
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 0 4rem;
          }

          .hero-content {
            padding: 0 1rem;
          }

          .contact-grid-section,
          .map-section,
          .features-section,
          .cta-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-methods,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 2rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .contact-methods {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 1.5rem;
          }

          .map-iframe {
            height: 300px;
          }
        }

        /* Smooth animations */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;