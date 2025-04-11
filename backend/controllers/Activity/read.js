
import activity from "../../models/activities.js";

// Obtener todas las actividades
export const getAllActivities = async (req, res) => {
  try {
    // Buscar todas las actividades
    const activities = await activity.find().populate('itinerary', 'title');
    
    // Verificar si se encontraron actividades
    if (activities.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: "No se encontraron actividades" 
      });
    }
    
    // Retornar las actividades encontradas
    return res.status(200).json({ 
      success: true, 
      activities 
    });
  } catch (error) {
    // Manejar errores
    return res.status(500).json({ 
      success: false, 
      message: "Error al obtener actividades", 
      error: error.message 
    });
  }
};

// Obtener actividades por itinerario
export const getActivitiesByItinerary = async (req, res) => {
  try {
    const { itineraryId } = req.params;
    
    // Buscar actividades de un itinerario específico
    const activities = await activity.find({ itinerary: itineraryId });
    
    // Verificar si se encontraron actividades
    if (activities.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: `No se encontraron actividades para el itinerario con ID: ${itineraryId}` 
      });
    }
    
    // Retornar las actividades encontradas
    return res.status(200).json({ 
      success: true, 
      activities 
    });
  } catch (error) {
    // Manejar errores
    return res.status(500).json({ 
      success: false, 
      message: "Error al obtener actividades por itinerario", 
      error: error.message 
    });
  }
};

// Obtener una actividad por su ID
export const getActivityById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Buscar una actividad por su ID
    const foundActivity = await activity.findById(id).populate('itinerary', 'title');
    
    // Verificar si se encontró la actividad
    if (!foundActivity) {
      return res.status(404).json({ 
        success: false, 
        message: `No se encontró actividad con ID: ${id}` 
      });
    }
    
    // Retornar la actividad encontrada
    return res.status(200).json({ 
      success: true, 
      activity: foundActivity 
    });
  } catch (error) {
    // Manejar errores
    return res.status(500).json({ 
      success: false, 
      message: "Error al obtener actividad por ID", 
      error: error.message 
    });
  }
};