import { useEffect } from "react";
import caliente from "../Assets/Otros/Caliente.jpg";
import energias from "../Assets/Otros/Energias.jpg";
import auxilios from "../Assets/Otros/Auxilios.jpg";

function OtrosServiciosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios = [
    { title: "Implementación de programa de trabajo en caliente", description: "Gestión y control de actividades de trabajo en caliente para garantizar la seguridad en operaciones de alto riesgo.", image: caliente },
    { title: "Manejo y control de energías peligrosas", description: "Procedimientos de bloqueo y etiquetado (LOTO) para prevenir accidentes relacionados con energías peligrosas en el entorno laboral.", image: energias },
    { title: "Cursos básicos de primeros auxilios", description: "Capacitación en primeros auxilios para responder de manera efectiva ante emergencias médicas en el trabajo o el hogar.", image: auxilios },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center" style={{ textAlign: 'center', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>Otros Servicios</h2>
        <p className="text-lg text-gray-700 mb-10 text-center" style={{ textAlign: 'center', textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>
          Descubre otros servicios diseñados para potenciar la eficiencia y seguridad en tu organización.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-700 hover:scale-105 transform bg-white"
              style={{ textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: '#e1e1e1' }}
            >
            <img
              src={servicio.image}
              alt={servicio.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
                {servicio.title}
              </h3>
              <p className="text-gray-700" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtrosServiciosPage;
