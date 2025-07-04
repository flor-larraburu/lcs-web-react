import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Wine, Phone, MapPin, Clock, Waves } from 'lucide-react';

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
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop',
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
            <motion.div variants={fadeInUp} className="hero-icon">
              <Waves className="wave-icon" />
            </motion.div>
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
                desc: 'Capturada en las aguas del Cantábrico, preparada con técnicas tradicionales que realzan su sabor natural.' 
              },
              { 
                name: 'Merluza del Cantábrico', 
                desc: 'Fresca del día, con todo el sabor auténtico del mar del norte, cocida a la perfección.' 
              },
              { 
                name: 'Rodaballo Salvaje', 
                desc: 'Pescado noble de textura única, preparado para destacar su delicadeza y sabor excepcional.' 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="specialty-card"
              >
                <div className="card-content">
                  <h3 className="card-title">{item.name}</h3>
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
              Cada plato cuenta una historia de tradición, calidad y pasión por la gastronomía marinera, 
              donde el respeto por el producto y la técnica se unen para crear experiencias únicas.
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
                    <p><strong>Miércoles a Viernes:</strong> 13:30-17:00, 20:30-24:00</p>
                    <p><strong>Sábado:</strong> 13:30-17:00, 20:30-24:00</p>
                    <p><strong>Domingo:</strong> 13:30-17:00</p>
                    <p><strong>Lunes y Martes:</strong> Cerrado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .restaurant-home {
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
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(248, 250, 252, 0.95) 0%,
            rgba(248, 250, 252, 0.85) 30%,
            rgba(30, 58, 95, 0.4) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .hero-icon {
          opacity: 0.8;
        }

        .wave-icon {
          width: 3rem;
          height: 3rem;
          color: var(--accent);
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 300;
          color: var(--primary);
          line-height: 1.1;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: var(--text-secondary);
          font-weight: 300;
          margin: 0;
          opacity: 0.9;
        }

        .accent-text {
          color: var(--accent);
          font-style: italic;
        }

        .hero-cta {
          margin-top: 1rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
          color: white;
          font-weight: 500;
          font-size: 1.1rem;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(74, 144, 164, 0.3);
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(74, 144, 164, 0.4);
        }

        .btn-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Section Styles */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: var(--primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-title.light {
          color: white;
        }

        .section-divider {
          width: 4rem;
          height: 2px;
          background: var(--accent);
          margin: 0 auto;
          border-radius: 1px;
        }

        .section-divider.light {
          background: var(--light-accent);
        }

        /* Specialties Section */
        .specialties-section {
          padding: 6rem 0;
          background-color: var(--light-bg);
        }

        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .specialty-card {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .specialty-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), var(--light-accent));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .specialty-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
        }

        .specialty-card:hover::before {
          transform: scaleX(1);
        }

        .card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
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
          line-height: 1.7;
          font-size: 1rem;
        }

        /* About Section */
        .about-section {
          padding: 6rem 0;
          background: white;
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-top: 2rem;
        }

        /* Services Section */
        .services-section {
          padding: 6rem 0;
          background: var(--light-bg);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .service-item {
          text-align: center;
          background: white;
          padding: 3rem 2rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }

        .service-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
        }

        .service-icon {
          width: 5rem;
          height: 5rem;
          background: linear-gradient(135deg, var(--light-accent), var(--accent));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }

        .service-item:hover .service-icon {
          transform: scale(1.1);
        }

        .service-icon .icon {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .service-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .service-description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 2rem;
          border: 2px solid var(--accent);
          color: var(--accent);
          text-decoration: none;
          border-radius: 50px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          background: var(--accent);
          color: white;
        }

        /* Contact Section */
        .contact-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--dark-bg) 0%, var(--primary) 100%);
          color: white;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-map {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-map iframe {
          width: 100%;
          height: 400px;
          border: none;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--light-accent);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .info-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: white;
        }

        .info-content p,
        .info-content a {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          font-size: 1rem;
        }

        .info-content a {
          color: var(--light-accent);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .info-content a:hover {
          color: white;
        }

        .schedule p {
          margin-bottom: 0.5rem;
        }

        .schedule strong {
          color: white;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-section {
            height: 90vh;
            min-height: 600px;
          }

          .hero-content {
            padding: 0 1rem;
          }

          .specialties-section,
          .about-section,
          .services-section,
          .contact-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .specialties-grid,
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-item {
            padding: 2rem 1.5rem;
          }

          .specialty-card {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .btn-primary {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .specialties-grid,
          .services-grid {
            grid-template-columns: 1fr;
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

export default HomePage;