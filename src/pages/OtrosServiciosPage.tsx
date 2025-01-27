import { useEffect } from "react";

function OtrosServiciosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios = [
    {
      title: "Auditorías Internas",
      description:
        "Realizamos auditorías internas para evaluar el cumplimiento de normativas y estándares, asegurando la calidad de los procesos organizacionales.",
    },
    {
      title: "Gestión Documental",
      description:
        "Ofrecemos servicios de organización, digitalización y control documental para una gestión eficiente y segura de la información empresarial.",
    },
    {
      title: "Análisis de Riesgos",
      description:
        "Identificamos, evaluamos y proponemos soluciones efectivas para mitigar riesgos en diferentes áreas operativas.",
    },
    {
      title: "Mantenimiento Preventivo y Correctivo",
      description:
        "Servicios de mantenimiento para equipos e instalaciones, garantizando su óptimo funcionamiento y prolongando su vida útil.",
    },
    {
      title: "Diseño de Programas de Seguridad",
      description:
        "Desarrollamos programas personalizados de seguridad y salud en el trabajo adaptados a las necesidades específicas de tu empresa.",
    },
    {
      title: "Capacitaciones Personalizadas",
      description:
        "Ofrecemos capacitaciones ajustadas a las necesidades específicas de tu equipo, enfocadas en mejorar la productividad y seguridad laboral.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Otros Servicios
        </h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Descubre otros servicios diseñados para potenciar la eficiencia y seguridad en tu organización.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {servicio.title}
              </h3>
              <p className="text-gray-700">{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtrosServiciosPage;
