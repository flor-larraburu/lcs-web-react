import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Heart, Users, Clock, Star, Award, MapPin, Phone } from 'lucide-react';
import '../styles/pages/_about.scss';

interface AboutSection {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface AboutStat {
  number: string;
  label: string;
  icon: React.ElementType;
  percentage: number;
}

interface AboutData {
  aboutTitle: string;
  heroSubtitle: string;
  sections: AboutSection[];
  stats: AboutStat[];
}

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    // Simulamos la carga del JSON
    setAboutData({
      aboutTitle: "Nuestra Historia",
      heroSubtitle: "Tradición marinera, pasión y sabor en cada plato",
      sections: [
        {
          title: "Nuestra Filosofía Marinera",
          description: "Creemos en la excelencia de los productos del mar, en el respeto por las recetas tradicionales del Cantábrico y en la magia de compartir una buena comida. Trabajamos con pescados frescos y mariscos de primera calidad, seleccionados diariamente para ofrecerte la auténtica esencia del mar en cada bocado.",
          icon: Heart,
        },
        {
          title: "El Equipo",
          description: "Detrás de cada plato hay un equipo comprometido con la tradición culinaria marinera. Nuestros chefs combinan técnicas ancestrales con innovación, mientras nuestro personal de sala te ofrece un servicio cálido y profesional, creando un ambiente donde te sientas como en casa frente al mar.",
          icon: Users,
        },
        {
          title: "Tradición del Cantábrico",
          description: "Traemos la esencia del mar Cantábrico a Valencia. Cada plato cuenta una historia de tradición pesquera, calidad y pasión por la gastronomía marinera, donde el respeto por el producto y las técnicas tradicionales se unen para crear experiencias gastronómicas únicas e inolvidables.",
          icon: Star,
        },
      ],
      stats: [
        { number: "15+", label: "Años de experiencia", icon: Clock, percentage: 85 },
        { number: "100%", label: "Pescado fresco diario", icon: ChefHat, percentage: 100 },
        { number: "4.8★", label: "Valoración promedio", icon: Award, percentage: 96 }
      ]
    });
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

  const handleVisitUsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Si estamos en la misma app, navegar a la sección de contacto del home
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si no está disponible, navegar al home y luego a la sección
      window.location.href = '/#contact';
    }
  };

  if (!aboutData) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p className="loading-text">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant-home">
      {/* Simple Header */}
      <motion.section 
        className="about-simple-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="simple-header-content"
          >
            <motion.h1 variants={fadeInUp} className="simple-title">
              {aboutData.aboutTitle}
            </motion.h1>
            <motion.p variants={fadeInUp} className="simple-subtitle">
              {aboutData.heroSubtitle}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section con Círculos */}
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            className="stats-grid about-stats-grid"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutData.stats.map((stat, index) => {
              return (
                <motion.div key={index} className="stat-item about-stat-circle" variants={scaleIn}>
                  <div className="stat-circle-container">
                    <svg className="stat-circle" width="160" height="160" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="var(--border)"
                        strokeWidth="6"
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 50}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                        animate={{ 
                          strokeDashoffset: 2 * Math.PI * 50 * (1 - stat.percentage / 100)
                        }}
                        transition={{ duration: 2, delay: index * 0.3, ease: "easeOut" }}
                        style={{ transformOrigin: "60px 60px", transform: "rotate(-90deg)" }}
                      />
                    </svg>
                    <div className="stat-circle-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label-inner">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* About Sections - Horizontal Layout */}
      <motion.section 
        className="specialties-section about-sections"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            className="section-header"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="section-title">
              La esencia del <span className="accent-text">Cantábrico</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="section-divider" />
          </motion.div>
          
          <motion.div 
            className="about-grid-rectangular"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {aboutData.sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={index}
                  className="about-card-rectangular"
                  variants={scaleIn}
                >
                  <div className="card-icon-section">
                    <div className="about-card-icon">
                      <IconComponent className="icon" />
                    </div>
                  </div>
                  <div className="card-content-section">
                    <h3 className="card-title">{section.title}</h3>
                    <p className="card-description">{section.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="services-section about-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            className="services-grid about-cta-grid"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={scaleIn} className="service-item">
              <div className="service-icon">
                <Phone className="icon" />
              </div>
              <h3 className="service-title">Reserva tu Mesa</h3>
              <p className="service-description">
                Ven a disfrutar de la auténtica gastronomía marinera del Cantábrico 
                en el corazón de Valencia. Te esperamos para una experiencia única.
              </p>
              <a href="tel:+34963743999" className="service-link">
                Llamar Ahora
              </a>
            </motion.div>
            
            <motion.div variants={scaleIn} className="service-item">
              <div className="service-icon">
                <MapPin className="icon" />
              </div>
              <h3 className="service-title">Visítanos</h3>
              <p className="service-description">
                Estamos ubicados en el centro de Valencia, en un espacio acogedor 
                donde la tradición marinera cobra vida en cada detalle.
              </p>
              <a href="#contact" onClick={handleVisitUsClick} className="service-link">
                Cómo Llegar
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;