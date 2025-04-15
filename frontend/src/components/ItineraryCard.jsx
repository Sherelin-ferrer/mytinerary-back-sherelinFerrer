


import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../store/itinerarySlice';
import { DollarSign, Heart } from "lucide-react";
import { useState } from 'react';

export default function ItineraryCard({ itinerary }) {
  const dispatch = useDispatch();
  const likes = useSelector(state => state.itineraries.likes[itinerary._id] || 0);
  const [expanded, setExpanded] = useState(false);

  const handleLike = () => {
    dispatch(toggleLike(itinerary._id));
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center space-x-4 mb-3">
        <img src={itinerary.author.photo} alt={itinerary.author.name} className="w-12 h-12 rounded-full" />
        <span className="font-bold">{itinerary.author.name}</span>
      </div>
      <div className="flex items-center mb-2">
        {[...Array(itinerary.price)].map((_, i) => (
          <DollarSign key={i} className="text-green-500" size={20} />
        ))}
        <span className="ml-4 text-sm text-gray-600">{itinerary.duration} hrs</span>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="space-x-2">
          {itinerary.hashtags.map((tag, i) => (
            <span key={i} className="text-blue-600 text-sm">#{tag}</span>
          ))}
        </div>
        <button onClick={handleLike} className="text-red-500 hover:text-red-600 flex items-center">
        <Heart className="mr-1" /> {likes} 
        </button>
      </div>

      {/* Botón View More */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition"
      >
        {expanded ? 'Hide' : 'View more'}
      </button>

      {/* Sección Under Construction */}
      {expanded && (
        <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <h3 className="font-semibold text-lg mb-2">Under Construction 🚧</h3>
          <p>Estamos trabajando para añadir actividades y comentarios a este itinerario.</p>
        </div>
      )}
    </div>
  );
}
