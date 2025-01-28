import React, { useState } from 'react';
import { Search } from 'lucide-react';

const CertificateSearch = () => {
  const [cedula, setCedula] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cedula.trim()) return;

    setLoading(true);
    setError('');

    const driveUrl = 'https://drive.google.com/drive/folders/1VHVyLDhRAd4u3eCFMPq-lbnsLeZbyl8I';
    const searchUrl = `${driveUrl}?q=${cedula}.pdf`;
    
    window.open(searchUrl, '_blank');
    setLoading(false);
  };

  return (
    <section id="certificados" className="py-20 text-white overflow-hidden" style={{ backgroundColor: '#12297D' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>Generar certificados</h2>
        
        <div className="max-w-md mx-auto animate-scale-in">
          <form onSubmit={handleSearch} className="space-y-4">
            <div style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
              <label htmlFor="cedula" className="block text-sm font-medium mb-2">
                Número de Cédula
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="cedula"
                  value={cedula}
                  onChange={(e) => {
                    setCedula(e.target.value.replace(/\D/g, ''));
                    setError('');
                  }}
                  className="block w-full rounded-md py-2 px-4 text-gray-900 focus:ring-2 focus:ring-white transition-all duration-300 hover:shadow-lg"
                  placeholder="Ingrese su número de cédula"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  disabled={loading}
                  style={{ boxShadow: '0px 0px 20px rgb(0, 0, 0)' }}
                />
                <button
                  type="submit"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 ${
                    loading ? 'bg-blue-700' : 'bg-blue-800 hover:bg-blue-700'
                  } rounded-full transition-all duration-300 hover:scale-110`}
                  disabled={loading}
                >
                  <Search className={`w-5 h-5 ${loading ? 'opacity-50' : ''}`} />
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-500 bg-opacity-20 border border-red-300 rounded-md text-center animate-scale-in">
              {error}
            </div>
          )}

          <div className="mt-8 text-center text-sm space-y-4 stagger">
            {/* <p className="animate-fade-in" style={{ textShadow: '0px 0px 3px rgba(0, 0, 0)' }}>
              Ingrese su número de cédula para buscar su certificado.
            </p> */}
            <p className="text-blue-200 animate-fade-in" style={{ textShadow: '0px 0px 3px rgb(0, 0, 0)' }}>
              El certificado se descargará automaticamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSearch;