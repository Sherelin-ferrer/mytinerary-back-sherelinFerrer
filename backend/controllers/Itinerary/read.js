
import Itinerary from "../../models/Itinerary.js";
import "../../models/User.js";
import city from "../../models/city.js";
import  "../../models/activities.js";

// Obtener todos los itinerarios con populate completo
export const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find()
      .populate('city', 'name') 
      .populate('user', 'name photo ') 
      .populate('likes',) 
      .populate({
        path: 'comments.user', 
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
    const { cityName } = req.params;

    // Buscar la ciudad por nombre
    const foundCity = await city.findOne({ name: cityName });

    if (!foundCity) {
      return res.status(404).json({
        success: false,
        message: 'City not found',
      });
    }

    // Buscar los itinerarios usando el ID de la ciudad encontrada
    const itineraries = await Itinerary.find({ city: foundCity._id })
      .populate('city', 'name ') // Popula la ciudad
      .populate('user', 'name photo')
      .populate('likes', )
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
      .populate('city','name ') 
      .populate('user','name photo') 
      .populate('likes') 
      .populate({
        path: 'comments.user',
        select: 'name photo email' 
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