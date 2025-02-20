import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/main.scss';

interface CustomIconProps {
  children: React.ReactNode;
  className?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ children, className = "" }) => (
  <div className={`w-16 h-16 mx-auto flex items-center justify-center ${className}`}>
    {children}
  </div>
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
          <h1 className="hero-section__title">Sabor del Cantábrico</h1>
          <p className="hero-section__subtitle">Gastronomía marinera de alta calidad en Valencia</p>
          <button className="btn-primary">Reservar Mesa</button>
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

      {/* Carta y Vinos Section */}
      <section className="info-section">
        <div className="container mx-auto px-4">
          <div className="info-section__grid">
            <div className="info-section__item">
              <CustomIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </CustomIcon>
              <h2 className="info-section__title">Carta</h2>
              <p className="info-section__text">Descubre nuestra selección de pescados y mariscos frescos.</p>
              <button className="btn-primary">Ver Carta</button>
            </div>
            <div className="info-section__item">
              <CustomIcon>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 22h8l-4-4-4 4zm4-14V8M6 3h12l-3 5h-6l-3-5z" />
                </svg>
              </CustomIcon>
              <h2 className="info-section__title">Vinos</h2>
              <p className="info-section__text">Explora nuestra bodega de vinos selectos.</p>
              <button className="btn-primary">Ver Vinos</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pedidos Section */}
      <section className="featured-section">
        <div className="container mx-auto px-4">
          <div className="featured-section__content">
            <CustomIcon>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </CustomIcon>
            <h2 className="featured-section__title">Pedidos para Recoger</h2>
            <div className="featured-section__grid">
              {[
                { icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3z", text: "Realiza tu pedido online" },
                { icon: "M12 6v12m6-6h-12", text: "Elige tu hora de recogida" },
                { icon: "M21 7l-4-4M3 17l4 4", text: "Recoge tu pedido" }
              ].map((step, index) => (
                <div key={index} className="featured-section__item">
                  <CustomIcon className="w-12 h-12">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}/>
                    </svg>
                  </CustomIcon>
                  <p className="featured-section__text">{step.text}</p>
                </div>
              ))}
            </div>
            <button className="btn-primary">Hacer Pedido</button>
          </div>
        </div>
      </section>

      <section className="contact-section">
  <div className="container">
    <h2>Contacto</h2>
    <div className="flex-container">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.1877672819205!2d-0.37422102352755604!3d39.4650866130083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048ca767bba71%3A0xb1bd43670a719aad!2sRestaurante!5e0!3m2!1ses!2ses!4v1738696050871!5m2!1ses!2ses"
          loading="lazy"
          title="Ubicación del restaurante"
        />
      </div>
      <div className="text-container">
        <address>
          <p>Calle del Mar, 123</p>
          <p>46003 Valencia, España</p>
          <p>
            Teléfono: 
            <a href="tel:+34963743999"> +34 963 74 39 99</a>
          </p>
        </address>
      </div>
    </div>
  </div>
</section>



      {/* <ReservationForm /> 
      podrias hacer el  ReservationForm del home como un componente a parte que lo que haga es pedir nombre correo fecha hora y numero de telefo y personas y envie un correo al xxx@xxx.com y poniendo en el cuerpo esos datos y que aparezca un popup como que su reserva será completada cuando reciba confirmacion por movil o correo
      */}
    </>
  );
};

export default HomePage;