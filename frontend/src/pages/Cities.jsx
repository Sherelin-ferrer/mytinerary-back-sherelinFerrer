import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false); // 🔹 lo que faltaba

  useEffect(() => {
    fetch('http://localhost:8080/api/cities')
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener ciudades');
        return res.json();
      })
      .then(data => {
        console.log('Datos recibidos:', data);
        setCities(data);
      })
      .catch(error => {
        console.error(error);
        setError(true);
      });
  }, []);

  useEffect(() => {
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [search, cities]);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Cities</h1>

      <input
        type="text"
        placeholder="Search cities by name..."
        className="w-full p-2 mb-6 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔻 Mostrar error si falló el fetch */}
      {error ? (
        <div className="text-center mt-12 text-red-500 text-lg">
          ⚠️ Error al cargar las ciudades. Intenta más tarde.
        </div>
      ) : filteredCities.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCities.map((city) => (
            <CityCard key={city._id} name={city.name} img={city.photo} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-12 text-lg text-gray-600">
          😕 No cities found starting with "<strong>{search}</strong>".
        </div>
      )}
    </div>
  );
}
