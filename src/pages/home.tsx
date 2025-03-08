import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Wine } from 'phosphor-react'; // Reemplazamos Tabler por Phosphor
import '../styles/main.scss';

// Custom SEO component for React 19 compatibility
const SEOHead: React.FC = () => {
  React.useEffect(() => {
    // Set page title
    document.title = "Restaurante - Gastronomía marinera del Cantábrico en Valencia";
    
    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      metaDesc.content = "Disfruta de la auténtica gastronomía marinera del Cantábrico en Valencia. Especialidad en lubina salvaje, merluza del Cantábrico y rodaballo.";
    } else {
      const metaElement = document.createElement('meta');
      metaElement.name = "description";
      metaElement.content = "Disfruta de la auténtica gastronomía marinera del Cantábrico en Valencia. Especialidad en lubina salvaje, merluza del Cantábrico y rodaballo.";
      document.head.appendChild(metaElement);
    }
    
    // Add other meta tags with proper typing
    const createOrUpdateMeta = (name: string, content: string) => {
      const element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (element) {
        element.content = content;
      } else {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };
    
    createOrUpdateMeta('keywords', 'restaurante, Valencia, pescado, marisco, gastronomía cantábrica, lubina salvaje, merluza del Cantábrico');
    
    // Canonical link with proper typing
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://www.turestaurante.com';
    
    // Open Graph tags with proper typing
    const ogTags = {
      'og:title': 'Restaurante - Gastronomía marinera del Cantábrico en Valencia',
      'og:description': 'Disfruta de la auténtica gastronomía marinera del Cantábrico en Valencia.',
      'og:image': '/images/DSC02856.JPG',
      'og:url': 'https://www.turestaurante.com',
      'og:type': 'website'
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });
    
    // Twitter card with proper typing
    let twitterCard = document.querySelector('meta[name="twitter:card"]') as HTMLMetaElement;
    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.name = 'twitter:card';
      document.head.appendChild(twitterCard);
    }
    twitterCard.content = 'summary_large_image';
    
  }, []);
  
  return null;
};

interface CustomIconProps {
  children: React.ReactNode;
  className?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ children, className = "" }) => (
  <div className={`w-16 h-16 mx-auto flex items-center justify-center ${className}`}>
    {children}
  </div>
);

// Nuevos componentes de iconos más elegantes usando Phosphor
const BookIcon = () => (
  <BookOpen size={48} weight="thin" className="text-accent" />
);

const GlassIcon = () => (
  <Wine size={48} weight="thin" className="text-accent" />
);

const images = [
  '/images/DSC02856.JPG',
  '/images/DSC02849.JPG',
  '/images/DSC02856.JPG',
];

const HomePage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Controla la dirección del slide

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Siempre desliza hacia la derecha
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEOHead />

      <header className="hero-section">
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="hero-section__background absolute w-full h-full"
            >
              <img src={images[index]} alt="Hero" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contenido */}
        <div className="hero-section__content">
          <h1 className="hero-section__title">La esencia del Cantábrico a orillas del mediterraneo</h1>
          <p className="hero-section__subtitle">Gastronomía marinera de alta calidad en Valencia</p>
          <button className="btn-primary"><a href="tel:+34963743999" color='white'>Reservar Mesa</a></button>
        </div>
      </header>

      {/* Especialidades Section */}
      <section className="featured-section">
        <div className="container mx-auto px-4">
          <h2 className="featured-section__title">Especialidades</h2>
          <div className="featured-section__content">
            {['Lubina Salvaje', 'Merluza del Cantábrico', 'Rodaballo Salvaje'].map((item, index) => (
              <div key={index} className="featured-section__item">
                <h3 className="featured-section__item-title">{item}</h3>
                <p className="featured-section__text">
                  Pescados frescos del día, directos del Cantábrico a su mesa.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section className="featured-section">
        <div className="container mx-auto px-4">
          <div className="featured-section__content">
            <h2 className="featured-section__title">Sobre Nosotros</h2>
            <p className="featured-section__text">
              Tradición marinera y sabores auténticos del Cantábrico en el corazón de Valencia.
            </p>
            <button className="btn-primary">Conócenos</button>
          </div>
        </div>
      </section>
    {/* Carta y Vinos Section with Custom SVG Icons */}
    <section className="info-section">
        <div className="container mx-auto px-4">
          <div className="info-section__grid">
            <div className="info-section__item">
              <CustomIcon>
                <BookIcon />
              </CustomIcon>
              <h2 className="info-section__title">Carta</h2>
              <p className="info-section__text">Descubre nuestra selección de pescados y mariscos frescos.</p>
              <button className="btn-primary"><a href="/menu">Ver Carta</a></button>
            </div>
            <div className="info-section__item">
              <CustomIcon>
                <GlassIcon />
              </CustomIcon>
              <h2 className="info-section__title">Vinos</h2>
              <p className="info-section__text">Explora nuestra bodega de vinos selectos.</p>
              <button className="btn-primary"><a href="/wines">Ver Vinos</a></button>
            </div>
          </div>
        </div>
      </section>
            
      {/* Contacto Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="flex-container">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.1877672819205!2d-0.37422102352755604!3d39.4650866130083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048ca767bba71%3A0xb1bd43670a719aad!2sRestaurante!5e0!3m2!1ses!2ses!4v1738696050871!5m2!1ses!2ses"
                loading="lazy"
                title="Ubicación del restaurante"
                className="map"
              />
            </div>
            <div className="text-container">
              <h3 className="sub-title">Dónde estamos</h3>
              <address className="contact-info">
                <p><strong>Dirección:</strong> Calle de Gregori Mayans, 5</p>
                <p>L'Eixample, 46005 València, Valencia</p>
                <p>
                  <strong>Teléfono:</strong>
                  <a href="tel:+34963743999" className="phone-link">+34 963 74 39 99</a>
                </p>
              </address>
              <h3 className="sub-title">Horario</h3>
              <ul className="schedule">
                <li><strong>Sábado:</strong> 13:30–17:00, 20:30–24:00</li>
                <li><strong>Domingo:</strong> 13:30–17:00</li>
                <li><strong>Lunes:</strong> Cerrado</li>
                <li><strong>Martes:</strong> Cerrado</li>
                <li><strong>Miércoles:</strong> 13:30–17:00</li>
                <li><strong>Jueves:</strong> 13:30–17:00, 20:30–24:00</li>
                <li><strong>Viernes:</strong> 13:30–17:00, 20:30–24:00</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;