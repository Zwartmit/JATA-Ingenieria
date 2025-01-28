import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Lightbulb, Users, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cursos from '../Assets/Servicios/Cursos.avif';
import asesorias from '../Assets/Servicios/Asesorias.avif';
import capacitaciones from '../Assets/Servicios/Capacitaciones.avif';
import otros from '../Assets/Servicios/Otros.jpg';

const services = [
  { title: 'Cursos certificados', description: 'Programas de formación especializados con certificación oficial.', icon: GraduationCap, image: cursos, link: '/cursos-certificados' },
  { title: 'Asesorías y consultas', description: 'Consultoría experta en seguridad industrial y gestión HSEQ.', icon: Lightbulb, image: asesorias, link: '/asesorias' },
  { title: 'Capacitaciones', description: 'Programas de entrenamiento personalizados para empresas.', icon: Users, image: capacitaciones, link: '/capacitaciones' },
  { title: 'Otros servicios', description: 'Soluciones adicionales adaptadas a sus necesidades específicas.', icon: Wrench, image: otros, link: '/otros-servicios' }
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleRedirect = () => {
    navigate(services[currentIndex].link);
  };

  return (
    <section id="servicios" className="py-20" style={{ backgroundColor: '#e1e1e1' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>Nuestros servicios</h2>

        <div className="relative" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>
          <div className="flex flex-col items-center justify-center relative">
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-0 z-10 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

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
              <div className="absolute top-[63%] left-0 right-0 flex justify-between px-4 md:hidden transform -translate-y-1/2">
  <button
    onClick={prevSlide}
    className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
  <button
    onClick={nextSlide}
    className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
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
                <p className="text-gray-700">
                  {services[currentIndex].description}
                </p>
                <div className="w-full max-w-4xl cursor-pointer" onClick={handleRedirect} >
                  <p className="text-sm mr-2" style={{ color: '#072d75' }}><b>Pulsa para más información</b></p>
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-0 z-10 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  currentIndex === index ? 'bg-blue-900 scale-110' : 'bg-gray-300'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
