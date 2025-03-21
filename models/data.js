import "dotenv/config.js"
import "../config/database.js"
import city from "../models/city.js"

let cities = [
    
        {
            "name": "Nueva York",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/4/4f/New_York_City_at_night_HDR.jpg",
            "country": "Estados Unidos",
            "continent": "América",
            "description": "La ciudad que nunca duerme, famosa por Times Square y la Estatua de la Libertad.",
            "currency": "Dólar estadounidense",
            "population": 8419600,
            "timezone": "EST"
        },
        {
            "name": "Londres",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/f/fd/London_Thames_Sunset_panorama_-_Feb_2008.jpg",
            "country": "Reino Unido",
            "continent": "Europa",
            "description": "Hogar del Big Ben y el Palacio de Buckingham.",
            "currency": "Libra esterlina",
            "population": 8982000,
            "timezone": "GMT"
        },
        {
            "name": "Tokio",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/0/09/Tokyo_Tower_and_Skyscrapers_in_Minato_Ku_Tokyo_Japan.jpg",
            "country": "Japón",
            "continent": "Asia",
            "description": "Una metrópolis ultramoderna combinada con templos históricos.",
            "currency": "Yen",
            "population": 13929000,
            "timezone": "JST"
        },
        {
            "name": "Roma",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Rome_Panorama.jpg",
            "country": "Italia",
            "continent": "Europa",
            "description": "La ciudad eterna, hogar del Coliseo y el Vaticano.",
            "currency": "Euro",
            "population": 2873000,
            "timezone": "CET"
        },
        {
            "name": "Sídney",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Sydney_Opera_House_Sails.jpg",
            "country": "Australia",
            "continent": "Oceanía",
            "description": "Famosa por la Ópera de Sídney y la playa de Bondi.",
            "currency": "Dólar australiano",
            "population": 5312000,
            "timezone": "AEST"
        },
        {
            "name": "Río de Janeiro",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/1/10/Rio_de_Janeiro%2C_Brazil_%28cropped%29.jpg",
            "country": "Brasil",
            "continent": "América",
            "description": "Hogar del Cristo Redentor y las playas de Copacabana.",
            "currency": "Real brasileño",
            "population": 6748000,
            "timezone": "BRT"
        },
        {
            "name": "Moscú",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/7/74/Moscow_City_2019.jpg",
            "country": "Rusia",
            "continent": "Europa",
            "description": "Capital de Rusia, famosa por la Plaza Roja y el Kremlin.",
            "currency": "Rublo",
            "population": 12678000,
            "timezone": "MSK"
        },
        {
            "name": "Dubái",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Dubai_Marina_Skyline_-_2014.jpg",
            "country": "Emiratos Árabes Unidos",
            "continent": "Asia",
            "description": "Conocida por el Burj Khalifa y sus lujosos rascacielos.",
            "currency": "Dírham",
            "population": 3331400,
            "timezone": "GST"
        },
        {
            "name": "Bangkok",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/1/19/Bangkok_nightscape.jpg",
            "country": "Tailandia",
            "continent": "Asia",
            "description": "Famosa por sus templos y vibrante vida nocturna.",
            "currency": "Baht",
            "population": 10539000,
            "timezone": "ICT"
        },
        {
            "name": "Berlín",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Berlin_Skyline_Fernsehturm_2020.jpg",
            "country": "Alemania",
            "continent": "Europa",
            "description": "Capital alemana con una rica historia y vida cultural.",
            "currency": "Euro",
            "population": 3748000,
            "timezone": "CET"
        },
        {
            "name": "Toronto",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/6/68/Toronto_skyline.jpg",
            "country": "Canadá",
            "continent": "América",
            "description": "La ciudad más grande de Canadá, hogar de la Torre CN.",
            "currency": "Dólar canadiense",
            "population": 2731500,
            "timezone": "EST"
        },
        {
            "name": "Los Ángeles",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Downtown_Los_Angeles_Skyline.jpg",
            "country": "Estados Unidos",
            "continent": "América",
            "description": "Conocida por Hollywood y su cultura cinematográfica.",
            "currency": "Dólar estadounidense",
            "population": 3980400,
            "timezone": "PST"
        },
        {
            "name": "Estambul",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/7/75/Bosphorus_Bridge_%28Istanbul%29.jpg",
            "country": "Turquía",
            "continent": "Europa/Asia",
            "description": "Ciudad única entre dos continentes con una rica historia.",
            "currency": "Lira turca",
            "population": 15519000,
            "timezone": "TRT"
        },
        {
            "name": "Pekín",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Beijing_skyline.jpg",
            "country": "China",
            "continent": "Asia",
            "description": "Capital de China, famosa por la Ciudad Prohibida y la Gran Muralla.",
            "currency": "Yuan",
            "population": 21540000,
            "timezone": "CST"
        },
        {
            "name": "El Cairo",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Cairo_skyline.jpg",
            "country": "Egipto",
            "continent": "África",
            "description": "Ciudad de las pirámides y la historia antigua.",
            "currency": "Libra egipcia",
            "population": 10230000,
            "timezone": "EET"
        },
        {
            "name": "Ciudad de México",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CDMX_Skyline.jpg",
            "country": "México",
            "continent": "América",
            "description": "Capital de México con una gran oferta cultural y gastronómica.",
            "currency": "Peso mexicano",
            "population": 9209944,
            "timezone": "CST"
        },
        {
            "name": "Buenos Aires",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/7/75/Buenos_Aires_Skyline.jpg",
            "country": "Argentina",
            "continent": "América",
            "description": "La París de América Latina, famosa por el tango y su arquitectura.",
            "currency": "Peso argentino",
            "population": 2890000,
            "timezone": "ART"
        },
        {
            "name": "Madrid",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Madrid_Skyline.jpg",
            "country": "España",
            "continent": "Europa",
            "description": "Capital española conocida por su cultura y vida nocturna.",
            "currency": "Euro",
            "population": 3266000,
            "timezone": "CET"
        },
        {
            "name": "Ámsterdam",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Amsterdam_canal_view.jpg",
            "country": "Países Bajos",
            "continent": "Europa",
            "description": "Famosa por sus canales y su arquitectura histórica.",
            "currency": "Euro",
            "population": 872680,
            "timezone": "CET"
        }
    
    
    
]
city.insertMany(cities) .then( () => console.log("City insetada")) 

