import "dotenv/config.js";
import "../../config/database.js";
import itinerary from "../Itinerary.js";
import City from "../City.js"; // Importamos el modelo de City
import User from "../User.js"; // Importamos el modelo de User

// Función principal asíncrona para ejecutar el script
async function loadItineraryData() {
  try {
    // Primero, obtenemos los IDs de ciudades y usuarios existentes en la base de datos
    const cities = await City.find({});
    const users = await User.find({});
    
    // Creamos arrays con los IDs para facilitar su uso
    const cityIds = cities.map(city => city._id);
    const userIds = users.map(user => user._id);
    
    // Verificamos que tengamos suficientes ciudades y usuarios
    if (cityIds.length < 10 || userIds.length < 15) {
      console.error("No hay suficientes datos de ciudades o usuarios. Asegúrate de haber cargado estos datos primero.");
      return;
    }

    // Definimos los itinerarios usando los IDs obtenidos
    const itineraries = [
      {
        title: "Tour histórico por Nueva York",
        description: "Recorrido por los principales monumentos históricos de Nueva York",
        city: cityIds[0], 
        user: userIds[0],
        duration: 4,
        price: 50,
        likes: [],
        comments: [ ]
      },
      {
        title: "Londres en 24 horas",
        description: "Lo mejor de Londres en un día completo",
        city: cityIds[1],
        user: userIds[1],
        duration: 6,
        price: 65,
        likes: [],
        comments: [ ]
      },
      {
        title: "Tokio nocturno",
        description: "Experimenta las luces y la vida nocturna de Tokio",
        city: cityIds[2], 
        user: userIds[2],
        duration: 5,
        price: 70,
        likes: [],
        comments: []
      },
      {
        title: "Paseo por el Coliseo y el Foro Romano",
        description: "Viaje al pasado romano visitando sus monumentos más emblemáticos",
        city: cityIds[3], 
        user: userIds[3],
        duration: 3,
        price: 40,
        likes: [],
        comments: [ ]
      },
      {
        title: "Navegando por la Bahía de Sidney",
        description: "Disfruta de las vistas de la Ópera y el Puente del Puerto desde el agua",
        city: cityIds[4], 
        user: userIds[4],
        duration: 2,
        price: 55,
        likes: [],
        comments: []
      },
      {
        title: "Carnaval de Río",
        description: "Vive la experiencia del famoso carnaval de Río de Janeiro",
        city: cityIds[5], 
        user: userIds[5],
        duration: 8,
        price: 90,
        likes: [],
        comments: [ ]
      },
      {
        title: "Tour arquitectónico de Moscú",
        description: "Descubre los edificios más impresionantes de la capital rusa",
        city: cityIds[6],
        user: userIds[6],
        duration: 4,
        price: 45,
        likes: [],
        comments: []
      },
      {
        title: "Compras en Dubái",
        description: "Visita los mejores centros comerciales de la ciudad del lujo",
        city: cityIds[7], 
        user: userIds[7],
        duration: 5,
        price: 100,
        likes: [],
        comments: []
      },
      {
        title: "Templos de Bangkok",
        description: "Recorrido por los templos más importantes de la capital tailandesa",
        city: cityIds[8],
        user: userIds[8],
        duration: 3,
        price: 35,
        likes: [userIds[12], userIds[13]],
        comments: [
          {
            user: userIds[14],
            text: "Una experiencia espiritual increíble.",
            date: new Date()
          }
        ]
      },
      {
        title: "Historia del Muro de Berlín",
        description: "Conoce la historia de la división y reunificación de Alemania",
        city: cityIds[9], 
        user: userIds[9],
        duration: 4,
        price: 40,
        likes: [],
        comments: []
      }
    ];

    // Verificamos si ya existen itinerarios para evitar duplicados
    const existingCount = await itinerary.countDocuments();
    if (existingCount > 0) {
      console.log(`Ya existen ${existingCount} itinerarios en la base de datos. ¿Deseas eliminarlos antes de insertar nuevos? (No implementado, modifica el código según necesites)`);
      // Aquí puedes agregar lógica para eliminar existentes si es necesario
      // await itinerary.deleteMany({});
    }

    // Insertamos los nuevos itinerarios
    await itinerary.insertMany(itineraries);
    console.log("Itinerarios insertados con éxito");
    
  } catch (error) {
    console.error("Error al cargar los datos de itinerarios:", error);
  } finally {
    // Opcional: Cerrar la conexión a la base de datos si es necesario
    // mongoose.connection.close();
  }
}

// Ejecutamos la función principal
loadItineraryData();