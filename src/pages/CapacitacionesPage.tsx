import { useEffect } from "react";

function CapacitacionesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capacitaciones = [
    {
      title: "Mecánica Básica",
      description:
        "Curso introductorio a la mecánica básica, ideal para quienes deseen adquirir conocimientos fundamentales sobre el mantenimiento y reparación de sistemas mecánicos.",
    },
    {
      title: "Izaje Mecánico de Cargas y Maquinaria Pesada",
      description:
        "Capacitación especializada en el manejo seguro de cargas pesadas y operación de maquinaria industrial.",
    },
    {
      title: "Riesgo Mecánico y Eléctrico",
      description:
        "Formación en la identificación y prevención de riesgos mecánicos y eléctricos en entornos laborales.",
    },
    {
      title: "Manejo Defensivo y Seguridad Vial",
      description:
        "Capacitación diseñada para promover la conducción segura y la prevención de accidentes de tránsito.",
    },
    {
      title: "Manejo de Herramientas Manuales y de Potencia",
      description:
        "Curso enfocado en el uso seguro y eficiente de herramientas manuales y equipos de potencia.",
    },
    {
      title: "Seguridad Industrial y SST",
      description:
        "Capacitación avanzada en Seguridad Industrial y Salud en el Trabajo (SST), enfocada en la prevención de riesgos y cumplimiento normativo.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Capacitaciones
        </h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Explora nuestras capacitaciones diseñadas para fortalecer las habilidades técnicas y garantizar la seguridad en el trabajo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capacitaciones.map((capacitacion, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {capacitacion.title}
              </h3>
              <p className="text-gray-700">{capacitacion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CapacitacionesPage;
