import "../styles/_menu.scss";
const Menu = () => {
  const menuSections = [
    {
      title: "Las Entradas de Sabino",
      items: [
        "GILDA DEL NORTE unidad - 4€",
        "ANCHOA EN SALAZÓN SOBRE TOSTADA Y SU EMULSIÓN unidad - 4€",
        "NAVAJA GALLEGA - 20€",
        "ALMEJAS A LA SARTÉN - 37€",
        "BERBERECHO GALLEGO - 22€",
        "OSTRA GALLEGA SUPERIOR unidad - 4.5€",
        "COLA DE GAMBA ALISTADA AL AJILLO - 14€",
        "PULPO ASADO CON PURÉ DE PATATAS - 22€",
      ],
    },
    {
      title: "Pescados Salvajes",
      items: [
        "RODABALLO - 85€/Kg",
        "REY - 140€/Kg",
        "MERO - 75€/Kg",
        "MERLUZA DE PINCHO - 60€/Kg",
        "CABRA DE ALTURA - 66€/Kg",
        "SAN MARTÍN - 60€/Kg",
        "MACHOTE - 66€/Kg",
      ],
    },
    {
      title: "Entrantes de temporada",
      items: [
        "ENSALADA DE BOGAVANTE - 29€",
        "TOMATE DE LA HUERTA CON VENTRESCA, CEBOLLA TIERNA, MORADA Y PIPARRA - 22€",
        "TERNERA CON ESENCIA MEDITERRÁNEA - 15€",
        "MENESTRA DE VERDURAS - 12€",
        "ALCACHOFAS CON GAMBAS Y SALSA DE CRUSTÁCEOS - 16€",
        "PIMIENTO DE PIQUILLO RELLENO DE FRUTOS DEL MAR - 4€",
      ],
    },
    {
      title: "Otras Propuestas",
      items: [
        "HUEVOS CON BOGAVANTE SOBRE PATATAS PAJA - 36€",
        "BACALAO AJOARRIERO O PIL-PIL - 30€",
        "KOKOTXAS DE MERLUZA AL PIL-PIL - 36€",
        "SEPIA SOBRE TERCIOPELO DE HUMMUS - 15€",
        "SALMÓN AHUMADO SOBRE MANTO DE BETABEL Y YOGUR GRIEGO - 15€",
        "SOPA DE PESCADO - 16€",
      ],
    },
    {
      title: "Carnes",
      items: [
        "SOLOMILLO CON SALSA DE NATA Y SETAS, Y PURÉ DE PATATAS - 24€",
        "STEAK TARTAR - 24€",
        "COCHINILLO CONFITADO A LA VAINILLA, SOBRE PURÉ DE MANZANA - 22€",
      ],
    },
    {
      title: "Guarniciones",
      items: [
        "PATATAS FRITAS - 7€",
        "PIMIENTOS ROJOS ASADOS - 7€",
        "VERDURAS SALTEADAS CON SALSA MERY - 7€",
        "SERVICIO DE PAN (por comensal) - 3€",
      ],
    },
  ];

  return (
    <section className="menu-section">
      <div className="menu-container">
        <h1 className="menu-title">Nuestra Carta</h1>
        {menuSections.map((section, index) => (
          <div key={index} className="menu-category">
            <h2 className="category-title">{section.title}</h2>
            <ul className="menu-list">
              {section.items.map((item, idx) => (
                <li key={idx} className="menu-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
