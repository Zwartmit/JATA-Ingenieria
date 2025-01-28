import { certificados } from "../firebase/config.js";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const [file, setFiles] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await certificados(file);
      toast.success('Certificado subido con éxito.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.error(error);
      toast.error('Error, intente nuevamente.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center" style={{ textAlign: 'center', textShadow: '3px 3px 4px #0000004c' }}>
          Cargar certificados
        </h2>

        <form className="mb-6" style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="file"
              id="file-upload"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={e => setFiles(e.target.files[0])}
              className="mt-4 p-4 w-full border border-gray-300"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              style={{ backgroundColor: '#12297d', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', cursor: 'pointer', borderRadius: '20px' }}
            >
              Cargar
            </button>
          </div>
        </form>

        <ToastContainer style={{ width: '300px' }}/>
      </div>
    </section>
  );
}

export default Dashboard;
