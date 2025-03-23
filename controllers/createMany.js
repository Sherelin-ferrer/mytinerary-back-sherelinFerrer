import city from "../models/city.js";

const createManyCities = async (req, res, next) => {
    try {
        const cities = req.body; // Recibe un array de ciudades desde el body
        const newCities = await city.insertMany(cities);

        res.status(201).json({
            message: "Ciudades creadas con éxito",
            data: newCities
        });
    } catch (error) {
        next(error);
    }
};

export default createManyCities;
