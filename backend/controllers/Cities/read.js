import city from "../../models/city.js";
import  "../../models/Itinerary.js";

const AllCities = async (req, res, next) => {
    try {
        const cities = await city.find().populate('itineraries').exec();
        
        if (!cities.length) {
            return next(new AppError('No cities found', 404));
        }

        res.status(200).json({
            success: true,
            count: cities.length,
            data: cities
        });

    } catch (error) {
        next(error);
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
