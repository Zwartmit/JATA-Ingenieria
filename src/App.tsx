import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import CertificateSearch from "./components/CertificateSearch";
import CoursePage from "./pages/CursosPage";
import AsesoriasPage from "./pages/AsesoriasPage";
import CapacitacionesPage from "./pages/CapacitacionesPage";
import OtrosServiciosPage from "./pages/OtrosServiciosPage";
import { useState } from "react";
import back from "./Assets/back.jpeg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className="flex-grow pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section
                    id="inicio"
                    className="min-h-screen flex items-center justify-center text-white"
                    style={{
                      backgroundImage: `url(${back})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="container mx-auto px-4 py-20 text-center bg-black bg-opacity-50 rounded-lg">
                      <h1
                        className="text-5xl md:text-6xl font-bold mb-6"
                        style={{ textShadow: "4px 4px 4px rgb(0, 0, 0)" }}
                      >
                        JATA Mantenimientos e Ingeniería HSEQ
                      </h1>
                      <p
                        className="text-xl md:text-2xl mb-8"
                        style={{ textShadow: "4px 4px 4px rgb(0, 0, 0)" }}
                      >
                        Soluciones integrales en capacitación, certificación y
                        mantenimiento mecánico e industrial.
                      </p>
                      <a
                        href="#contacto"
                        className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
                        style={{ boxShadow: "4px 4px 4px rgb(0, 0, 0)" }}
                      >
                        Contáctanos
                      </a>
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
            <Route path="/asesorias" element={<AsesoriasPage />} />
            <Route path="/capacitaciones" element={<CapacitacionesPage />} />
            <Route path="/otros-servicios" element={<OtrosServiciosPage />} />
          </Routes>
        </main>

        <footer
          className="text-white py-8"
          style={{ backgroundColor: "#12297D" }}
        >
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} JATA Mantenimientos e Ingeniería
              HSEQ. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
