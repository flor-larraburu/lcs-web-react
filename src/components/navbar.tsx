import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/menu', label: 'Carta' },
    { href: '/wines', label: 'Vinos' },
    { href: '/about', label: 'Nuestra Historia' },
    { href: '/contact', label: 'Contacto' }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="navbar__container">
        <motion.a href="/" className="navbar__brand" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
<div className="brand-logo">
  <div className="logo-circle">
    <img 
      src="/images/0001.svg" 
      alt="Logo" 
      className="logo-image" 
    />
  </div>
</div>


          <h2 className="navbar-title">La Casita de Sabino</h2>
        </motion.a>

        <motion.button 
          className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>

        <motion.div 
          className={`navbar__links ${isMobileMenuOpen ? 'mobile-active' : ''}`}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.a 
              key={item.href}
              href={item.href}
              className={`navbar__link ${item.href === '/menu' ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
