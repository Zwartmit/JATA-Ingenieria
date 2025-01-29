import { Menu, X, Home } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import icon from '../Assets/LogoT.png';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const menuItems = ['Inicio', 'Nosotros', 'Servicios', 'Certificados', 'Galería', 'Contacto'];
  const menuLinks = ['inicio', 'nosotros', 'servicios', 'certificados', 'galeria', 'contacto'];

  const isCursoPage = location.pathname === '/cursos-certificados';
  const isAsesoriasPage = location.pathname === '/asesorias';
  const isCapacitacionesPage = location.pathname === '/capacitaciones';
  const isOtrosServiciosPage = location.pathname === '/otros-servicios';

  const shouldHideMenu = isCursoPage || isAsesoriasPage || isCapacitacionesPage || isOtrosServiciosPage;

  return (
    <header className="fixed w-full shadow-md z-50" style={{ background: '#e1e1e1' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center animate-slide-in">
          <a href="/"><img src={icon} alt="JATA" style={{ width: 'auto', height: '60px', filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))' }} /></a>
          <span className="ml-2 text-xl sm:text-2xl font-bold" style={{ color: "#12297D", textShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
            <span className="block sm:inline">JATA Mantenimientos </span>
            <span className="block sm:inline">e Ingeniería HSEQ</span>
          </span>
        </div>

          {!shouldHideMenu && (
            <nav className="hidden md:flex space-x-8 stagger">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`/#${menuLinks[index]}`}
                  className="text-black font-semibold hover:text-blue-900 transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  {item}
                </a>
              ))}
            </nav>
          )}

          {(isCursoPage || isAsesoriasPage || isCapacitacionesPage || isOtrosServiciosPage) && (
            <a href="/" className="md:block hidden">
              <Home className="h-6 w-6 text-blue-900" />
            </a>
          )}

          {!shouldHideMenu && (
            <button
              className="md:hidden transition-transform duration-300 hover:scale-110 animate-fade-in"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-blue-900" />
              ) : (
                <Menu className="h-6 w-6 text-blue-900" />
              )}
            </button>
          )}

          {(isCursoPage || isAsesoriasPage || isCapacitacionesPage || isOtrosServiciosPage) && (
            <a href="/" className="md:hidden block">
              <Home className="h-6 w-6 text-blue-900" />
            </a>
          )}
        </div>

        {isMenuOpen && !shouldHideMenu && (
          <div className="md:hidden animate-scale-in text-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-[#12297D] via-[#E0E3EB] to-[#12297D] mx-auto"></div>
            <div className="grid grid-cols-3 gap-4 px-2 pt-2 pb-3 sm:px-3 stagger">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${menuLinks[index]}`}
                  className="text-black font-semibold hover:text-blue-900 transition-all duration-300 hover:scale-105 animate-fade-in"
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
