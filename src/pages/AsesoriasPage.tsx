import { useEffect } from "react";
import sst from "../Assets/Asesorias/SST.jpg";
import pesv from "../Assets/Asesorias/PESV.jpg";
import sgc from "../Assets/Asesorias/SGC.jpg";
import riesgo from "../Assets/Asesorias/Riesgo.jpg";
import cargas from "../Assets/Asesorias/Cargas.jpg";
import energia from "../Assets/Asesorias/Energia.jpg";

function AsesoriasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const asesorias = [
    { title: "Implementación SG-SST", description: "Asesoría especializada en la implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).", image: sst },
    { title: "Implementación PESV", description: "Acompañamiento en la implementación del Plan Estratégico de Seguridad Vial (PESV) para empresas y organizaciones.", image: pesv },
    { title: "Implementación SGC", description: "Asesoría para la implementación de un Sistema de Gestión de Calidad (SGC) basado en estándares internacionales.", image: sgc },
    { title: "Programa para el control de energías peligrosas", description: "Diseño e implementación de un programa para la gestión segura de energías peligrosas, garantizando la prevención de riesgos.", image: energia },
    { title: "Programa para el control de riesgo mecánico", description: "Capacitación y diseño de programas para la identificación y control de riesgos mecánicos en el entorno laboral.", image: riesgo },
    { title: "Programa para izaje mecánico de cargas", description: "Implementación de programas enfocados en maniobras seguras y eficaces de izaje mecánico de cargas.", image: cargas },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>Asesorías y Consultas</h2>
        <p className="text-lg text-gray-700 mb-10 text-center" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>
          Descubre nuestras asesorías especializadas diseñadas para cumplir connlas necesidades de tu empresa.
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {asesorias.map((asesoria, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-700 hover:scale-105 transform bg-white"
              style={{ textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: '#e1e1e1' }}
            >
              <img
                src={asesoria.image}
                alt={asesoria.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
                {asesoria.title}
              </h3>
              <p className="text-gray-700" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)'}}>{asesoria.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AsesoriasPage;
