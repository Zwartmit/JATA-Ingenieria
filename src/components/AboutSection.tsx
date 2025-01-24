import { Clock, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>Sobre Nosotros</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80"
              alt="Equipo JATA"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-800 mb-6" style={{ textAlign: 'justify', textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}>
              <b>JATA MANTENIMIENTOS E INGENIERÍA HSEQ </b>es una empresa dedicada a brindar asesorías, consultorías, capacitaciones y certificaciones
              de temas relacionados con Seguridad y Salud en el Trabajo, certificaciones de operadores de
              maquinaria pesada y de equipos de izaje, mantenimiento de equipos y maquinarias.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }} >
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-900 mx-auto mb-2" />
                <h3 className="font-semibold">10+ Años</h3>
                <p className="text-sm text-gray-600">de Experiencia</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-900 mx-auto mb-2" />
                <h3 className="font-semibold">500+</h3>
                <p className="text-sm text-gray-600">Clientes Satisfechos</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-900 mx-auto mb-2" />
                <h3 className="font-semibold">100%</h3>
                <p className="text-sm text-gray-600">Certificados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;