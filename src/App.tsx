import { useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import CertificateSearch from './components/CertificateSearch';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="pt-16">
        <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">JATA Mantenimientos e Ingeniería HSEQ</h1>
            <p className="text-xl md:text-2xl mb-8">Soluciones integrales en mantenimiento y seguridad industrial</p>
            <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
              Contáctanos
            </a>
          </div>
        </section>

        <AboutSection />
        <ServicesSection />
        <CertificateSearch />
        <GallerySection />
        <ContactSection />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} JATA Mantenimientos e Ingeniería HSEQ. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;