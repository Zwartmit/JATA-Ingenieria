import { useEffect } from "react";

function OtrosServiciosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicios = [
    { title: "", description: ".", },
    { title: "", description: ".", },
    { title: "", description: ".", },
    { title: "", description: ".", },
    { title: "", description: ".", },
    { title: "", description: ".", },
  ];

  return (
    <section className="py-12 bg-gray-100">
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
              style={{ textAlign: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
            >
            <img
              alt={servicio.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
              <h3 className="text-2xl font-semibold text-blue-900 mb-4" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
                {servicio.title}
              </h3>
              <p className="text-gray-700" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)'}}>{servicio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtrosServiciosPage;
