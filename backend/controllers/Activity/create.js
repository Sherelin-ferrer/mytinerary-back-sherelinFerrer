// controllers/Activities/create.js
import activity from "../../models/activities.js";
import itinerary from "../../models/Itinerary.js";

// Crear una nueva actividad
export const createActivity = async (req, res) => {
  try {
    const { name, photo, description, itineraryId } = req.body;
    
    // Verificar si el itinerario existe
    const itineraryExists = await itinerary.findById(itineraryId);
    if (!itineraryExists) {
      return res.status(404).json({ 
        success: false, 
        message: `No existe itinerario con ID: ${itineraryId}` 
      });
    }
    
    // Crear la nueva actividad
    const newActivity = new activity({
      name,
      photo,
      description,
      itinerary: itineraryId
    });
    
    // Guardar la actividad en la base de datos
    await newActivity.save();
    
    // Añadir la actividad al itinerario
    itineraryExists.activities.push(newActivity._id);
    await itineraryExists.save();
    
    // Retornar la actividad creada
    return res.status(201).json({ 
      success: true,
      message: "Actividad creada exitosamente", 
      activity: newActivity 
    });
  } catch (error) {
    // Manejar errores
    return res.status(500).json({ 
      success: false, 
      message: "Error al crear actividad", 
      error: error.message 
    });
  }
};

export default createActivity;