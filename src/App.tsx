import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import CertificateSearch from './components/CertificateSearch';
import CoursePage from './pages/CoursePage';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section
                    id="inicio"
                    className="min-h-screen flex items-center justify-center text-white"
                    style={{
                      backgroundImage: "url('../src/Assets/back.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="container mx-auto px-4 py-20 text-center bg-black bg-opacity-50 rounded-lg">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ textShadow: '4px 4px 4px rgb(0, 0, 0)' }}>JATA Mantenimientos e Ingeniería HSEQ</h1>
                      <p className="text-xl md:text-2xl mb-8" style={{ textShadow: '4px 4px 4px rgb(0, 0, 0)' }}>
                        Soluciones integrales en capacitación, certificación y mantenimiento mecánico e industrial.
                      </p>
                      <a href="#contacto" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300" style={{ boxShadow: '4px 4px 4px rgb(0, 0, 0)' }}>Contáctanos</a>
                    </div>
                  </section>
                  <AboutSection />
                  <ServicesSection />
                  <CertificateSearch />
                  <GallerySection />
                  <ContactSection />
                </>
              }
            />
            <Route path="/cursos-certificados" element={<CoursePage />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} JATA Mantenimientos e Ingeniería HSEQ. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
