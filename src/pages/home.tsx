// ============================================
// 🆓 GOOGLE ANALYTICS - COMPLETAMENTE GRATIS
// ============================================

// Google Analytics es 100% gratuito para sitios web normales
// Solo se paga Analytics 360 (para empresas muy grandes, +10M visitas/mes)

// ============================================
// 🚀 SEO COMPLETO + ANALYTICS
// ============================================

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Phone, MapPin, Clock, Star, Users, Award } from 'lucide-react';
import '../styles/main.scss';

// Configuración SEO y Analytics
const GA_TRACKING_ID = 'G-YFLLGX0KXT'; // REEMPLAZA CON TU ID (GRATIS)

// Componente SEO COMPLETO
const SEOHead = () => {
  React.useEffect(() => {
    // ============================================
    // 📊 GOOGLE ANALYTICS (GRATIS)
    // ============================================
    if (!window.gtag) {
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(gtagScript);

      const gtagConfig = document.createElement('script');
      gtagConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_title: 'Restaurante Marinero Valencia - Cantábrico',
          page_location: window.location.href,
          custom_map: {
            'business_type': 'restaurant',
            'cuisine': 'marinera_cantabrico',
            'location': 'valencia_spain'
          }
        });
      `;
      document.head.appendChild(gtagConfig);
    }

    // ============================================
    // 🎯 SEO META TAGS OPTIMIZADOS
    // ============================================
    
    // Título optimizado para SEO
    document.title = "Restaurante Marinero Valencia | Especialidad Cantábrico | Lubina, Merluza, Rodaballo";
    
    // Meta description optimizada
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc) {
      metaDesc.content = "🐟 Restaurante marinero en Valencia especializado en pescado fresco del Cantábrico. Lubina salvaje, merluza y rodaballo. Reservas: 963 74 39 99. Gregori Mayans, 5";
    } else {
      const metaElement = document.createElement('meta');
      metaElement.name = "description";
      metaElement.content = "🐟 Restaurante marinero en Valencia especializado en pescado fresco del Cantábrico. Lubina salvaje, merluza y rodaballo. Reservas: 963 74 39 99. Gregori Mayans, 5";
      document.head.appendChild(metaElement);
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!metaKeywords) {
      const keywordsElement = document.createElement('meta');
      keywordsElement.name = "keywords";
      keywordsElement.content = "restaurante valencia, pescado fresco, cantábrico, lubina salvaje, merluza, rodaballo, mariscos valencia, restaurante marinero, gregori mayans, eixample valencia";
      document.head.appendChild(keywordsElement);
    }

    // Open Graph para redes sociales
    const ogTags = [
      { property: 'og:title', content: 'Restaurante Marinero Valencia - Especialidad Cantábrico' },
      { property: 'og:description', content: 'Pescado fresco del Cantábrico en Valencia. Lubina salvaje, merluza y rodaballo. Reservas: 963 74 39 99' },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: `${window.location.origin}/images/DSC02849.JPG` },
      { property: 'og:locale', content: 'es_ES' },
      { property: 'og:site_name', content: 'Restaurante Marinero Valencia' },
      { property: 'business:contact_data:street_address', content: 'Calle de Gregori Mayans, 5' },
      { property: 'business:contact_data:locality', content: 'Valencia' },
      { property: 'business:contact_data:postal_code', content: '46005' },
      { property: 'business:contact_data:country_name', content: 'España' },
      { property: 'business:contact_data:phone_number', content: '+34963743999' }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Twitter Cards
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Restaurante Marinero Valencia - Especialidad Cantábrico' },
      { name: 'twitter:description', content: 'Pescado fresco del Cantábrico en Valencia. Lubina salvaje, merluza y rodaballo.' },
      { name: 'twitter:image', content: `${window.location.origin}/images/DSC02849.JPG` }
    ];

    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = tag.name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Schema.org - Datos estructurados para Google
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Restaurante Marinero Valencia",
      "description": "Restaurante especializado en pescado fresco del Cantábrico en Valencia",
      "image": [
        `${window.location.origin}/images/DSC02849.JPG`,
        `${window.location.origin}/images/DSC02856.JPG`
      ],
      "url": window.location.href,
      "telephone": "+34963743999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle de Gregori Mayans, 5",
        "addressLocality": "Valencia",
        "addressRegion": "Comunidad Valenciana",
        "postalCode": "46005",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.4650866,
        "longitude": -0.3742210
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
          "opens": "13:30",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
          "opens": "20:30",
          "closes": "24:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "13:30",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "20:30",
          "closes": "24:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "13:30",
          "closes": "17:00"
        }
      ],
      "servesCuisine": ["Seafood", "Mediterranean", "Spanish"],
      "priceRange": "€€",
      "acceptsReservations": true,
      "hasMenu": {
        "@type": "Menu",
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Especialidades del Mar",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Lubina Salvaje",
                "description": "Capturada en las aguas del Cantábrico",
                "offers": {
                  "@type": "Offer",
                  "price": "28",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Merluza del Cantábrico",
                "description": "Fresca del día",
                "offers": {
                  "@type": "Offer",
                  "price": "32",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Rodaballo Salvaje",
                "description": "Pescado noble de textura única",
                "offers": {
                  "@type": "Offer",
                  "price": "45",
                  "priceCurrency": "EUR"
                }
              }
            ]
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "500"
      }
    });
    
    // Verificar si ya existe el schema antes de añadirlo
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (!existingSchema) {
      document.head.appendChild(schemaScript);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = window.location.href;

    // Robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  }, []);
  
  return null;
};

// Función para trackear eventos SEO
const trackSEOEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'seo_engagement',
      event_label: 'user_interaction',
      custom_parameter_1: 'restaurante_valencia',
      custom_parameter_2: 'marinero_cantabrico',
      ...parameters
    });
  }
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

  // SEO: Trackear interacciones importantes
  const handleReserveClick = () => {
    trackSEOEvent('reserve_click', {
      event_category: 'conversion',
      event_label: 'phone_reservation_primary',
      value: 1,
      business_goal: 'reservation'
    });
  };

  const handleMenuClick = () => {
    trackSEOEvent('menu_navigation', {
      event_category: 'navigation',
      event_label: 'menu_exploration',
      user_intent: 'browse_menu'
    });
  };

  const handlePhoneClick = () => {
    trackSEOEvent('contact_phone', {
      event_category: 'contact',
      event_label: 'direct_phone_call',
      contact_method: 'phone'
    });
  };

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
      
      {/* Hero Section - SEO Optimizado */}
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
              alt="Restaurante marinero Valencia especialidad pescado Cantábrico" 
              className="hero-image"
              loading="eager"
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
              <a 
                href="tel:+34963743999" 
                className="btn-primary"
                onClick={handleReserveClick}
                aria-label="Llamar para reservar mesa en restaurante marinero Valencia"
              >
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
              <Star className="stat-icon" aria-hidden="true" />
              <h3 className="stat-number">4.8</h3>
              <p className="stat-label">Valoración</p>
            </motion.div>
            <motion.div variants={scaleIn} className="stat-item">
              <Users className="stat-icon" aria-hidden="true" />
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Clientes satisfechos</p>
            </motion.div>
            <motion.div variants={scaleIn} className="stat-item">
              <Award className="stat-icon" aria-hidden="true" />
              <h3 className="stat-number">15</h3>
              <p className="stat-label">Años de experiencia</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Especialidades Section - SEO Keywords */}
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
                name: 'Lubina Salvaje del Cantábrico', 
                desc: 'Capturada en las aguas del Cantábrico, preparada con técnicas tradicionales que realzan su sabor natural.',
                keywords: 'lubina salvaje valencia cantábrico'
              },
              { 
                name: 'Merluza Fresca del Cantábrico', 
                desc: 'Fresca del día, con todo el sabor auténtico del mar del norte, cocida a la perfección.',
                keywords: 'merluza fresca cantábrico valencia'
              },
              { 
                name: 'Rodaballo Salvaje Premium', 
                desc: 'Pescado noble de textura única, preparado para destacar su delicadeza y sabor excepcional.',
                keywords: 'rodaballo salvaje valencia premium'
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
            <motion.div variants={fadeInUp} className="section-divider" />
            <motion.p variants={fadeInUp} className="about-text">
              Traemos los sabores auténticos del Cantábrico al corazón de Valencia. 
              Cada plato cuenta una historia de tradición, calidad y pasión por la gastronomía marinera española.
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
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              Nuestra Carta Marinera
            </motion.h2>
            <motion.div variants={fadeInUp} className="section-divider" />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
            className="services-grid"
          >
            <motion.div variants={scaleIn} className="service-item">
              <div className="service-icon">
                <BookOpen className="icon" aria-hidden="true" />
              </div>
              <h3 className="service-title">Carta de Pescados y Mariscos</h3>
              <p className="service-description">
                Descubre nuestra cuidada selección de pescados y mariscos frescos del Cantábrico, 
                preparados con técnicas que respetan y realzan el sabor del mar.
              </p>
              <a 
                href="/menu" 
                className="service-link"
                onClick={handleMenuClick}
                aria-label="Ver carta completa de pescados y mariscos"
              >
                Explorar Carta
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - SEO Local */}
      <section className="contact-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              Visítanos en Valencia
            </motion.h2>
            <motion.div variants={fadeInUp} className="section-divider" />
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
                title="Ubicación restaurante marinero Valencia Gregori Mayans 5"
                aria-label="Mapa de ubicación del restaurante en Valencia"
              />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="contact-info">
              <div className="info-item">
                <MapPin className="info-icon" aria-hidden="true" />
                <div className="info-content">
                  <h3>Dirección en Valencia</h3>
                  <address>
                    Calle de Gregori Mayans, 5<br />
                    L'Eixample, 46005 València<br />
                    Comunidad Valenciana, España
                  </address>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" aria-hidden="true" />
                <div className="info-content">
                  <h3>Reservas y Contacto</h3>
                  <a 
                    href="tel:+34963743999"
                    onClick={handlePhoneClick}
                    aria-label="Llamar para reservas al 963 74 39 99"
                  >
                    +34 963 74 39 99
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="info-icon" aria-hidden="true" />
                <div className="info-content">
                  <h3>Horario de Apertura</h3>
                  <div className="schedule">
                    <p><strong>Miércoles-Viernes:</strong> 13:30-17:00, 20:30-24:00</p>
                    <p><strong>Sábado:</strong> 13:30-17:00, 20:30-24:00</p>
                    <p><strong>Domingo:</strong> 13:30-17:00</p>
                    <p><strong>Lunes-Martes:</strong> Cerrado</p>
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

// Tipos para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default HomePage;