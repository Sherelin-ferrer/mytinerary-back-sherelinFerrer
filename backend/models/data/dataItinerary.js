import "dotenv/config.js";
import "../../config/database.js";
import itinerary from "../Itinerary.js";
import City from "../City.js";
import user from "../User.js";

async function loadItineraryData() {
  try {
    const cities = await City.find({});
    const users = await user.find({});

    const cityIds = cities.map(city => city._id);
    const userIds = users.map(user => user._id);

    if (cityIds.length < 10 || userIds.length < 15) {
      console.error("No hay suficientes datos de ciudades o usuarios. Asegúrate de haber cargado estos datos primero.");
      return;
    }

    const itineraries = [
      {
        title: "Tour histórico por Nueva York",
        description: "Recorrido por los principales monumentos históricos de Nueva York",
        city: cityIds[0],
        user: userIds[0],
        duration: 4,
        price: 50,
        likes: [],
        comments: [],
        hashtags: ["#nyc", "#historia", "#monumentos", "#cultura"]
      },
      {
        title: "Londres en 24 horas",
        description: "Lo mejor de Londres en un día completo",
        city: cityIds[1],
        user: userIds[1],
        duration: 6,
        price: 65,
        likes: [],
        comments: [],
        hashtags: ["#londres", "#tour", "#bigben", "#viajeexpress"]
      },
      {
        title: "Tokio nocturno",
        description: "Experimenta las luces y la vida nocturna de Tokio",
        city: cityIds[2],
        user: userIds[2],
        duration: 5,
        price: 70,
        likes: [],
        comments: [],
        hashtags: ["#tokio", "#nocturno", "#luces", "#japón"]
      },
      {
        title: "Paseo por el Coliseo y el Foro Romano",
        description: "Viaje al pasado romano visitando sus monumentos más emblemáticos",
        city: cityIds[3],
        user: userIds[3],
        duration: 3,
        price: 40,
        likes: [],
        comments: [],
        hashtags: ["#roma", "#coliseo", "#foro", "#historia"]
      },
      {
        title: "Navegando por la Bahía de Sidney",
        description: "Disfruta de las vistas de la Ópera y el Puente del Puerto desde el agua",
        city: cityIds[4],
        user: userIds[4],
        duration: 2,
        price: 55,
        likes: [],
        comments: [],
        hashtags: ["#sydney", "#bahía", "#barco", "#ópera"]
      },
      {
        title: "Carnaval de Río",
        description: "Vive la experiencia del famoso carnaval de Río de Janeiro",
        city: cityIds[5],
        user: userIds[5],
        duration: 8,
        price: 90,
        likes: [],
        comments: [],
        hashtags: ["#carnaval", "#rio", "#baile", "#brasil"]
      },
      {
        title: "Tour arquitectónico de Moscú",
        description: "Descubre los edificios más impresionantes de la capital rusa",
        city: cityIds[6],
        user: userIds[6],
        duration: 4,
        price: 45,
        likes: [],
        comments: [],
        hashtags: ["#moscú", "#arquitectura", "#rusia", "#historia"]
      },
      {
        title: "Compras en Dubái",
        description: "Visita los mejores centros comerciales de la ciudad del lujo",
        city: cityIds[7],
        user: userIds[7],
        duration: 5,
        price: 100,
        likes: [],
        comments: [],
        hashtags: ["#dubai", "#compras", "#lujo", "#shopping"]
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
        ],
        hashtags: ["#bangkok", "#templos", "#espiritual", "#tailandia"]
      },
      {
        title: "Historia del Muro de Berlín",
        description: "Conoce la historia de la división y reunificación de Alemania",
        city: cityIds[9],
        user: userIds[9],
        duration: 4,
        price: 40,
        likes: [],
        comments: [],
        hashtags: ["#berlín", "#muro", "#historia", "#alemania"]
      }
    ];

    const existingCount = await itinerary.countDocuments();
    if (existingCount > 0) {
      console.log(`Ya existen ${existingCount} itinerarios en la base de datos. ¿Deseas eliminarlos antes de insertar nuevos? (No implementado, modifica el código según necesites)`);
    }

    await itinerary.insertMany(itineraries);
    console.log("Itinerarios insertados con éxito");

  } catch (error) {
    console.error("Error al cargar los datos de itinerarios:", error);
  } finally {
    // mongoose.connection.close();
  }
}

loadItineraryData();