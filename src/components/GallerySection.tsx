import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Excavadora from "../Assets/Galeria/Excavadora.jpg";
import Manlift from "../Assets/Galeria/Manlift.jpg";
import Montacargas from "../Assets/Galeria/Montacargas.jpg";
import Izaje from "../Assets/Galeria/Izaje.jpg";
import Rigger from "../Assets/Galeria/Rigger.jpg";
import Minicargador from "../Assets/Galeria/Minicargador.jpg";
import Cargador from "../Assets/Galeria/Cargador.jpg";
import Pausas from "../Assets/Galeria/Pausas.jpg";
import Alturas from "../Assets/Galeria/Alturas.jpg";

const images = [Pausas, Excavadora, Minicargador, Manlift, Montacargas, Izaje, Rigger, Cargador, Alturas];

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <section id="galeria" className="py-20" style={{ backgroundColor: '#e1e1e1' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
          Galería
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg" style={{ boxShadow: ' 0px 0px 8px rgba(0, 0, 0)', borderRadius: '30px' }}>
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevPage}
                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPage}
                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;