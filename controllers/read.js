import city from "../models/city.js";


// Obtener todas las ciudades
const AllCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las ciudades", error });
    }
};

// Obtener una ciudad por nombre
const CityByName = async (req, res) => {
    try {
        const city = await City.findOne({ name: req.params.name });
        if (!city) return res.status(404).json({ message: "Ciudad no encontrada" });
        res.json(city);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la ciudad", error });
    }
};

// Obtener una ciudad por país
const CityByCountry = async (req, res) => {
    try {
        const cities = await City.find({ country: req.params.country });
        if (cities.length === 0) return res.status(404).json({ message: "No se encontraron ciudades en ese país" });
        res.json(cities);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las ciudades", error });
    }
};





export { AllCities, CityByName, CityByCountry }
