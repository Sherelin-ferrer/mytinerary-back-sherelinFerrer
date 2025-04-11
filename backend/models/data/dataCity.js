import "dotenv/config.js"
import "../../config/database.js"
import city from "../city.js"

let cities =  [
    {
      name: "Nueva York",
      photo: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Estados Unidos",
      continent: "América",
      description: "La ciudad que nunca duerme, famosa por Times Square y la Estatua de la Libertad.",
      currency: "Dólar estadounidense",
      population: 8419600,
      timezone: "EST"
    },
    {
      name: "Londres",
      photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Reino Unido",
      continent: "Europa",
      description: "Hogar del Big Ben y el Palacio de Buckingham.",
      currency: "Libra esterlina",
      population: 8982000,
      timezone: "GMT"
    },
    {
      name: "Tokio",
      photo: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Japón",
      continent: "Asia",
      description: "Una metrópolis ultramoderna combinada con templos históricos.",
      currency: "Yen",
      population: 13929000,
      timezone: "JST"
    },
    {
      name: "Roma",
      photo: "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Italia",
      continent: "Europa",
      description: "La ciudad eterna, hogar del Coliseo y el Vaticano.",
      currency: "Euro",
      population: 2873000,
      timezone: "CET"
    },
    {
      name: "Sídney",
      photo: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Australia",
      continent: "Oceanía",
      description: "Famosa por la Ópera de Sídney y la playa de Bondi.",
      currency: "Dólar australiano",
      population: 5312000,
      timezone: "AEST"
    },
    {
      name: "Río de Janeiro",
      photo: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Brasil",
      continent: "América",
      description: "Hogar del Cristo Redentor y las playas de Copacabana.",
      currency: "Real brasileño",
      population: 6748000,
      timezone: "BRT"
    },
    {
      name: "Moscú",
      photo: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Rusia",
      continent: "Europa",
      description: "Capital de Rusia, famosa por la Plaza Roja y el Kremlin.",
      currency: "Rublo",
      population: 12678000,
      timezone: "MSK"
    },
    {
      name: "Dubái",
      photo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Emiratos Árabes Unidos",
      continent: "Asia",
      description: "Conocida por el Burj Khalifa y sus lujosos rascacielos.",
      currency: "Dírham",
      population: 3331400,
      timezone: "GST"
    },
    {
      name: "Bangkok",
      photo: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Tailandia",
      continent: "Asia",
      description: "Famosa por sus templos y vibrante vida nocturna.",
      currency: "Baht",
      population: 10539000,
      timezone: "ICT"
    },
    {
      name: "Berlín",
      photo: "https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Alemania",
      continent: "Europa",
      description: "Capital alemana con una rica historia y vida cultural.",
      currency: "Euro",
      population: 3748000,
      timezone: "CET"
    },
    {
      name: "Toronto",
      photo: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Canadá",
      continent: "América",
      description: "La ciudad más grande de Canadá, hogar de la Torre CN.",
      currency: "Dólar canadiense",
      population: 2731500,
      timezone: "EST"
    },
    {
      name: "Los Ángeles",
      photo: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Estados Unidos",
      continent: "América",
      description: "Conocida por Hollywood y su cultura cinematográfica.",
      currency: "Dólar estadounidense",
      population: 3980400,
      timezone: "PST"
    },
    {
      name: "Estambul",
      photo: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "Turquía",
      continent: "Europa/Asia",
      description: "Ciudad única entre dos continentes con una rica historia.",
      currency: "Lira turca",
      population: 15519000,
      timezone: "TRT"
    },
    {
      name: "Madrid",
      photo: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800",
      country: "España",
      continent: "Europa",
      description: "Capital española conocida por su cultura y vida nocturna.",
      currency: "Euro",
      population: 3266000,
      timezone: "CET"
    },
    {
      name: "Buenos Aires",
      photo: "https://tse2.mm.bing.net/th?id=OIP.Tzm81OThs2PQ17kWl3YJGwHaE8&pid=Api",
      country: "Argentina",
      continent: "América",
      description: "La París de América Latina, famosa por el tango y su arquitectura.",
      currency: "Peso argentino",
      population: 2890000,
      timezone: "ART"
    }
  ];
  

  await city.deleteMany({});
  await city.insertMany(cities);
  