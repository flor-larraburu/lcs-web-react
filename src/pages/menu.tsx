import { motion } from 'framer-motion';


const RestaurantMenu = () => {

  const menuSections = [
    {
      title: "Las Entradas de Sabino",
      items: [
        { name: "GILDA DEL NORTE", price: "4€", unit: "unidad" },
        { name: "ANCHOA EN SALAZÓN SOBRE TOSTADA Y SU EMULSIÓN", price: "4€", unit: "unidad" },
        { name: "NAVAJA GALLEGA", price: "20€" },
        { name: "ALMEJAS A LA SARTÉN", price: "37€" },
        { name: "BERBERECHO GALLEGO", price: "22€" },
        { name: "OSTRA GALLEGA SUPERIOR", price: "4.5€", unit: "unidad" },
        { name: "COLA DE GAMBA ALISTADA AL AJILLO", price: "14€" },
        { name: "PULPO ASADO CON PURÉ DE PATATAS", price: "22€" },
      ],
    },
    {
      title: "Pescados Salvajes",
      items: [
        { name: "RODABALLO", price: "85€/Kg" },
        { name: "REY", price: "140€/Kg" },
        { name: "MERO", price: "75€/Kg" },
        { name: "MERLUZA DE PINCHO", price: "60€/Kg" },
        { name: "CABRA DE ALTURA", price: "66€/Kg" },
        { name: "SAN MARTÍN", price: "60€/Kg" },
        { name: "MACHOTE", price: "66€/Kg" },
      ],
    },
    {
      title: "Entrantes de Temporada",
      items: [
        { name: "ENSALADA DE BOGAVANTE", price: "29€" },
        { name: "TOMATE DE LA HUERTA CON VENTRESCA, CEBOLLA TIERNA, MORADA Y PIPARRA", price: "22€" },
        { name: "TERNERA CON ESENCIA MEDITERRÁNEA", price: "15€" },
        { name: "MENESTRA DE VERDURAS", price: "12€" },
        { name: "ALCACHOFAS CON GAMBAS Y SALSA DE CRUSTÁCEOS", price: "16€" },
        { name: "PIMIENTO DE PIQUILLO RELLENO DE FRUTOS DEL MAR", price: "4€" },
      ],
    },
    {
      title: "Otras Propuestas",
      items: [
        { name: "HUEVOS CON BOGAVANTE SOBRE PATATAS PAJA", price: "36€" },
        { name: "BACALAO AJOARRIERO O PIL-PIL", price: "30€" },
        { name: "KOKOTXAS DE MERLUZA AL PIL-PIL", price: "36€" },
        { name: "SEPIA SOBRE TERCIOPELO DE HUMMUS", price: "15€" },
        { name: "SALMÓN AHUMADO SOBRE MANTO DE BETABEL Y YOGUR GRIEGO", price: "15€" },
        { name: "SOPA DE PESCADO", price: "16€" },
      ],
    },
    {
      title: "Carnes",
      items: [
        { name: "SOLOMILLO CON SALSA DE NATA Y SETAS, Y PURÉ DE PATATAS", price: "24€" },
        { name: "STEAK TARTAR", price: "24€" },
        { name: "COCHINILLO CONFITADO A LA VAINILLA, SOBRE PURÉ DE MANZANA", price: "22€" },
      ],
    },
    {
      title: "Guarniciones",
      items: [
        { name: "PATATAS FRITAS", price: "7€" },
        { name: "PIMIENTOS ROJOS ASADOS", price: "7€" },
        { name: "VERDURAS SALTEADAS CON SALSA MERY", price: "7€" },
        { name: "SERVICIO DE PAN (por comensal)", price: "3€" },
      ],
    },
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="restaurant-app">
 

      {/* Menu Section */}
      <motion.section 
        className="menu-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="menu-container">
          <motion.h1 
            className="menu-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              delay: 0.2 
            }}
          >
            Nuestra Carta
          </motion.h1>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menuSections.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex} 
                className="menu-category"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h2 
                  className="category-title"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: sectionIndex * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {section.title}
                </motion.h2>
                
                <motion.div 
                  className="menu-list"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.items.map((item, itemIndex) => (
                    <motion.div 
                      key={itemIndex} 
                      className="menu-item"
                      variants={itemVariants}
                      whileHover={{ 
                        x: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="menu-item-content">
                        <div className="menu-item-name">{item.name}</div>
                        <div className="menu-item-price">
                          {item.price} {item.unit && <span className="unit">{item.unit}</span>}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

 

      <style >{`
     
        /* Menu Section */
        .menu-section {
          padding: 8rem 0 4rem;
          background: var(--light-bg);
          min-height: 100vh;
        }

        .menu-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .menu-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: var(--primary);
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .menu-title::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 4rem;
          height: 2px;
          background: var(--accent);
          border-radius: 1px;
        }

        .menu-category {
          margin-bottom: 4rem;
          background: white;
          border-radius: 16px;
          padding: 3rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .category-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 500;
          color: var(--primary);
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 2rem;
          height: 1px;
          background: var(--light-accent);
        }

        .menu-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .menu-item {
          padding: 1.5rem;
          background: var(--light-bg);
          border-radius: 12px;
          border-left: 4px solid var(--accent);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(74, 144, 164, 0.02) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .menu-item:hover::before {
          opacity: 1;
        }

        .menu-item-content {
          position: relative;
          z-index: 1;
        }

        .menu-item-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .menu-item-price {
          font-weight: 700;
          color: var(--accent);
          font-size: 1.1rem;
        }

        .unit {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        /* Footer Styles */
        .footer {
          background: linear-gradient(135deg, var(--dark-bg) 0%, var(--primary) 100%);
          color: white;
          padding: 3rem 0 1rem;
        }

        .footer__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          align-items: start;
        }

        .footer__text {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
        }

        .footer__link {
          color: var(--light-accent);
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
        }

        .footer__link:hover {
          color: white;
        }

        .footer__social {
          display: flex;
          gap: 1rem;
        }

        .footer__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--light-accent);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer__icon:hover {
          background: var(--light-accent);
          color: var(--primary);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .navbar__mobile-toggle {
            display: block;
          }

    
          .menu-section {
            padding: 6rem 0 3rem;
          }

          .menu-container {
            padding: 0 1rem;
          }

          .menu-category {
            padding: 2rem;
          }

          .menu-list {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .menu-item {
            padding: 1rem;
          }

          .footer__container {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .navbar__container {
            padding: 1rem;
          }

          .menu-title {
            font-size: 2rem;
          }

          .category-title {
            font-size: 1.5rem;
          }

          .menu-category {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RestaurantMenu;