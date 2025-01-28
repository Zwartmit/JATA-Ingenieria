import React, { useState } from 'react';
import { GraduationCap, Lightbulb, Users, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import cursos from '../Assets/Servicios/Cursos.avif';
import asesorias from '../Assets/Servicios/Asesorias.avif';
import capacitaciones from '../Assets/Servicios/Capacitaciones.avif';
import otros from '../Assets/Servicios/Otros.jpg';

const services = [
  { 
    title: 'Cursos certificados', 
    description: 'Ofrecemos programas de formación especializados con certificación oficial. Estos cursos están diseñados para proporcionar habilidades prácticas y conocimientos avanzados en diversas áreas de la seguridad industrial, gestión HSEQ y más, con un enfoque práctico y actualizado.', 
    icon: GraduationCap, 
    image: cursos, 
    link: '/cursos-certificados' 
  },
  { 
    title: 'Asesorías y consultas', 
    description: 'Brindamos consultoría experta en seguridad industrial, salud ocupacional y gestión HSEQ, adaptada a las necesidades de cada empresa. Nuestros asesores altamente calificados le ayudarán a optimizar sus procesos y cumplir con la normativa vigente para asegurar la integridad y eficiencia de su equipo y operaciones.', 
    icon: Lightbulb, 
    image: asesorias, 
    link: '/asesorias' 
  },
  { 
    title: 'Capacitaciones', 
    description: 'Ofrecemos programas de capacitación personalizados para empresas, enfocados en mejorar el desempeño de su equipo en temas clave como seguridad, cumplimiento de normativas y optimización de procesos. Estos entrenamientos son impartidos por expertos en el área y pueden adaptarse a los requerimientos específicos de su organización.', 
    icon: Users, 
    image: capacitaciones, 
    link: '/capacitaciones' 
  },
  { 
    title: 'Otros servicios', 
    description: 'Disponemos de una amplia gama de soluciones adicionales adaptadas a sus necesidades específicas, desde auditorías especializadas hasta servicios de implementación y mantenimiento de sistemas de gestión. Estamos comprometidos con brindar apoyo integral para garantizar el éxito y la sostenibilidad de su empresa.', 
    icon: Wrench, 
    image: otros, 
    link: '/otros-servicios' 
  }
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(services[currentIndex].link);
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackMouse: true,
  });

  return (
    <section id="servicios" className="py-20" style={{ backgroundColor: '#e1e1e1' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
          Nuestros servicios
        </h2>
        <div className="relative" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>
          <div className="flex flex-col items-center justify-center relative" {...handlers}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] overflow-hidden rounded-lg transform transition-transform duration-500">
                <img
                  key={currentIndex}
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  className={`w-full h-full object-cover transform transition-all duration-500 hover:scale-110 ${
                    direction === 'right' ? 'animate-slide-in' : 'animate-slide-in'
                  }`}
                />
              </div>

              <div className="text-center md:text-left animate-fade-in">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  {React.createElement(services[currentIndex].icon, {
                    className: "w-12 h-12 text-blue-900 animate-float"
                  })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[currentIndex].title}
                </h3>
                <p className="text-gray-700 text-justify">
                  {services[currentIndex].description}
                </p>
                <div className="w-full max-w-4xl cursor-pointer" onClick={handleRedirect}>
                  <p className="text-sm mr-2" style={{ color: '#072d75' }}><b>Pulsa para más información</b></p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-3">
            <button
              onClick={handlePrevious}
              className="bg-blue-900 text-white mr-2 p-1 rounded-full shadow-lg hover:bg-blue-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex justify-center space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 focus:outline-none ${
                    currentIndex === index ? 'bg-blue-900 scale-110' : 'bg-gray-300'
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                  }}
                  style={{
                    border: '1px solid #072d75',
                    backgroundColor: currentIndex === index ? '#072d75' : '#e1e1e1'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-blue-900 text-white ml-2 p-1 rounded-full shadow-lg hover:bg-blue-700"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
