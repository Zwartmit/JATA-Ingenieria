import izaje from "../Assets/Cursos/Izaje.jpeg";
import rigger from "../Assets/Cursos/Rigger.jpg";
import montacargas from "../Assets/Cursos/Montacargas.jpg";
import minicargador from "../Assets/Cursos/Minicargador.jpeg";
import excavadora from "../Assets/Cursos/Excavadora.jpg";
import manlift from "../Assets/Cursos/Manlift.jpeg";
import cargador from "../Assets/Cursos/Cargador.jpg";
import grua1 from "../Assets/Cursos/Grua.jpg";
import grua2 from "../Assets/Cursos/Grua.png";
import puente from "../Assets/Cursos/Puente.jpg";
import alturas from "../Assets/Cursos/Alturas.jpg";
import manejo from "../Assets/Cursos/Manejo.jpg";
import { useEffect } from 'react';

function CursosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const Cursos = [
    {
      title: "Supervisor de Maniobras de Izaje",
      description: "Curso especializado en la supervisión de maniobras de izaje, garantizando seguridad y eficiencia en el manejo de cargas.",
      image: izaje,
    },
    {
      title: "Aparejador Rigger",
      description: "Formación para aparejadores rigger con énfasis en técnicas de izaje seguro y cálculo de capacidades de carga.",
      image: rigger,
    },
    {
      title: "Operador de Montacargas",
      description: "Certificación en operación de montacargas, asegurando el manejo seguro y eficiente de equipos.",
      image: montacargas,
    },
    {
      title: "Operador de Minicargador",
      description: "Curso diseñado para operadores de minicargadores, enfocado en el manejo y mantenimiento del equipo.",
      image: minicargador,
    },
    {
      title: "Operador de Excavadora Hidráulica",
      description: "Formación en el uso y operación de excavadoras hidráulicas, con prácticas en campo.",
      image: excavadora,
    },
    {
      title: "Operador de Manlift",
      description: "Certificación para operadores de plataformas de elevación, con énfasis en seguridad laboral.",
      image: manlift,
    },
    {
      title: "Operador de Cargador Frontal",
      description: "Capacitación para operadores de cargadores frontales, cubriendo técnicas de operación y seguridad.",
      image: cargador,
    },
    {
      title: "Operador de Camión Grúa",
      description: "Curso certificado en operación de camiones grúa, con énfasis en maniobras seguras.",
      image: grua1,
    },
    {
      title: "Operador de Grúa Móvil",
      description: "Formación completa en operación de grúas móviles, asegurando cumplimiento normativo y eficiencia operativa.",
      image: grua2,
    },
    {
      title: "Operador de Puente Grúa",
      description: "Certificación para operadores de puente grúa, incluyendo prácticas de izaje y normas de seguridad.",
      image: puente,
    },
    {
      title: "Tareas de Alto Riesgo",
      description: "Formación en tareas de alto riesgo, con enfoque en prevención y control de accidentes.",
      image: alturas,
    },
    {
      title: "Manejo Defensivo",
      description: "Curso de manejo defensivo, diseñado para mejorar las habilidades al volante y prevenir accidentes.",
      image: manejo,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ textAlign: 'center' }}>Cursos certificados</h2>
        <p className="text-lg text-gray-700 mb-10" style={{ textAlign: 'center' }}>
          Aquí encontrarás información sobre nuestros programas de formación certificados, diseñados para cumplir con los estándares más altos de calidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Cursos.map((course, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ textAlign: 'center' }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CursosPage;
