import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/cities/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los detalles de la ciudad');
        return res.json();
      })
      .then(data => {
        console.log('Detalles de ciudad:', data);
        setCity(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-6 mt-20 bg-gray-100">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center mt-12">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 inline-block">
              <p>Error: {error}</p>
            </div>
            <div>
              <button
                onClick={() => navigate('/cities')}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
              >
                Volver a Ciudades
              </button>
            </div>
          </div>
        ) : city ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-80">
                <img
                  src={city.photo}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <h1 className="text-4xl font-bold text-white p-6">{city.name}</h1>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6">{city.description || 'Información no disponible'}</p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-800">Under Construction</h3>
                  <p className="text-yellow-700">Estamos trabajando para añadir más información sobre esta ciudad.</p>
                </div>

                <button
                  onClick={() => navigate('/cities')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300"
                >
                  Volver a Ciudades
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center mt-12 text-lg text-gray-600">
            Ciudad no encontrada.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}