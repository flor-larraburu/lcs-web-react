import { motion } from 'framer-motion';

const RestaurantMenu = () => {

const menuSections = [
  {
    title: "Las entradas de sabino",
    items: [
      { name: "Gilda del norte", price: "4€", unit: "unidad" },
      { name: "Anchoa en salazón sobre tostada y su emulsión", price: "4€", unit: "unidad" },
      { name: "Navaja gallega", price: "20€" },
      { name: "Almejas a la sartén", price: "37€" },
      { name: "Berberecho gallego", price: "22€" },
      { name: "Ostra gallega superior", price: "4.5€", unit: "unidad" },
      { name: "Cola de gamba alistada al ajillo", price: "14€" },
      { name: "Pulpo asado con puré de patatas", price: "22€" },
    ],
  },
  {
    title: "Pescados salvajes",
    items: [
      { name: "Rodaballo", price: "85€/kg" },
      { name: "Rey", price: "140€/kg" },
      { name: "Mero", price: "75€/kg" },
      { name: "Merluza de pincho", price: "60€/kg" },
      { name: "Cabra de altura", price: "66€/kg" },
      { name: "San martín", price: "60€/kg" },
      { name: "Machote", price: "66€/kg" },
    ],
  },
  {
    title: "Entrantes de temporada",
    items: [
      { name: "Ensalada de bogavante", price: "29€" },
      { name: "Tomate de la huerta con ventresca, cebolla tierna, morada y piparra", price: "22€" },
      { name: "Ternera con esencia mediterránea", price: "15€" },
      { name: "Menestra de verduras", price: "12€" },
      { name: "Alcachofas con gambas y salsa de crustáceos", price: "16€" },
      { name: "Pimiento de piquillo relleno de frutos del mar", price: "4€" },
    ],
  },
  {
    title: "Otras propuestas",
    items: [
      { name: "Huevos con bogavante sobre patatas paja", price: "36€" },
      { name: "Bacalao ajoarriero o pil-pil", price: "30€" },
      { name: "Kokotxas de merluza al pil-pil", price: "36€" },
      { name: "Sepia sobre terciopelo de hummus", price: "15€" },
      { name: "Salmón ahumado sobre manto de betabel y yogur griego", price: "15€" },
      { name: "Sopa de pescado", price: "16€" },
    ],
  },
  {
    title: "Carnes",
    items: [
      { name: "Solomillo con salsa de nata y setas, y puré de patatas", price: "24€" },
      { name: "Steak tartar", price: "24€" },
      { name: "Cochinillo confitado a la vainilla, sobre puré de manzana", price: "22€" },
    ],
  },
  {
    title: "Guarniciones",
    items: [
      { name: "Patatas fritas", price: "7€" },
      { name: "Pimientos rojos asados", price: "7€" },
      { name: "Verduras salteadas con salsa mery", price: "7€" },
      { name: "Servicio de pan (por comensal)", price: "3€" },
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
            Nuestra carta
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

      <style>{`
  

        /* Menu Section */
        .menu-section {
          padding: 8rem 0 4rem;
          background: var(--light-bg);
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
          color: var(--text-primary);
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
          font-weight: 400;
          color: var(--primary);
          margin-bottom: 2rem;
          text-align: center;
          position: relative;
          letter-spacing: 0.05em;
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
          font-weight: 300;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(39, 174, 96, 0.05) 100%);
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
          font-weight: 500;
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
          letter-spacing: 0.03em;
        }

        .menu-item-price {
          font-weight: 700;
          color: var(--accent);
          font-size: 1.1rem;
        }

        .unit {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-secondary);
          margin-left: 0.3rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .menu-list {
            grid-template-columns: 1fr;
          }
          .menu-category {
            padding: 2rem;
          }
          .menu-title {
            font-size: 2.5rem;
          }
          .category-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RestaurantMenu;
