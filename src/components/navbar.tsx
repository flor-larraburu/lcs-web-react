// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/_navbar.scss';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Determinar la página actual para el enlace activo
    const path = window.location.pathname;
    setActiveLink(path);

    window.addEventListener('scroll', handleScroll);
    
    // Evitar scroll cuando el menú móvil está abierto
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { href: '/menu', label: 'Carta' },
    { href: '/wines', label: 'Vinos' },
    { href: '/about', label: 'Nuestra Historia' },
    { href: '/contact', label: 'Contacto' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__brand" onClick={() => setActiveLink('/')}>
          <img src="/images/0001.svg" alt="La casita de sabino" />
          <h2 className='navbar-title'>La Casita de Sabino</h2>
        </a>

        <button 
          className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="menu-icon">
            <Menu size={24} />
          </div>
          <div className="close-icon">
            <X size={24} />
          </div>
        </button>

        <div className={`navbar__links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {menuItems.map((item, index) => (
            <a 
              key={item.href}
              href={item.href} 
              className={`navbar__link ${activeLink === item.href ? 'active' : ''}`}
              onClick={() => {
                setActiveLink(item.href);
                closeMenu();
              }}
              style={{ '--item-index': index } as React.CSSProperties}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;