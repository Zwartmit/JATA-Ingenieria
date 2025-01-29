import React, { useState } from 'react';

const CertificateSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section id="certificados" className="py-20 text-white overflow-hidden" style={{ backgroundColor: '#12297D' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
          Generar certificados
        </h2>

        <div className="max-w-md mx-auto animate-scale-in">
          <div className="text-center">
            <button
              onClick={handleOpenModal}
              className={`py-2 px-4 rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-all duration-300 hover:scale-110`}
            >
              Ver certificados disponibles
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOutsideClick}
          >
            <div
              className="bg-[#12297d] text-white rounded-lg p-2 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 relative"
              style={{ borderRadius: '30px', border: '2px solid #12297d', boxShadow: '0px 0px 10px rgb(0, 0, 0)' }}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 py-2 px-4 text-white rounded-md cursor-pointer transition-all duration-300 hover:scale-110"
              >
                ❌
              </button>
              <h3 className="text-2xl font-semibold mb-4 text-center">Certificados disponibles</h3>
              <iframe
                src={`https://drive.google.com/embeddedfolderview?id=1VHVyLDhRAd4u3eCFMPq-lbnsLeZbyl8I#grid`}
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title="Google Drive"
                style={{ borderRadius: '30px', border: '2px solid rgb(0, 0, 0)', backgroundColor: 'white', boxShadow: '0px 0px 10px rgb(0, 0, 0)' }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateSearch;