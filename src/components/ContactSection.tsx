import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Contacto</h2>
          <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-900" />
            <div>
              <h3 className="font-semibold">Correo electrónico</h3>
              <a href="mailto:contacto@jata.com" className="text-blue-900 hover:underline">
                contacto@jata.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-900" />
            <div>
              <h3 className="font-semibold">Teléfono</h3>
              <a href="tel:+573177268534" className="text-blue-900 hover:underline">
                +57 317 7268534
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-blue-900" />
            <div>
              <h3 className="font-semibold">Dirección</h3>
              <p>Calle Principal #123, Ciudad</p>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <a
              href="https://wa.me/573177268534"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              WhatsApp
            </a>
            <a
              href="mailto:92taylorgang92@gmail.com"
              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;