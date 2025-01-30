import { useState, useEffect } from 'react';
import Certificado from '../Assets/Certificado.png';
import { FaSearch } from 'react-icons/fa'; // Importa el ícono de lupa

const DRIVE_FOLDER_ID = '1kXoHpYss_2lyogpSjjQv9HPShRBNbm19'; // Reemplaza con tu carpeta de Drive
const API_KEY = 'AIzaSyDnxrHF8JRbHgdzLeceUWGiMR2Ej6ahLlM'; // Reemplaza con tu API Key de Google Drive

const CertificateSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [files, setFiles] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false); // Estado para alternar entre lista filtrada y el iframe

  // Función para obtener archivos de una carpeta (incluidas subcarpetas)
  const getFiles = async (folderId) => {
    try {
      // Obtener archivos de la carpeta principal
      let filesData = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${API_KEY}`
      );
      let data = await filesData.json();
      let filesInFolder = data.files || [];

      // Obtener subcarpetas de la carpeta principal
      let subfoldersData = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents and mimeType='application/vnd.google-apps.folder'&key=${API_KEY}`
      );
      let subfolders = await subfoldersData.json();
      let subfolderIds = subfolders.files.map((folder) => folder.id);

      // Obtener archivos de las subcarpetas
      for (let subfolderId of subfolderIds) {
        let subfolderFilesData = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${subfolderId}' in parents&key=${API_KEY}`
        );
        let subfolderFiles = await subfolderFilesData.json();
        filesInFolder = [...filesInFolder, ...(subfolderFiles.files || [])];
      }

      setFiles(filesInFolder);
    } catch (error) {
      console.error('Error al obtener archivos:', error);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      getFiles(DRIVE_FOLDER_ID);
    }
  }, [isModalOpen]);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Cuando se escriba en el input de búsqueda, activamos el filtro
    setIsFiltering(searchTerm.trim() !== '');
  }, [searchTerm]);

  return (
    <section id="certificados" className="py-20 text-white overflow-hidden" style={{ backgroundColor: '#12297D' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 animate-fade-in" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 0.3)' }}>
          Certificados
        </h2>
        <div className="flex items-center mb-5 justify-center animate-fade-in">
          <img src={Certificado} alt="Certificado" style={{ width: 'auto', height: '150px', filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.82))' }} />
        </div>

        <div className="max-w-md mx-auto animate-scale-in">
          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-2 px-4 rounded-md text-white bg-blue-800 hover:bg-blue-700 transition-all duration-300 hover:scale-110"
            >
              Consultar certificados
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
            <div className="bg-[#e1e1e1] text-black rounded-lg p-4 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 relative" style={{ borderRadius: '30px', border: '2px solid #12297d', boxShadow: '0px 0px 10px rgb(0, 0, 0)' }}>
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 py-2 px-4 text-white rounded-md cursor-pointer transition-all duration-300 hover:scale-110">
                ❌
              </button>
              <h3 className="text-3xl font-bold mb-4 text-center">Certificados disponibles</h3>

              {/* Input de búsqueda */}
              <div className="text-center mb-4">
                <input
                  type="text"
                  placeholder="Buscar certificado..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 w-full md:w-3/4 lg:w-2/3 rounded-md text-black border border-gray-400"
                />
              </div>

              {/* Mostrar tabla si se está filtrando */}
              {isFiltering && (
                <div className="overflow-x-auto text-black" style={{ backgroundColor: '#ffffff', borderRadius: '20px' }}>
                  {filteredFiles.length > 0 ? (
                    <table className="min-w-full table-auto border-collapse">
                      <thead>
                        <tr className="bg-blue-800 text-white">
                          <th className="py-2 px-4 border-b">Nombre</th>
                          <th className="py-2 px-4 border-b"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredFiles.map((file) => (
                          <tr key={file.id} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-4">{file.name}</td>
                            <td className="py-2 px-4">
                              <a
                                href={`https://drive.google.com/file/d/${file.id}/view`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-500 flex items-center justify-center"
                              >
                                <FaSearch className="mr-2" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-center">No se encontraron certificados.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateSearch;
