import { useEffect } from "react";
import mecanica from "../Assets/Capacitaciones/Mecanica.jpg";
import izaje from "../Assets/Capacitaciones/Izaje.jpg";
import electrico from "../Assets/Capacitaciones/Electrico.jpg";
import herramientas from "../Assets/Capacitaciones/Herramientas.jpg";
import sst from "../Assets/Capacitaciones/SST.jpg";
import vial from "../Assets/Capacitaciones/Vial.jpg";

function CapacitacionesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capacitaciones = [
    { title: "Mecánica básica", description: "Curso introductorio a la mecánica básica, ideal para quienes deseen adquirir conocimientos fundamentales sobre el mantenimiento y reparación de sistemas mecánicos.", image: mecanica },
    { title: "Izaje mecánico de cargas y maquinaria pesada", description: "Capacitación especializada en el manejo seguro de cargas pesadas y operación de maquinaria industrial.", image: izaje },
    { title: "Riesgo mecánico y eléctrico", description: "Formación en la identificación y prevención de riesgos mecánicos y eléctricos en entornos laborales.", image: electrico },
    { title: "Manejo defensivo y seguridad vial", description: "Capacitación diseñada para promover la conducción segura y la prevención de accidentes de tránsito.", image: vial },
    { title: "Manejo de herramientas manuales y de potencia", description: "Curso enfocado en el uso seguro y eficiente de herramientas manuales y equipos de potencia.", image: herramientas },
    { title: "Seguridad industrial y SST", description: "Capacitación avanzada en Seguridad Industrial y Salud en el Trabajo (SST), enfocada en la prevención de riesgos y cumplimiento normativo.", image: sst },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center" style={{ textAlign: 'center', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>Capacitaciones</h2>
        <p className="text-lg text-gray-700 mb-10 text-center" style={{ textAlign: 'center', textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>
          Explora nuestras capacitaciones diseñadas para fortalecer las habilidades técnicas y garantizar la seguridad en el trabajo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capacitaciones.map((capacitacion, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-700 hover:scale-105 transform bg-white"
              style={{ textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: '#e1e1e1' }}
            >
              <img
                src={capacitacion.image}
                alt={capacitacion.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
                {capacitacion.title}
              </h3>
              <p className="text-gray-700" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)'}}>{capacitacion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CapacitacionesPage;
