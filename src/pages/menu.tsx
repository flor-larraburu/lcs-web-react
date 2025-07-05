import { motion } from 'framer-motion';
import '../styles/_menu.scss'; // Importing the SCSS styles

const RestaurantMenu = () => {
  const menuSections = [
    {
      title: "Las entradas de sabino",
      subtitle: "Aperitivos del mar",
      image: "/images/DSC03028.JPG",
      items: [
        { name: "Gilda del norte", price: "4€", unit: "unidad", description: "Anchoa, oliva y guindilla" },
        { name: "Anchoa en salazón sobre tostada y su emulsión", price: "4€", unit: "unidad", description: "Con aceite de oliva virgen extra" },
        { name: "Navaja gallega", price: "20€", description: "Recién capturada de las rías gallegas" },
        { name: "Almejas a la sartén", price: "37€", description: "Con ajo, perejil y vino blanco" },
        { name: "Berberecho gallego", price: "22€", description: "Al natural con limón" },
        { name: "Ostra gallega superior", price: "4.5€", unit: "unidad", description: "Servida con mignonette" },
        { name: "Cola de gamba alistada al ajillo", price: "14€", description: "Con aceite de oliva y guindilla" },
        { name: "Pulpo asado con puré de patatas", price: "22€", description: "Cocido a la gallega con pimentón" },
      ],
    },
    {
      title: "Pescados salvajes",
      subtitle: "Capturas del día",
      image: "/images/DSC03056.JPG",
      items: [
        { name: "Rodaballo", price: "85€/kg", description: "Pescado plano de alta calidad" },
        { name: "Rey", price: "140€/kg", description: "El más preciado de nuestros mares" },
        { name: "Mero", price: "75€/kg", description: "Carne firme y sabrosa" },
        { name: "Merluza de pincho", price: "60€/kg", description: "Capturada artesanalmente" },
        { name: "Cabra de altura", price: "66€/kg", description: "Pescado de aguas profundas" },
        { name: "San martín", price: "60€/kg", description: "Sabor intenso del Atlántico" },
        { name: "Machote", price: "66€/kg", description: "Textura perfecta para la plancha" },
      ],
    },
    {
      title: "Entrantes de temporada",
      subtitle: "Sabores estacionales",
      image: "/images/DSC03077.JPG",
      items: [
        { name: "Ensalada de bogavante", price: "29€", description: "Con aguacate y vinagreta cítrica" },
        { name: "Tomate de la huerta con ventresca, cebolla tierna, morada y piparra", price: "22€", description: "Ingredientes de temporada" },
        { name: "Ternera con esencia mediterránea", price: "15€", description: "Marinada con hierbas aromáticas" },
        { name: "Menestra de verduras", price: "12€", description: "Verduras frescas de la huerta" },
        { name: "Alcachofas con gambas y salsa de crustáceos", price: "16€", description: "Plato tradicional renovado" },
        { name: "Pimiento de piquillo relleno de frutos del mar", price: "4€", description: "Relleno de mariscos frescos" },
      ],
    },
    {
      title: "Otras propuestas",
      subtitle: "Especialidades de la casa",
      image: "/images/DSC03053.JPG",
      items: [
        { name: "Huevos con bogavante sobre patatas paja", price: "36€", description: "Huevos ecológicos con marisco" },
        { name: "Bacalao ajoarriero o pil-pil", price: "30€", description: "Preparado al estilo tradicional" },
        { name: "Kokotxas de merluza al pil-pil", price: "36€", description: "La parte más exquisita del pescado" },
        { name: "Sepia sobre terciopelo de hummus", price: "15€", description: "Fusión mediterránea" },
        { name: "Salmón ahumado sobre manto de betabel y yogur griego", price: "15€", description: "Ahumado en casa" },
        { name: "Sopa de pescado", price: "16€", description: "Receta tradicional de la casa" },
      ],
    },
    {
      title: "Carnes",
      subtitle: "Selección terrestre",
      image: "/images/DSC03043.JPG",
      items: [
        { name: "Solomillo con salsa de nata y setas, y puré de patatas", price: "24€", description: "Carne premium con guarnición" },
        { name: "Steak tartar", price: "24€", description: "Preparado en mesa" },
        { name: "Cochinillo confitado a la vainilla, sobre puré de manzana", price: "22€", description: "Cocción lenta y sabor único" },
      ],
    },
    {
      title: "Guarniciones",
      subtitle: "Acompañamientos",
      image: "/images/DSC03036.JPG",
      items: [
        { name: "Patatas fritas", price: "7€", description: "Cortadas artesanalmente" },
        { name: "Pimientos rojos asados", price: "7€", description: "Asados al horno de leña" },
        { name: "Verduras salteadas con salsa mery", price: "7€", description: "Verduras frescas del mercado" },
        { name: "Servicio de pan", price: "3€", unit: "por comensal", description: "Pan artesanal de la casa" },
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

  const menuItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    }
  };

  return (
    <div className="restaurant-app">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Sabores del Mar
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Pescado fresco y mariscos de las mejores capturas
          </motion.p>
        </div>
      </motion.section>

      {/* Menu Section */}
      <motion.section 
        className="menu-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="menu-container">
          <motion.h2 
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
          </motion.h2>
          
          <motion.div
            className="menu-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menuSections.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex} 
                className="category-card"
                variants={itemVariants}
                style={{
                  backgroundImage: `url(${section.image})`
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="category-overlay"></div>
                <div className="menu-content">
                  <motion.div 
                    className="category-header"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: sectionIndex * 0.1,
                      duration: 0.8
                    }}
                  >
                    <h3 className="category-title">{section.title}</h3>
                    <p className="category-subtitle">{section.subtitle}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="menu-items-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {section.items.map((item, itemIndex) => (
                      <motion.div 
                        key={itemIndex} 
                        className="menu-item"
                        variants={menuItemVariants}
                        whileHover={{ 
                          y: -5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <div className="menu-item-header">
                          <div className="menu-item-name">{item.name}</div>
                          <div className="menu-item-price">
                            {item.price}
                            {item.unit && <span className="menu-item-unit">{item.unit}</span>}
                          </div>
                        </div>
                        {item.description && (
                          <div className="menu-item-description">{item.description}</div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default RestaurantMenu;