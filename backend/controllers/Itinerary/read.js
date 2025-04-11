
import Itinerary from "../../models/Itinerary.js";

// Obtener todos los itinerarios con populate completo
export const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find()
      .populate('city', 'name country photo') // Popula la ciudad con campos específicos
      .populate('user', 'name photo email') // Popula el usuario con campos específicos
      .populate('likes', 'name photo') // Popula los usuarios que dieron like
      .populate({
        path: 'comments.user', // Popula el usuario dentro de cada comentario (populate anidado)
        select: 'name photo'
      });
    
    return res.status(200).json({
      success: true,
      message: 'Itineraries found',
      response: itineraries
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error getting itineraries',
      error: error.message
    });
  }
};

// Obtener itinerarios por ciudad
export const getItinerariesByCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    
    const itineraries = await Itinerary.find({ city: cityId })
      .populate('user', 'name photo')
      .populate('likes', 'name')
      .populate({
        path: 'comments.user',
        select: 'name photo'
      });
    
    if (itineraries.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No itineraries found for this city'
      });
    }
    
    return res.status(200).json({
      success: true,
      message: 'Itineraries found',
      response: itineraries
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error getting itineraries by city',
      error: error.message
    });
  }
};

// Ejemplo de un método para obtener un itinerario específico con toda su información
export const getItineraryById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const itinerary = await Itinerary.findById(id)
      .populate('city') // Popula todos los campos de la ciudad
      .populate('user') // Popula todos los campos del usuario
      .populate('likes') // Popula todos los usuarios que dieron like
      .populate({
        path: 'comments.user', // Popula los usuarios de los comentarios
        select: 'name photo email' // Solo estos campos
      });
    
    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: 'Itinerary not found'
      });
    }
    
    return res.status(200).json({
      success: true,
      message: 'Itinerary found',
      response: itinerary
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error getting itinerary',
      error: error.message
    });
  }
};