import { useState, useEffect } from 'react';
import Certificado from '../Assets/Certificado.png';

const DRIVE_FOLDER_ID = '1kXoHpYss_2lyogpSjjQv9HPShRBNbm19';
const API_KEY = 'AIzaSyDnxrHF8JRbHgdzLeceUWGiMR2Ej6ahLlM';

const CertificateSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  interface File {
    id: string;
    name: string;
  }
  
  const [files, setFiles] = useState<File[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const getFiles = async (folderId: string) => {
    try {
      let filesData = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${API_KEY}`
      );
      let data = await filesData.json();
      let filesInFolder = data.files || [];

      let subfoldersData = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents and mimeType='application/vnd.google-apps.folder'&key=${API_KEY}`
      );
      let subfolders = await subfoldersData.json();
      let subfolderIds = subfolders.files.map((folder: { id: string }) => folder.id);

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
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-3 cursor-pointer"
                style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)' }}
              >
                ❌
              </button>

              <h3 className="text-3xl font-bold mb-4 text-center" style={{ textShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)' }}>Certificados</h3>

              <div className="text-center mb-4">
                <input
                  type="text"
                  placeholder="Buscar certificado..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 w-full md:w-3/4 lg:w-2/3 rounded-md text-black border border-gray-400"
                />
              </div>

              {isFiltering && (
                <div className="overflow-x-auto text-black text-center">
                  {filteredFiles.length > 0 ? (
                    <div className="max-h-80 overflow-y-auto">
                      <table className="min-w-full table-auto border-collapse">
                        <tbody>
                          {filteredFiles.map((file) => (
                            <tr key={file.id} className="border-b hover:bg-gray-100">
                              <td className="py-2 px-4">
                                <a
                                  href={`https://drive.google.com/file/d/${file.id}/view`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 hover:text-blue-500 block"
                                  style={{ textShadow: '0px 0px 3px rgba(0, 0, 0, 0.4)' }}
                                >
                                  {file.name}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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
