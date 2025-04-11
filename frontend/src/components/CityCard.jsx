import { Link } from 'react-router-dom'; // AÑADIDO: Importamos Link

export default function CityCard({ id, name, photo }) { // AÑADIDO: Recibimos el id como prop
  return (
    <Link to={`/cities/${id}`} className="block"> {/* AÑADIDO: Envolvemos con Link */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img src={photo} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
      </div>
    </Link>
  );
}