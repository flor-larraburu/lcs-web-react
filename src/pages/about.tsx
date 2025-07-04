import "../styles/_about.scss";
import { useEffect, useState } from "react";
import { ChefHat, Heart, Users, Clock, Star, Award } from 'lucide-react';

interface AboutSection {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface AboutStat {
  number: string;
  label: string;
  icon: React.ElementType;
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
    // Simulamos la carga del JSON (cuando uses i18n, se sustituirá por el hook correspondiente)
    setAboutData({
      aboutTitle: "Nuestra Historia",
      heroSubtitle: "Tradición, pasión y sabor en cada plato",
      sections: [
        {
          title: "Nuestra Filosofía",
          description: "Creemos en la calidad de los ingredientes, en el respeto por las recetas tradicionales y en la magia de compartir una buena comida. Trabajamos con productos frescos y de temporada, seleccionados con el mayor cuidado para ofrecerte una experiencia única en cada bocado.",
          icon: Heart,
          color: "from-rose-400 to-red-500"
        },
        {
          title: "El Equipo",
          description: "Detrás de cada plato hay un equipo apasionado por la cocina y el servicio. Desde nuestros chefs hasta el personal de sala, cada miembro de nuestro equipo comparte el compromiso de hacerte sentir como en casa, ofreciendo un trato cálido y cercano.",
          icon: Users,
          color: "from-blue-400 to-indigo-500"
        },
        {
          title: "Un Espacio Para Disfrutar",
          description: "Nuestro restaurante es más que un lugar para comer; es un punto de encuentro donde los sabores se mezclan con las historias. Un ambiente acogedor, una carta pensada para sorprender y un equipo listo para hacer de tu visita una experiencia inolvidable.",
          icon: Star,
          color: "from-amber-400 to-orange-500"
        },
      ],
      stats: [
        { number: "15+", label: "Años de Experiencia", icon: Clock },
        { number: "500+", label: "Clientes Satisfechos", icon: Users },
        { number: "3", label: "Premios Gastronómicos", icon: Award },
        { number: "100%", label: "Ingredientes Frescos", icon: ChefHat }
      ]
    });
  }, []);

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
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">
            <ChefHat className="icon" />
          </div>
          <h1 className="hero-title">
            {aboutData.aboutTitle}
          </h1>
          <p className="hero-subtitle">
            <span className="accent-text">{aboutData.heroSubtitle}</span>
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {aboutData.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <IconComponent className="icon" />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="sections-container">
        <div className="container">
          <div className="sections-grid">
            {aboutData.sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="section-card">
                  <div className="section-header">
                    <div className="section-icon">
                      <IconComponent className="icon" />
                    </div>
                    <h2 className="section-title">{section.title}</h2>
                  </div>
                  <p className="section-description">{section.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;