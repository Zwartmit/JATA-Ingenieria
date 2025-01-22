import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = ['Inicio', 'Nosotros', 'Servicios', 'Certificados', 'Galería', 'Contacto'];
  const menuLinks = ['inicio', 'nosotros', 'servicios', 'certificados', 'galeria', 'contacto'];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center animate-slide-in">
            <img src="src/assets/icon.png" alt="JATA" style={{ width: '40px', height: '40px' } }/>
            <span className="ml-2 text-2xl font-bold text-blue-900">JATA Mantenimientos e Ingeniería HSEQ</span>
          </div>

          <nav className="hidden md:flex space-x-8 stagger">
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${menuLinks[index]}`}
                className="text-gray-700 hover:text-blue-900 transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-900" />
            ) : (
              <Menu className="h-6 w-6 text-blue-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-scale-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 stagger">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${menuLinks[index]}`}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all duration-300 rounded-md animate-fade-in"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;