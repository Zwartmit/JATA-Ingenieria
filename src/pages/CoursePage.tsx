const CoursePage = () => {
    const courses = [
      {
        title: "Supervisor de Maniobras de Izaje",
        description: "Curso especializado en la supervisión de maniobras de izaje, garantizando seguridad y eficiencia en el manejo de cargas.",
        image: "../src/Assets/Courses/Izaje.jpeg",
      },
      {
        title: "Aparejador Rigger",
        description: "Formación para aparejadores rigger con énfasis en técnicas de izaje seguro y cálculo de capacidades de carga.",
        image: "../src/Assets/Courses/Rigger.png",
      },
      {
        title: "Operador de Montacargas",
        description: "Certificación en operación de montacargas, asegurando el manejo seguro y eficiente de equipos.",
        image: "../src/Assets/Courses/Montacargas.jpeg",
      },
      {
        title: "Operador de Minicargador",
        description: "Curso diseñado para operadores de minicargadores, enfocado en el manejo y mantenimiento del equipo.",
        image: "../src/Assets/Courses/Minicargador.jpeg",
      },
      {
        title: "Operador de Excavadora Hidráulica",
        description: "Formación en el uso y operación de excavadoras hidráulicas, con prácticas en campo.",
        image: "../src/Assets/Courses/Excavadora.jpeg",
      },
      {
        title: "Operador de Manlift",
        description: "Certificación para operadores de plataformas de elevación, con énfasis en seguridad laboral.",
        image: "../src/Assets/Courses/Manlift.jpeg",
      },
      {
        title: "Operador de Cargador Frontal",
        description: "Capacitación para operadores de cargadores frontales, cubriendo técnicas de operación y seguridad.",
        image: "../src/Assets/Courses/Cargador.jpeg",
      },
      {
        title: "Operador de Camión Grúa",
        description: "Curso certificado en operación de camiones grúa, con énfasis en maniobras seguras.",
        image: "../src/Assets/Courses/Grua.jpeg",
      },
      {
        title: "Operador de Grúa Móvil",
        description: "Formación completa en operación de grúas móviles, asegurando cumplimiento normativo y eficiencia operativa.",
        image: "../src/Assets/Courses/Grua.jpg",
      },
      {
        title: "Operador de Puente Grúa",
        description: "Certificación para operadores de puente grúa, incluyendo prácticas de izaje y normas de seguridad.",
        image: "../src/Assets/Courses/Puente.jpeg",
      },
      {
        title: "Tareas de Alto Riesgo",
        description: "Formación en tareas de alto riesgo, con enfoque en prevención y control de accidentes.",
        image: "../src/Assets/Courses/Alturas.png",
      },
      {
        title: "Manejo Defensivo",
        description: "Curso de manejo defensivo, diseñado para mejorar las habilidades al volante y prevenir accidentes.",
        image: "../src/Assets/Courses/Manejo.jpg",
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
            {courses.map((course, index) => (
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
  };
  
  export default CoursePage;
  