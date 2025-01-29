import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import back from "./Assets/back.png";
import notFoundImage from "./Assets/notFound.png";
// import video from "./Assets/video.mp4";
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/cursos-certificados" element={<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/asesorias" element={<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/capacitaciones" element={<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/otros-servicios" element={<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
        </Routes>

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<><section id="inicio" className="relative min-h-screen flex items-center justify-center text-white"
                style={{
                  backgroundImage: `url(${back})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white" >
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" >
                  <source src={video} type="video/mp4" />
                  Tu navegador no soporta videos.
                </video> */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="relative container mx-auto px-4 py-20 text-center  bg-opacity-30 rounded-lg" style={{ borderRadius: "100px" }}>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ textShadow: "4px 4px 4px rgb(0, 0, 0)" }}>
                    JATA Mantenimientos e Ingeniería HSEQ
                  </h1>
                  <p className="text-xl md:text-2xl mb-8" style={{ textShadow: "4px 4px 4px rgb(0, 0, 0)" }}>
                    Soluciones integrales en capacitación, certificación y mantenimiento mecánico e industrial.
                  </p>
                  <a href="#contacto" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300" style={{ boxShadow: "4px 4px 4px rgb(0, 0, 0)" }} >
                    Contáctanos
                  </a>
                </div>
              </section>

              <div style={{ background: "linear-gradient(to bottom, #072d75, #e1e1e1)" }}>&nbsp;</div>
              <AboutSection />
              <div className="w-full h-[2px] bg-gradient-to-r from-[#12297D] via-[#E0E3EB] to-[#12297D] mx-auto"></div>
              <ServicesSection />
              <div style={{ background: "linear-gradient(to top, #072d75, #e1e1e1)" }}>&nbsp;</div>
              <CertificateSearch />
              <div style={{ background: "linear-gradient(to bottom, #072d75, #e1e1e1)" }}>&nbsp;</div>
              <GallerySection />
              <div className="w-full h-[2px] bg-gradient-to-r from-[#12297D] via-[#E0E3EB] to-[#12297D] mx-auto"></div>
              <ContactSection />
              <div style={{ background: "linear-gradient(to top, #072d75, #e1e1e1)" }}>&nbsp;</div>
            </>}/>
            
            <Route path="/cursos-certificados" element={<CoursePage />} />
            <Route path="/asesorias" element={<AsesoriasPage />} />
            <Route path="/capacitaciones" element={<CapacitacionesPage />} />
            <Route path="/otros-servicios" element={<OtrosServiciosPage />} />
            <Route path="*" element={
                <div className="flex items-center justify-center flex-col" style={{ paddingTop: '50px' }}>
                  <img src={notFoundImage} alt="Page Not Found" className="mb-2" style={{ width: 'auto', height: '250px', filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5))' }} />
                  <h2 className="text-2xl font-semibold" style={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)' }}>
                    Esta página no está disponible
                  </h2>
                  <Link to="/" className="mt-4 px-6 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-all duration-300" style={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)', borderRadius: '20px' }}>
                    Volver al inicio
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>

        <footer className="text-white py-8" style={{ backgroundColor: "#12297D", textShadow: "3px 3px 4px rgb(0, 0, 0)" }} >
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} JATA Mantenimientos e Ingeniería HSEQ. Todos los derechos reservados.
            </p>
          </div>
        </footer>

        {showScrollButton && (
          <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition" >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
