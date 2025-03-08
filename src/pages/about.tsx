import "../styles/_about.scss";
import { useEffect, useState } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    // Simulamos la carga del JSON (cuando uses i18n, se sustituirá por el hook correspondiente)
    setAboutData({
      aboutTitle: "Nuestra Historia",
      sections: [
        {
          title: "Nuestra Filosofía",
          description:
            "Creemos en la calidad de los ingredientes, en el respeto por las recetas tradicionales y en la magia de compartir una buena comida. Trabajamos con productos frescos y de temporada, seleccionados con el mayor cuidado para ofrecerte una experiencia única en cada bocado.",
        },
        {
          title: "El Equipo",
          description:
            "Detrás de cada plato hay un equipo apasionado por la cocina y el servicio. Desde nuestros chefs hasta el personal de sala, cada miembro de nuestro equipo comparte el compromiso de hacerte sentir como en casa, ofreciendo un trato cálido y cercano.",
        },
        {
          title: "Un Espacio Para Disfrutar",
          description:
            "Nuestro restaurante es más que un lugar para comer; es un punto de encuentro donde los sabores se mezclan con las historias. Un ambiente acogedor, una carta pensada para sorprender y un equipo listo para hacer de tu visita una experiencia inolvidable.",
        },
      ],
    });
  }, []);

  if (!aboutData) return <p>Cargando...</p>;

  return (
    <section className="about-section">
      <div className="page-container">
        <h1 className="about-title">{aboutData.aboutTitle}</h1>
        {aboutData.sections.map((section: any, index: number) => (
          <div key={index} className="about-category">
            <h2 className="category-title">{section.title}</h2>
            <p className="category-description">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
