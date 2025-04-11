// controllers/Itineraries/create.js
import itinerary from "../../models/Itinerary.js";
import city from "../../models/city.js";
import user from "../../models/User.js";

// Crear un nuevo itinerario
export const createItinerary = async (req, res) => {
  try {
    const { title, description, cityId, userId, duration, price } = req.body;
    
    // Verificar si la ciudad existe
    const cityExists = await city.findById(cityId);
    if (!cityExists) {
      return res.status(404).json({ 
        success: false, 
        message: `No existe ciudad con ID: ${cityId}` 
      });
    }
    
    // Verificar si el usuario existe
    const userExists = await user.findById(userId);
    if (!userExists) {
      return res.status(404).json({ 
        success: false, 
        message: `No existe usuario con ID: ${userId}` 
      });
    }
    
    // Crear el nuevo itinerario
    const newItinerary = new itinerary({
      title,
      description,
      city: cityId,
      user: userId,
      duration,
      price,
      likes: [],
      activities: [],
      comments: []
    });
    
    // Guardar el itinerario en la base de datos
    await newItinerary.save();
    
    // Retornar el itinerario creado
    return res.status(201).json({ 
      success: true,
      message: "Itinerario creado exitosamente", 
      itinerary: newItinerary 
    });
  } catch (error) {
    // Manejar errores
    return res.status(500).json({ 
      success: false, 
      message: "Error al crear itinerario", 
      error: error.message 
    });
  }
};

export default createItinerary;