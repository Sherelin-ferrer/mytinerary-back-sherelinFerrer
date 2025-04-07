import city from "../models/city.js";


const AllCities = async (req, res) => {
    try {
        const cities = await city.find();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las ciudades", error });
    }
};



const CityByName = async (req, res, next) => {
    try {
        const cityName = await city.findOne({ name: new RegExp(`^${req.params.name}$`, "i") }).lean();


        cityName ? res.status(200).json(cityName) : res.status(404).json({ message: "city not found" });
    } catch (error) {
        next(error)
    }
};


const cityById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cityId = await city.findById(id);

        cityId
            ? res.status(200).json(cityId)
            : res.status(404).json({ message: "city not found" });

    } catch (error) {
        next(error)
    }
};




export { AllCities, CityByName, cityById }
