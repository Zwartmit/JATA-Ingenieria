import { useState } from 'react';

const CertificateSearch = () => {
  const [loading, setLoading] = useState(false);

  const handleRedirect = () => {
    setLoading(true);
    // Redirige al usuario a la carpeta de Google Drive
    window.open('https://drive.google.com/drive/folders/1VHVyLDhRAd4u3eCFMPq-lbnsLeZbyl8I?usp=sharing', '_blank');
    setLoading(false);
  };

  return (
    <section id="certificados" className="py-20 text-white overflow-hidden" style={{ backgroundColor: '#12297D' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
          Consultar certificados
        </h2>

        <div className="max-w-md mx-auto animate-scale-in">
          <div className="text-center">
            <button
              onClick={handleRedirect}
              className={`py-2 px-4 rounded-md text-white ${loading ? 'bg-blue-700' : 'bg-blue-800 hover:bg-blue-700'} transition-all duration-300 hover:scale-110`}
              disabled={loading}
            >
              Ir a la carpeta de certificados
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSearch;
