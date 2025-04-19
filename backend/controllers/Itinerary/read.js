import Itinerary from "../../models/Itinerary.js";
import city from "../../models/city.js";
import "../../models/User.js";
import "../../models/activities.js";

// Obtener todos los itinerarios
const AllItineraries = async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find()
      .populate('city', 'name photo')
      .populate('user', 'name photo')
      .populate('likes')
      .populate({
        path: 'comments.user',
        select: 'name photo'
      });

    res.status(200).json({
      success: true,
      message: 'Itineraries found',
      response: itineraries
    });
  } catch (error) {
    next(error);
  }
};
const ItinerariesByCity = async (req, res, next) => {
  try {
    const { cityName } = req.params;
    console.log("Buscando ciudad:", cityName);

    const foundCity = await city.findOne({
      name: new RegExp(`^${cityName}$`, 'i')
    });

    console.log("Ciudad encontrada:", foundCity);

    if (!foundCity) {
      return res.status(404).json({
        success: false,
        message: 'City not found'
      });
    }

    console.log("ID de la ciudad:", foundCity._id);

    const itineraries = await Itinerary.find({ city: foundCity._id })
      .populate('city', 'name photo')
      .populate('user', 'name photo')
      .populate('likes')
      .populate({
        path: 'comments.user',
        select: 'name photo'
      });

    console.log("Itinerarios encontrados:", itineraries.length);

    if (itineraries.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No itineraries found for this city'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Itineraries found',
      response: itineraries
    });
  } catch (error) {
    console.error("Error completo:", error);
    next(error);
  }
}; //*

// Obtener un itinerario por ID
const ItineraryById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const itinerary = await Itinerary.findById(id)
      .populate('city', 'name photo')
      .populate('user', 'name photo')
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

    res.status(200).json({
      success: true,
      message: 'Itinerary found',
      response: itinerary
    });
  } catch (error) {
    next(error);
  }
};

export { AllItineraries, ItinerariesByCity, ItineraryById };
