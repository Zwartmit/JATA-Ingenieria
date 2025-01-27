import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}
        >
          Contacto
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 justify-center">
              <Mail className="w-6 h-6 text-blue-900" />
              <div>
                <h3 className="font-semibold">Correo electrónico</h3>
                <a
                  href="mailto:contacto@jata.com"
                  className="text-blue-900 hover:underline"
                >
                  contacto@jata.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center">
              <Phone className="w-6 h-6 text-blue-900" />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <a
                  href="tel:+573028389674"
                  className="text-blue-900 hover:underline"
                >
                  +57 302 8389674
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center">
              <MessageCircle className="w-6 h-6 text-blue-900" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <a
                  href="https://wa.me/573177268534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:underline"
                >
                  +57 317 7268534
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center">
              <MapPin className="w-6 h-6 text-blue-900" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p>Calle 44b #58-15, Rionegro Antioquia</p>
              </div>
            </div>
          </div>

          <div className="w-full h-80 lg:h-auto">
            <iframe
              title="Ubicación en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8540250821216!2d-75.37945762939788!3d6.150297983880097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f1b2cb88a63%3A0xba9d99e45827e2f8!2sCl.%2044b%20%2358-15%2C%20Rionegro%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1737758568585!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
