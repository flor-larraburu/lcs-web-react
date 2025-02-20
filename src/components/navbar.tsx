// Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/_navbar.scss';


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__brand">
          <img  src="/images/0001.svg" alt="La casita de sabino" />
          <h2 className='navbar-title'>La Casita de Sabino</h2 >
        </a>

        <button 
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar__links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <a href="/menu" className="navbar__link">
            Carta
          </a>
          <a href="/wines" className="navbar__link">
            Vinos
          </a>
          <a href="/about" className="navbar__link">
            Nuestra Historia
          </a>
          <a href="/contact" className="navbar__link">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;